import React from 'react';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Shreya Shete",
      role: "Co-Founder",
      image: "/images/team/shreya.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      name: "Grace Chi",
      role: "Co-Founder",
      image: "/images/team/grace.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    },
    {
      name: "Leela Ramanathan",
      role: "Co-Founder",
      image: "/images/team/leela.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="bg-[#0C2944] text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6 tracking-wide">About Us</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-blue-100">
              We're dedicated to connecting Montgomery County students with resources for success.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0C2944] mb-10 tracking-wide">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0C2944] mb-10 tracking-wide">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder-profile.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0C2944]">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="mt-4 text-gray-700">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;