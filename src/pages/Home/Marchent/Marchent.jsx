import React from 'react';
import localImg from "../../../assets/location-merchant.png";

const Marchent = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* Wavy Background Pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
                        <path 
                            d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" 
                            fill="url(#wave-gradient)"
                        />
                        <defs>
                            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0d9488" />
                                <stop offset="100%" stopColor="#14b8a6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Merchant and Customer Satisfaction
                            <br />
                            <span className="text-white">is Our First Priority</span>
                        </h2>
                        
                        <p className="text-teal-100 text-base md:text-lg leading-relaxed max-w-xl">
                            We offer the lowest delivery charge with the highest value along with 
                            100% safety of your product. Pathao courier delivers your parcels in every 
                            corner of Bangladesh right on time.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-3 bg-lime-400 hover:bg-lime-500 text-teal-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Become a Merchant
                            </button>
                            <button className="px-8 py-3 bg-transparent hover:bg-teal-700 text-lime-400 font-semibold rounded-full border-2 border-lime-400 transition-all duration-300">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end z-10">
                        <div className="relative w-full max-w-md">
                            <img 
                                src={localImg} 
                                alt="Delivery Location"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-teal-400 opacity-10 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600 opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            </div>
        </div>
    );
};

export default Marchent;