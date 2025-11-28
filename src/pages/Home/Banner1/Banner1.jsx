import React from "react";
import { FiTruck } from "react-icons/fi"; // React icon imported

const Banner1 = () => {
  const data = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="bg-[#e9eeee] py-16 px-6">
      <h2 className="text-3xl font-bold text-[#053429] mb-10">
        How it Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 text-left"
          >
            {/* React Icon */}
            <FiTruck className="text-[#053429] text-4xl mb-4" />

            {/* title */}
            <h3 className="text-xl font-semibold text-[#053429]">
              {item.title}
            </h3>

            {/* description */}
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner1;
