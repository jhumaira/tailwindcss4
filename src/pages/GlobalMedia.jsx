// src/components/GlobalMedia.jsx
import React from 'react';
import amaniLogo from '../assets/logos/amani.png';
import jamaaLogo from '../assets/logos/jamaa.png';
import holisticLogo from '../assets/logos/holistic.png';

export default function GlobalMedia() {
  const resources = [
    {
      name: 'Amani Birth',
      url: 'https://amanibirth.com',
      logo: amaniLogo,
      description: 'Islamic-based childbirth education & doula training'
    },
    {
      name: 'Jamaa Birth Village',
      url: 'https://jamaabirthvillage.org',
      logo: jamaaLogo,
      description: 'Culturally‑centred midwifery & birth support'
    },
    {
      name: 'Birthworks International',
      url: 'https://birthworks.org/',
      logo: holisticLogo,
      description: 'Evidence‑based maternal health resources'
    }
  ];

  return (
    <section className="bg-white min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Global Birth & Doula Resources
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover trusted global platforms offering Islamic‑inspired doula care,
          midwifery training, and holistic maternal health support.
        </p>
      </header>
      <div className="container mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((res, i) => (
          <a
            key={i}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="mb-4">
                <img
                  src={res.logo}
                  alt={`${res.name} logo`}
                  className="h-12 w-auto mx-auto"
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                {res.name}
              </h2>
              <p className="mt-2 flex-grow text-gray-600">{res.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                Visit resource →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
