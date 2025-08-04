import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const courseName = searchParams.get("course") || "Doula Training";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Enrollment submitted for ${courseName}!`);
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6 flex flex-col items-center">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-heading font-bold text-dark">
          Enroll in {courseName}
        </h1>
        <p className="mt-4 text-lg text-text max-w-2xl mx-auto">
          Fill out the form below to secure your spot in our holistic training
          program. Our team will reach out to guide you through the next steps.
        </p>
      </section>

      {/* Enrollment Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-accent/20 mt-10 p-8 rounded-xl shadow-lg w-full max-w-xl space-y-6"
      >
        <div>
          <label className="block text-dark font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-dark font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-dark font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-dark font-semibold">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <div>
          <label className="block text-dark font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full shadow hover:shadow-lg hover:opacity-90 transition w-full text-lg"
        >
          Submit Enrollment
        </button>
      </form>
    </div>
  );
}
