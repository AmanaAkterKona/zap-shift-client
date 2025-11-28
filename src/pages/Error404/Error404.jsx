import React from "react";
import { Link } from "react-router";
import Img404 from "../../assets/error404.avif"

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F6F7] px-5">
      <div className="bg-white rounded-3xl shadow-md max-w-3xl w-full py-20 flex flex-col items-center">

        {/* Image */}
        <img 
          src={Img404}  // <-- Replace with your image path
          alt="404 Illustration" 
          className="w-52 h-auto mb-6"
        />

        {/* Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#053B47] mb-8">
          Error 404
        </h1>

        {/* Button */}
        <Link
          to="/"
          className="bg-[#C4EB4D] text-[#053B47] font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#b8e43e] transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
