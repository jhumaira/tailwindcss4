import { useState } from "react";
import { FiBookOpen, FiPlayCircle, FiHeart, FiGlobe } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const courses = [
    { title: "Foundations of Doula Training", description: "Learn the fundamentals of becoming a compassionate, faith-centered doula.", icon: <FiBookOpen className="text-4xl text-primary" />, duration: "6 weeks", level: "Beginner" },
    { title: "Holistic Midwifery Practices", description: "Comprehensive natural approaches to midwifery with hands-on techniques.", icon: <FiHeart className="text-4xl text-primary" />, duration: "8 weeks", level: "Intermediate" },
    { title: "Islamic Birth Traditions", description: "Study prophetic guidance and Islamic teachings on pregnancy and childbirth.", icon: <FiGlobe className="text-4xl text-primary" />, duration: "4 weeks", level: "Beginner" },
    { title: "Postpartum Care & Healing", description: "Focused training on holistic postpartum recovery and emotional wellness.", icon: <FiHeart className="text-4xl text-primary" />, duration: "5 weeks", level: "Intermediate" },
    { title: "Nutrition for Pregnancy", description: "Explore natural nutrition approaches to support maternal and newborn health.", icon: <FiBookOpen className="text-4xl text-primary" />, duration: "4 weeks", level: "Beginner" },
    { title: "Supporting Rural Communities", description: "Specialized training for doulas serving rural and low-resource areas.", icon: <FiGlobe className="text-4xl text-primary" />, duration: "6 weeks", level: "Intermediate" },
    { title: "Home Birth & Safety", description: "Best practices for supporting safe, natural home births.", icon: <FiPlayCircle className="text-4xl text-primary" />, duration: "7 weeks", level: "Advanced" },
    { title: "Maternal Mental Health", description: "Training on emotional and psychological care for mothers during birth.", icon: <FiHeart className="text-4xl text-primary" />, duration: "6 weeks", level: "Intermediate" },
    { title: "Birth Advocacy & Leadership", description: "Empower yourself to lead change in maternal health and birth rights.", icon: <FiGlobe className="text-4xl text-primary" />, duration: "8 weeks", level: "Advanced" },
    { title: "Spiritual Support During Labor", description: "Learn faith-based doula practices including dhikr and Quran recitation.", icon: <FiHeart className="text-4xl text-primary" />, duration: "5 weeks", level: "Beginner" },
  ];

  const handleEnroll = (courseTitle) => {
    navigate(`/enroll?course=${encodeURIComponent(courseTitle)}`);
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-heading font-bold text-dark">Doula & Midwifery Courses</h1>
        <p className="mt-4 text-lg text-text max-w-2xl mx-auto">
          Explore our specialized training designed for holistic birth workers, rooted in natural care 
          and Islamic teachings, with programs tailored for rural and global communities.
        </p>
      </section>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCourse(course)}
            className="bg-accent/20 p-6 rounded-lg shadow hover:shadow-xl cursor-pointer transition-transform transform hover:-translate-y-2 hover:bg-accent/30"
          >
            <div className="flex justify-center mb-4">{course.icon}</div>
            <h3 className="text-2xl font-semibold text-primary mb-2">{course.title}</h3>
            <p className="text-text mb-4">{course.description}</p>
            <div className="flex justify-between text-sm text-dark font-medium">
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Course Details */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full relative transform transition-transform duration-300 scale-95 hover:scale-100 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-dark"
              onClick={() => setSelectedCourse(null)}
            >
              ✕
            </button>
            <div className="flex justify-center mb-4">{selectedCourse.icon}</div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">{selectedCourse.title}</h2>
            <p className="text-text mb-6">{selectedCourse.description}</p>
            <div className="flex justify-between text-sm text-dark mb-6">
              <span>Duration: {selectedCourse.duration}</span>
              <span>Level: {selectedCourse.level}</span>
            </div>
            <button
              onClick={() => handleEnroll(selectedCourse.title)}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full shadow hover:shadow-lg transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
