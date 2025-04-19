import React from 'react';
import { Search, Calendar } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')",
            backgroundColor: "#1E5A8D" // Updated to match the blue-500 from config
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-500/40 z-10"></div>

      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide">
            Equipping Students for Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            High school and career readiness resources for students in Montgomery County
          </p>

          {/* Buttons side by side */}
          <div className="max-w-lg mx-auto flex gap-4">
            <button
              className="flex items-center justify-center space-x-2 bg-white text-blue-800 px-5 py-3 rounded-full hover:bg-blue-100 transition-colors font-medium flex-1"
              onClick={() => setCurrentPage('resources')}
            >
              <Search size={20} />
              <span>Search for resources</span>
            </button>
            <button
              className="flex items-center justify-center space-x-2 bg-blue-800 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium flex-1"
              onClick={() => {
                document.getElementById('events-section').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Calendar size={20} className="mr-1" />
              <span>View Events</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;