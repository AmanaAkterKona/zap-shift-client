import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6"; // Modern circular user icon
import { FaStar } from "react-icons/fa"; // Star icon for ratings

const ReviewCard = ({ review }) => {
  const { userName, ratings, quote, review: testimonial, user_photoURL } = review;
  const ratingCount = Math.round(ratings); // Round ratings to nearest whole number

  return (
    <div className="w-full max-w-md">
      <div className="card bg-white shadow-md rounded-2xl p-6 border border-gray-100">
        {/* Quote Icon */}
        <div className="text-[#7EC5C9] text-3xl mb-1">
          <FaQuoteRight />
        </div>

        {/* Extra small text under icon */}
        <p className="mb-4">{testimonial}</p>

        {/* Review Text */}
        <p className="text-gray-600 text-sm leading-relaxed">{quote}</p>

        {/* Dotted Divider */}
        <div className="my-4 border-t border-dashed border-gray-300"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* User Photo */}
          <div className="text-[#004D52] text-5xl rounded-full overflow-hidden w-12 h-12">
            <img src={user_photoURL} alt={userName} className="w-full h-full object-cover" />
          </div>

          {/* User Name & Ratings */}
          <div>
            <h3 className="text-gray-900 font-semibold">{userName}</h3>
            <div className="flex items-center gap-1">
              {/* Dynamic star icons */}
              {Array.from({ length: ratingCount }).map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
              <span className="text-gray-500 text-xs ml-1">{ratings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
