import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import riderImg from "../../assets/agent-pending.png";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  const selectedRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application have been submitted. we will reach to you very soon",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="w-full min-h-screen p-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-primary">Be a Rider</h2>
      <p className="text-gray-600 mt-2 max-w-2xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Left Form Section */}
        <form
          onSubmit={handleSubmit(handleRiderApplication)}
          className="space-y-5"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Tell us about yourself
          </h3>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-medium">Your Name</label>
            <input
              {...register("name")}
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              placeholder="Your Name"
            />
          </div>

          {/* Driving License */}
          <div className="flex flex-col">
            <label className="font-medium">Driving License Number</label>
            <input
              {...register("license")}
              className="input input-bordered w-full"
              placeholder="Driving License Number"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium">Your Email</label>
            <input
              {...register("email")}
              defaultValue={user?.email}
              className="input input-bordered w-full"
              placeholder="Your Email"
            />
          </div>

          {/* Region */}
          <div className="flex flex-col">
            <label className="font-medium">Your Region</label>
            <select
              {...register("region")}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Select Your Region
              </option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* District */}
          <div className="flex flex-col">
            <label className="font-medium">Your District</label>
            <select
              {...register("district")}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Select Your District
              </option>
              {selectedRegion &&
                districtsByRegion(selectedRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
            </select>
          </div>

          {/* NID */}
          <div className="flex flex-col">
            <label className="font-medium">NID No</label>
            <input
              {...register("nid")}
              className="input input-bordered w-full"
              placeholder="NID Number"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-medium">Phone Number</label>
            <input
              {...register("phone")}
              className="input input-bordered w-full"
              placeholder="Phone Number"
            />
          </div>

          {/* Bike Model */}
          <div className="flex flex-col">
            <label className="font-medium">Bike Brand Model and Year</label>
            <input
              {...register("bikeModel")}
              className="input input-bordered w-full"
              placeholder="Bike Brand Model and Year"
            />
          </div>

          {/* Bike Number */}
          <div className="flex flex-col">
            <label className="font-medium">Bike Registration Number</label>
            <input
              {...register("bikeReg")}
              className="input input-bordered w-full"
              placeholder="Bike Registration Number"
            />
          </div>

          {/* About */}
          <div className="flex flex-col">
            <label className="font-medium">Tell Us About Yourself</label>
            <input
              {...register("about")}
              className="input input-bordered w-full"
              placeholder="Tell Us About Yourself"
            />
          </div>

          {/* Submit */}
          <button className="btn bg-lime-300 w-full mt-4">
            Apply as a Rider
          </button>
        </form>

        {/* Right Image */}
        <div className="flex justify-center items-start">
          <img src={riderImg} alt="Rider" className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default Rider;
