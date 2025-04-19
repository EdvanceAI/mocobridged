import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Building, MapPin } from 'lucide-react';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter States
  const [typeFilters, setTypeFilters] = useState([]);
  const [fieldFilters, setFieldFilters] = useState([]);
  const [locationFilters, setLocationFilters] = useState([]);
  const [eventFilters, setEventFilters] = useState([]);

  const typeOptions = ["Internship", "Scholarship", "Apprenticeship", "Volunteer", "Job", "Mentorship"];
  const fieldOptions = ["Technology", "Healthcare", "Business", "Arts", "Education", "Science", "Engineering"];
  const locationOptions = ["Rockville", "Silver Spring", "Bethesda", "Gaithersburg", "Germantown", "Potomac"];
  const eventOptions = ["Career Fair", "Workshop", "Info Session", "Networking Event", "Competition"];

  const resources = [
    {
      id: 1,
      title: "Web Development Intern",
      organization: "TechFuture",
      location: "Rockville, MD",
      description: "Join our team to gain hands-on experience in front-end and back-end web development. Learn the latest technologies while working on real projects.",
      tags: ["Internship", "Technology", "Part-time"],
      resourceType: "internship",
      url: "https://example.com/webdev-intern"
    },
    {
      id: 2,
      title: "Community Tech Helper",
      organization: "Digital Bridges",
      location: "Rockville, MD",
      description: "Help seniors and underserved communities learn basic computer skills. Great opportunity for students interested in education and technology.",
      tags: ["Volunteer", "Technology", "Education"],
      resourceType: "volunteer",
      url: "https://example.com/tech-helper"
    },
    {
      id: 3,
      title: "IT Support Apprentice",
      organization: "Montgomery County Public Schools",
      location: "Rockville, MD",
      description: "Learn IT support skills while helping maintain school district technology. Paid apprenticeship with flexible hours for high school students.",
      tags: ["Apprenticeship", "Technology", "Paid"],
      resourceType: "apprenticeship",
      url: "https://example.com/it-apprentice"
    },
    {
      id: 4,
      title: "Healthcare Explorer Scholarship",
      organization: "Montgomery Healthcare Foundation",
      location: "Silver Spring, MD",
      description: "$2,500 scholarship for high school seniors pursuing healthcare careers. Requires 3.0 GPA and demonstrated interest in healthcare field.",
      tags: ["Scholarship", "Healthcare", "$2,500"],
      resourceType: "scholarship",
      url: "https://example.com/healthcare-scholarship"
    },
    {
      id: 5,
      title: "Spring Career Fair",
      organization: "Montgomery County Schools",
      location: "Bethesda, MD",
      description: "Meet representatives from over 50 local companies and organizations. Great opportunity to network and learn about career paths in various industries.",
      tags: ["Career Fair", "Networking", "All Fields"],
      resourceType: "career-fair",
      url: "https://example.com/career-fair"
    },
    {
      id: 6,
      title: "Summer Research Assistant",
      organization: "BioTech Research Institute",
      location: "Gaithersburg, MD",
      description: "Assist scientists with lab experiments and data collection. Excellent opportunity for students interested in biology and research careers.",
      tags: ["Internship", "Science", "Paid"],
      resourceType: "internship",
      url: "https://example.com/research-assistant"
    }
  ];

  // Filter and search resources
  const filteredResources = resources.filter(resource => {
    // Search functionality
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        resource.title.toLowerCase().includes(query) ||
        resource.organization.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.location.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query));

      if (!matchesSearch) return false;
    }

    // Filter by type
    if (typeFilters.length > 0 && !resource.tags.some(tag => typeFilters.includes(tag))) return false;

    // Filter by field
    if (fieldFilters.length > 0 && !resource.tags.some(tag => fieldFilters.includes(tag))) return false;

    // Filter by location
    if (locationFilters.length > 0 && !locationFilters.some(loc => resource.location.includes(loc))) return false;

    // Filter by event type
    if (eventFilters.length > 0 && !resource.tags.some(tag => eventFilters.includes(tag))) return false;

    return true;
  });

  // Modern dropdown component
  const ModernDropdown = ({ title, options, selectedOptions, setSelectedOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-2.5 px-4 rounded-md text-left flex justify-between items-center bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div>
            <span className="font-medium text-[#0C2944]">{title}</span>
            {selectedOptions.length > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {selectedOptions.length}
              </span>
            )}
          </div>
          <ChevronDown size={18} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg py-1 max-h-48 overflow-auto">
            <div className="px-3 py-2 border-b border-gray-100">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-700">Select options</span>
                {selectedOptions.length > 0 && (
                  <button
                    onClick={() => setSelectedOptions([])}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {options.map((option) => (
              <div key={option} className="px-3 py-1.5 hover:bg-gray-50">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => {
                      if (selectedOptions.includes(option)) {
                        setSelectedOptions(selectedOptions.filter(item => item !== option));
                      } else {
                        setSelectedOptions([...selectedOptions, option]);
                      }
                    }}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Display selected filters
  const selectedFiltersCount = typeFilters.length + fieldFilters.length + locationFilters.length + eventFilters.length;

  // Function to clear all filters
  const clearAllFilters = () => {
    setTypeFilters([]);
    setFieldFilters([]);
    setLocationFilters([]);
    setEventFilters([]);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Larger Hero Section */}
      <div className="bg-[#0C2944] text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">Find Your Resources</h1>
          <p className="text-center text-blue-100 mb-10 max-w-2xl mx-auto">
            Explore our comprehensive database of opportunities, events, and resources.
          </p>

          {/* Search bar positioned lower */}
          <div className="relative max-w-lg mx-auto mt-10">
            <input
              type="text"
              placeholder="Search for opportunities, events, scholarships..."
              className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="absolute right-2 top-2 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filters - Centered with Resource Type and Event Type next to each other */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-60">
                <ModernDropdown
                  title="Resource Type"
                  options={typeOptions}
                  selectedOptions={typeFilters}
                  setSelectedOptions={setTypeFilters}
                />
              </div>
              <div className="w-full md:w-60">
                <ModernDropdown
                  title="Event Type"
                  options={eventOptions}
                  selectedOptions={eventFilters}
                  setSelectedOptions={setEventFilters}
                />
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-60">
                <ModernDropdown
                  title="Field"
                  options={fieldOptions}
                  selectedOptions={fieldFilters}
                  setSelectedOptions={setFieldFilters}
                />
              </div>
              <div className="w-full md:w-60">
                <ModernDropdown
                  title="Location"
                  options={locationOptions}
                  selectedOptions={locationFilters}
                  setSelectedOptions={setLocationFilters}
                />
              </div>
            </div>

            {selectedFiltersCount > 0 && (
              <div className="flex items-center">
                <button
                  onClick={clearAllFilters}
                  className="py-2 px-4 text-sm text-blue-700 hover:text-blue-900"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected filters display */}
      {selectedFiltersCount > 0 && (
        <div className="bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-2">
            <div className="flex flex-wrap justify-center gap-2">
              {typeFilters.map(filter => (
                <span key={`filter-${filter}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {filter}
                  <button
                    type="button"
                    className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                    onClick={() => setTypeFilters(typeFilters.filter(f => f !== filter))}
                  >
                    <span className="sr-only">Remove filter</span>
                    <X size={12} />
                  </button>
                </span>
              ))}
              {fieldFilters.map(filter => (
                <span key={`filter-${filter}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {filter}
                  <button
                    type="button"
                    className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                    onClick={() => setFieldFilters(fieldFilters.filter(f => f !== filter))}
                  >
                    <span className="sr-only">Remove filter</span>
                    <X size={12} />
                  </button>
                </span>
              ))}
              {locationFilters.map(filter => (
                <span key={`filter-${filter}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {filter}
                  <button
                    type="button"
                    className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                    onClick={() => setLocationFilters(locationFilters.filter(f => f !== filter))}
                  >
                    <span className="sr-only">Remove filter</span>
                    <X size={12} />
                  </button>
                </span>
              ))}
              {eventFilters.map(filter => (
                <span key={`filter-${filter}`} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {filter}
                  <button
                    type="button"
                    className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-400 hover:bg-blue-200 hover:text-blue-500"
                    onClick={() => setEventFilters(eventFilters.filter(f => f !== filter))}
                  >
                    <span className="sr-only">Remove filter</span>
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-lg font-medium text-[#0C2944] mb-4 text-center">
          {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'} Found
        </h2>

        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0C2944]">{resource.title}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Building size={16} className="mr-1.5" />
                    <span className="mr-3 text-sm">{resource.organization}</span>
                    <MapPin size={16} className="mr-1.5" />
                    <span className="text-sm">{resource.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-gray-700 line-clamp-2">{resource.description}</p>

                  <div className="mt-4 text-right">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 bg-[#0C2944] text-white text-sm rounded-md hover:bg-blue-800 transition-colors"
                    >
                      Apply Now
                      <ExternalLink size={14} className="ml-1.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredResources.length > 0 && (
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center rounded-md shadow-sm">
              <button className="px-3 py-1.5 bg-[#0C2944] text-white text-sm font-medium rounded-l-md">
                1
              </button>
              <button className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium border-y border-r border-gray-200 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium border-y border-r border-gray-200 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium rounded-r-md border-y border-r border-gray-200 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;