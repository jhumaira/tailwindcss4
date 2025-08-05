import { useState } from "react";
import { FiMapPin, FiSearch, FiPhone } from "react-icons/fi";
import worldMap from "../assets/world-map.png"; // Updated purple map

export default function FindProvider() {
  const [searchTerm, setSearchTerm] = useState("");

  const advocates = [
    { name: "Fatima Khan", country: "Pakistan", city: "Karachi", role: "Certified Doula", phone: "+92 300 1234567" },
    { name: "Aisha Al-Mansoori", country: "UAE", city: "Dubai", role: "Midwife", phone: "+971 50 9876543" },
    { name: "Layla Hassan", country: "Egypt", city: "Cairo", role: "Doula & Birth Educator", phone: "+20 100 4567890" },
    { name: "Maryam Yusuf", country: "UK", city: "London", role: "Holistic Doula", phone: "+44 7700 900123" },
  ];

  const filteredAdvocates = advocates.filter((advocate) =>
    [advocate.name, advocate.country, advocate.city, advocate.role]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-heading font-bold text-dark">Find Your Doula or Midwife</h1>
        <p className="mt-4 text-lg text-text max-w-2xl mx-auto">
          Search for certified holistic doulas and midwives worldwide using the search bar below.
        </p>
      </section>

      {/* Map Section */}
      <div className="flex justify-center mb-12">
        <img src={worldMap} alt="World Map" className="max-w-4xl w-full rounded-lg shadow-lg" />
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-lg">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, city, or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-3 px-10 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Advocates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredAdvocates.length > 0 ? (
          filteredAdvocates.map((advocate, idx) => (
            <div
              key={idx}
              className="bg-accent/20 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-primary">{advocate.name}</h3>
              <p className="text-text mt-2">{advocate.role}</p>
              <p className="flex items-center gap-2 text-dark mt-2">
                <FiMapPin /> {advocate.city}, {advocate.country}
              </p>
              <p className="flex items-center gap-2 text-dark mt-2">
                <FiPhone /> {advocate.phone}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No advocates found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}
