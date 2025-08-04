import { useState } from "react";
import { FiPlayCircle, FiImage } from "react-icons/fi";

export default function BirthVideosAndPhotos() {
  const [activeTab, setActiveTab] = useState("videos");

  const videos = [
    { src: 'https://www.youtube.com/embed/P0PDw9mWeYM', title: 'Natural Birth Experience' },
    { src: 'https://www.youtube.com/embed/sllvhkZFwGQ', title: 'Water Birth Session' },
    { src: 'https://www.youtube.com/embed/62U3P93axi8', title: 'Rural Emergency Birth Prep' },
  ];

  const photos = [
    { src: '/media/birth-photo1.jpg', title: 'Gentle Delivery' },
    { src: '/media/birth-photo2.jpg', title: 'Midwife Support' },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      {/* Header */}
      <h1 className="text-5xl font-heading font-bold text-dark text-center mb-6">
        Birth Videos & Photos
      </h1>
      <p className="text-lg text-text text-center max-w-xl mx-auto mb-10">
        Watch inspiring videos and explore beautiful photos showcasing holistic
        and natural birthing experiences worldwide.
      </p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-6 py-3 rounded-full font-medium transition ${
            activeTab === "videos"
              ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
              : "bg-accent/30 text-dark hover:bg-accent/50"
          }`}
        >
          <FiPlayCircle className="inline-block mr-2" />
          Videos
        </button>
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-6 py-3 rounded-full font-medium transition ${
            activeTab === "photos"
              ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
              : "bg-accent/30 text-dark hover:bg-accent/50"
          }`}
        >
          <FiImage className="inline-block mr-2" />
          Photos
        </button>
      </div>

      {/* Videos Section */}
      {activeTab === "videos" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <iframe
                className="w-full h-60 rounded-t-lg"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-xl font-semibold text-primary text-center p-4">
                {video.title}
              </h2>
            </div>
          ))}
        </div>
      )}

      {/* Photos Section */}
      {activeTab === "photos" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-primary text-center p-4">
                {photo.title}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
