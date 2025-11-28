import React from "react";

const Banner2 = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      highlight: true,
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-[#063028] py-20 px-6 text-center rounded-3xl">

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white">Our Services</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mt-3">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

        {services.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 text-center shadow-md 
              ${item.highlight ? "bg-[#b8df53]" : "bg-white"}`}
          >
            {/* Icon Placeholder */}
            <div className="w-14 h-14 mx-auto bg-[#f4f4f4] rounded-full flex items-center justify-center mb-5">
              {/* Replace with your icon OR react-icons later */}
              <span className="text-3xl">📦</span>
            </div>

            <h3 className="text-xl font-bold text-[#053429] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Banner2;
