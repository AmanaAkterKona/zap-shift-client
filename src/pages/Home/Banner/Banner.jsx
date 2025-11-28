import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="relative">
          <img src={bannerImg1} />

          {/* Buttons */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="px-6 py-3 bg-[#95c23d] text-black font-semibold rounded-full shadow">
              Track Your Parcel
            </button>

            <button className="px-6 py-3 bg-white border font-semibold rounded-full shadow">
              Be A Rider
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={bannerImg2} />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="px-6 py-3 bg-[#95c23d] text-black font-semibold rounded-full shadow">
              Track Your Parcel
            </button>

            <button className="px-6 py-3 bg-white border font-semibold rounded-full shadow">
              Be A Rider
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={bannerImg3} />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="px-6 py-3 bg-[#95c23d] text-black font-semibold rounded-full shadow">
              Track Your Parcel
            </button>

            <button className="px-6 py-3 bg-white border font-semibold rounded-full shadow">
              Be A Rider
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
