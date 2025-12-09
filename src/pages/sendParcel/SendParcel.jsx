import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  
  //explore useMemo useCallback
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const parcelWeight = parseFloat(data.parcelWeight);

    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and continue Payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        //save the parcel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
          if (res.data.insertedId) {
            navigate('/dashboard/my-parcels')
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Parcel has created. Please pay",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* parcel type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input input-bordered w-full"
              placeholder="Parcel Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input input-bordered w-full"
              placeholder="Parcel Weight"
            />
          </div>
        </div>

        {/* sender + receiver two column */}
        <div className="grid grid-cols-2 gap-8">
          {/* Sender Fieldset */}
          <fieldset className="border border-gray-300 p-5 rounded-xl">
            <legend className="text-xl font-semibold px-2">
              Sender Details
            </legend>

            {/* sender name */}
            <div className="flex flex-col gap-3 mt-3">
              <label className="font-medium">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                placeholder="Sender Name"
              />
              {/* sender email */}
              <label className="font-medium">Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input input-bordered w-full"
                placeholder="Sender Email"
              />

              {/* sender region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>

                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender districts */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a districts"
                  className="select"
                >
                  <option disabled={true}>Pick a districts</option>

                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* sender address */}
              <label className="font-medium">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input input-bordered w-full"
                placeholder="Sender Address"
              />

              {/* sender phone */}
              <label className="font-medium">Sender Phone No</label>
              <input
                type="number"
                {...register("senderPhoneNo")}
                className="input input-bordered w-full"
                placeholder="Sender Phone No"
              />
            </div>
          </fieldset>

          {/* Receiver Fieldset */}
          <fieldset className="border border-gray-300 p-5 rounded-xl">
            <legend className="text-xl font-semibold px-2">
              Receiver Details
            </legend>

            <div className="flex flex-col gap-3 mt-3">
              <label className="font-medium">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input input-bordered w-full"
                placeholder="Receiver Name"
              />

              <label className="font-medium">Receiver Email</label>
              <input
                type="text"
                {...register("receiverEmail")}
                className="input input-bordered w-full"
                placeholder="Receiver Email"
              />

              <label className="font-medium">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input input-bordered w-full"
                placeholder="Receiver Address"
              />

              {/* Receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="font-medium">Receiver Phone No</label>
              <input
                type="number"
                {...register("receiverPhoneNo")}
                className="input input-bordered w-full"
                placeholder="Receiver Phone No"
              />
            </div>
          </fieldset>
        </div>

        <input
          type="submit"
          className="btn btn-primary text-black mt-6"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
