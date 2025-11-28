import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// FIX: Custom Marker Icon
const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const position = [23.685, 90.3563]; // Bangladesh center
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.trim();

    if (!location) return;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 12); // zoom 12 for district
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-5">

      {/* Heading */}
      <h2 className="text-[42px] md:text-[50px] font-bold text-[#053B47] text-center">
        We are available in 64 districts
      </h2>

      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center mt-10"
      >
        <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow px-6 py-3 gap-3 border border-gray-200">
          <svg
            className="h-6 w-6 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            name="location"
            placeholder="Search here"
            className="w-full outline-none text-lg text-gray-700"
            type="search"
          />

          <button
            type="submit"
            className="bg-[#C4EB4D] text-[#053B47] text-lg font-semibold px-6 py-2 rounded-full hover:bg-[#b8e43e]"
          >
            Search
          </button>
        </div>
      </form>

      {/* Sub-Heading */}
      <h3 className="text-3xl md:text-4xl font-semibold text-[#053B47] mt-16 mb-6">
        We deliver almost all over Bangladesh
      </h3>

      {/* Map */}
      <div className="w-full h-[650px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center) => (
            <Marker
              key={center.id || center._id || Math.random()}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <div className="text-base">
                  <b>{center.name}</b> <br />
                  {center.address}
                  <br />
                  <span className="text-gray-600 text-sm">
                    Service Area: {center.covered_area.join(", ")}
                  </span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
