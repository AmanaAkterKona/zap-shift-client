import React from 'react';
import liveImg from "../../../assets/live-tracking.png";
import safeImg from "../../../assets/safe-delivery.png";
import supportImg from "../../../assets/safe-delivery.png";

const SafeZone = () => {
    const services = [
        {
            id: 1,
            image: liveImg,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
        },
        {
            id: 2,
            image: safeImg,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
        },
        {
            id: 3,
            image: supportImg,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Dotted Border Top */}
            <div className="border-t-2 border-dotted border-gray-300 mb-8"></div>

            {/* Services Grid */}
            <div className="space-y-6">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className="bg-white rounded-lg shadow-sm p-6 flex items-start gap-6 hover:shadow-md transition-shadow"
                    >
                        {/* Image Container */}
                        <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Vertical Divider */}
                        <div className="w-px h-20 bg-gray-200"></div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dotted Border Bottom */}
            <div className="border-t-2 border-dotted border-gray-300 mt-8"></div>
        </div>
    );
};

export default SafeZone;