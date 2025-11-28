import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "Story" },
    { id: "mission", label: "Mission" },
    { id: "success", label: "Success" },
    { id: "team", label: "Team & Others" },
  ];

  return (
    <div className="bg-[#f5f7f6] min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm p-10">

        {/* Title */}
        <h2 className="text-4xl font-bold text-[#042b29]">About Us</h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-3 max-w-3xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Divider */}
        <div className="border-b my-8"></div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 text-lg font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 transition-all ${
                activeTab === tab.id
                  ? "text-[#7FB600] border-b-2 border-[#7FB600]"
                  : "text-gray-500 hover:text-[#7FB600]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-10 text-gray-700 leading-relaxed space-y-6">
          {activeTab === "story" && (
            <>
              <p>
                Our journey began with a vision to transform the way people in Bangladesh 
                experience parcel delivery. What started as a small initiative in one city 
                has now grown into a nationwide network, connecting people, businesses, 
                and communities seamlessly. We realized that speed and reliability are not 
                just conveniences — they are essentials in today’s fast-paced world.
              </p>

              <p>
                Over the years, we have embraced technology, innovation, and a customer-first 
                mindset to make deliveries transparent, trackable, and stress-free. Our story 
                is not just about packages — it's about trust, commitment, and a relentless 
                pursuit of excellence. Every parcel we handle carries our promise of care and 
                timeliness.
              </p>
            </>
          )}

          {activeTab === "mission" && (
            <p>
              Our mission is to revolutionize parcel delivery across Bangladesh by making 
              it simple, fast, and reliable for everyone. We aim to build a network where 
              every shipment is handled with care, every customer feels valued, and every 
              delivery arrives on time. Beyond logistics, we are committed to empowering 
              businesses, supporting communities, and creating a service that people can 
              truly depend on. Efficiency, transparency, and customer satisfaction are 
              at the heart of everything we do.
            </p>
          )}

          {activeTab === "success" && (
            <p>
              Serving thousands of customers every month, expanding coverage
              nationwide, and maintaining a 98% on-time delivery rate — these are
              the milestones that inspire us to grow further.
            </p>
          )}

          {activeTab === "team" && (
            <p>
              Our team includes logistics experts, riders, support members, and
              technology specialists working together to make deliveries seamless.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
