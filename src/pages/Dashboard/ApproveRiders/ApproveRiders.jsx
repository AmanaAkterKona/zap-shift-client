import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  // Load riders
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // APPROVE FUNCTION
  const handleApproval = (rider) => {
    const updateInfo = { 
      status: "approved", 
      email: rider.email 
    };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Rider has been approved.",
          showConfirmButton: false,
          timer: 2000,
        });
        refetch();
      }
    });
  };

  // REJECT FUNCTION (FIXED)
  const handleReject = (rider) => {
    const updateInfo = { status: "rejected" };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "warning",
          title: "Rider has been rejected.",
          showConfirmButton: false,
          timer: 2000,
        });
        refetch();
      }
    });
  };

  // DELETE FUNCTION
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This rider will be deleted!",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Rider deleted successfully!",
              timer: 1500,
              showConfirmButton: false,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl">Riders pending Approval: {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>

                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-800"
                        : rider.status === "rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>

                <td>
                  {/* Approve */}
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn"
                  >
                    <FaUserCheck />
                  </button>

                  {/* Reject */}
                  <button
                    onClick={() => handleReject(rider)}
                    className="btn mx-3"
                  >
                    <IoPersonRemoveSharp />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(rider._id)}
                    className="btn"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
