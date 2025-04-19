import React from 'react';
import { Briefcase, Award, GraduationCap, Heart, Calendar, MapPin } from 'lucide-react';

const CategorySection = ({ setCurrentPage }) => {
  const categories = [
    {
      title: "Internships",
      description: "Gain valuable work experience",
      icon: <Briefcase size={32} className="text-blue-500" />,
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100",
      filterType: "internship"
    },
    {
      title: "Scholarships",
      description: "Financial aid for education",
      icon: <Award size={32} className="text-blue-500" />,
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100",
      filterType: "scholarship"
    },
    {
      title: "Apprenticeships",
      description: "Learn while you earn",
      icon: <GraduationCap size={32} className="text-blue-500" />,
      bgClass: "bg-gradient-to-br from-indigo-50 to-blue-100",
      filterType: "apprenticeship"
    },
    {
      title: "Volunteer",
      description: "Give back to your community",
      icon: <Heart size={32} className="text-blue-500" />,
      bgClass: "bg-gradient-to-br from-blue-50 to-blue-100",
      filterType: "volunteer"
    },
    {
      title: "Career Fairs",
      description: "Meet potential employers",
      icon: <Calendar size={32} className="text-blue-500" />,
      bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100",
      filterType: "career-fair"
    },
    {
      title: "Local Jobs",
      description: "Start your career locally",
      icon: <MapPin size={32} className="text-blue-500" />,
      bgClass: "bg-gradient-to-br from-indigo-50 to-blue-100",
      filterType: "job"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0C2944] mb-4 tracking-wide">
          Find Your Path
        </h2>

        {/* Added description */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gray-700 leading-relaxed">
            Explore our comprehensive database of resources for Montgomery County students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${category.bgClass} rounded-lg shadow-md hover:shadow-lg transition-all p-6 cursor-pointer transform hover:-translate-y-1 duration-300`}
              onClick={() => {
                setCurrentPage('resources');
                // Could also pass the filterType to pre-filter the resources page
                // sessionStorage.setItem('selectedResourceType', category.filterType);
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white/50">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0C2944] mt-4">{category.title}</h3>
                <p className="text-blue-700 mt-2">{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;