import React from 'react';

const MissionSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0C2944] mb-4 tracking-wide">Our Mission</h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-2 leading-relaxed">
            At MoCo Bridged, we believe every student deserves access to the resources
            and opportunities that will help them succeed in high school and beyond.
            We work to connect students with internships, apprenticeships, volunteer
            opportunities, and organizations that can help them develop the skills and
            experiences needed for long-term success in Montgomery County.
          </p>


        </div>
      </div>
    </div>
  );
};

export default MissionSection;