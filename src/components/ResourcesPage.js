import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Building, MapPin, BookOpen, Award, Users, GraduationCap } from 'lucide-react';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Simplified filter states
  const [categoryFilter, setCategoryFilter] = useState('all'); // 'all', 'opportunities', 'events'
  const [typeFilters, setTypeFilters] = useState([]);
  const [fieldFilters, setFieldFilters] = useState([]);
  const [locationFilters, setLocationFilters] = useState([]);

  // Simplified filter options
  const opportunityTypes = [
    "Internship",
    "Scholarship",
    "Volunteer",
    "Academic Support",
    "Mentorship",
    "College Prep"
  ];

  const eventTypes = [
    "Career Fair",
    "Workshop",
    "Info Session",
    "College Visit",
    "Competition"
  ];

  const fieldOptions = [
    "Technology",
    "Healthcare",
    "Business",
    "Arts",
    "Education",
    "Science",
    "Engineering"
  ];

  const locationOptions = [
    "Rockville",
    "Silver Spring",
    "Bethesda",
    "Gaithersburg",
    "Germantown",
    "Takoma Park"
  ];

  // Real resources gathered from search
  const resources = [
    {
      id: 1,
      title: "Montgomery College Stem Scholars Program",
      organization: "Montgomery College",
      location: "Multiple Locations, Montgomery County",
      description: "Offers scholarships each fall and spring semester to cover the cost of tuition for honors classes in STEM at the in-county rate.",
      tags: ["Scholarship", "Science", "Technology", "Engineering"],
      resourceType: "opportunity",
      category: "opportunities",
      status: "Ongoing - Applications accepted each semester",
      url: "https://www.montgomerycollege.edu/paying-for-college/financial-aid/types-of-financial-aid/institutional-grants-and-scholarships.html"
    },
    {
      id: 2,
      title: "Montgomery College Foundation Scholarships",
      organization: "Montgomery College Foundation",
      location: "Rockville, MD",
      description: "Over 400 scholarship opportunities for students in good academic standing with financial need. Deadlines: June 30 for fall semester, January 1 for spring.",
      tags: ["Scholarship", "College Prep"],
      resourceType: "scholarship",
      category: "opportunities",
      status: "Deadline: June 30, 2025 (Fall) / January 1, 2026 (Spring)",
      url: "https://www.montgomerycollege.edu/paying-for-college/financial-aid/types-of-financial-aid/institutional-grants-and-scholarships.html"
    },
    {
      id: 3,
      title: "Board of Trustees Academic Specialty Scholarship",
      organization: "Montgomery College",
      location: "Multiple Locations, Montgomery County",
      description: "One-year scholarship for talented Montgomery County high school graduates, covering full-time tuition and fees at county resident rate (up to 15 credits per semester).",
      tags: ["Scholarship", "College Prep"],
      resourceType: "scholarship",
      category: "opportunities",
      status: "Accepting applications for 2025-2026 school year",
      url: "https://www.montgomerycollege.edu/paying-for-college/financial-aid/types-of-financial-aid/institutional-grants-and-scholarships.html"
    },
    {
      id: 4,
      title: "MCPS Free Online Tutoring - Brainfuse HelpNow",
      organization: "Montgomery County Public Libraries",
      location: "Online",
      description: "Free online tutoring, homework help, test prep and writing assistance for all ages. Available daily from 2:00pm-11:00pm EDT.",
      tags: ["Academic Support", "Education"],
      resourceType: "academic-support",
      category: "opportunities",
      status: "Ongoing - Available year-round",
      url: "https://www.montgomeryschoolsmd.org/curriculum/tutoring/"
    },
    {
      id: 5,
      title: "George B. Thomas Learning Academy (Saturday School)",
      organization: "MCPS",
      location: "Multiple Locations, Montgomery County",
      description: "Comprehensive tutoring and mentoring program, commonly known as Saturday School, providing academic support for students.",
      tags: ["Academic Support", "Mentorship", "Education"],
      resourceType: "academic-support",
      category: "opportunities",
      status: "Ongoing - Sessions held every Saturday during school year",
      url: "https://www.montgomeryschoolsmd.org/curriculum/tutoring/"
    },
    {
      id: 6,
      title: "Montgomery College Career Internships",
      organization: "Montgomery College",
      location: "Silver Spring, MD",
      description: "Internships with flexible schedules, some offering payment of $16.85 per hour. Great opportunity to gain professional experience.",
      tags: ["Internship", "College Prep"],
      resourceType: "internship",
      category: "opportunities",
      status: "Applications open for Spring, Summer and Fall semesters",
      url: "https://www.montgomerycollege.edu/life-at-mc/student-career-and-employment-services/recruitment-events-and-job-fairs.html"
    },
    {
      id: 7,
      title: "Montgomery County Volunteer Center",
      organization: "Montgomery County Government",
      location: "Germantown, MD",
      description: "Find hundreds of volunteer opportunities by keyword, zip code, and interest areas. Great for students seeking community service hours.",
      tags: ["Volunteer", "Community Service"],
      resourceType: "volunteer",
      category: "opportunities",
      status: "Ongoing - Multiple opportunities available year-round",
      url: "https://www.montgomerycountymd.gov/volunteercenter/volunteers/"
    },
    {
      id: 8,
      title: "MCPS High School Internship Program",
      organization: "Montgomery County Public Schools",
      location: "Multiple Locations, Montgomery County",
      description: "Directed learning experiences outside the classroom where students gain skills through structured work-based learning experiences.",
      tags: ["Internship", "Education"],
      resourceType: "internship",
      category: "opportunities",
      status: "Contact Mr. Shawn Krasa at 240-801-0919 for current openings",
      url: "https://www.montgomeryschoolsmd.org/career-readiness/plans/internships/"
    },
    {
      id: 9,
      title: "Digital Learning Center Resources",
      organization: "Montgomery College",
      location: "Rockville & Takoma Park/Silver Spring",
      description: "Provides Windows and Mac workstations, support for digital literacy skills, and workshops on software packages like Microsoft Office.",
      tags: ["Academic Support", "Technology"],
      resourceType: "academic-support",
      category: "opportunities",
      status: "Ongoing - Open during regular campus hours",
      url: "https://www.montgomerycollege.edu/academics/online-learning/distance/academic-resources-and-technical-support.html"
    },
    {
      id: 10,
      title: "DSS Academic Support Centers",
      organization: "Montgomery College",
      location: "Multiple Campuses",
      description: "Provides organizational support, time-management, study skills, tutoring, assistive technology training for students with disabilities.",
      tags: ["Academic Support", "Education"],
      resourceType: "academic-support",
      category: "opportunities",
      status: "Ongoing - Services available by appointment",
      url: "https://www.montgomerycollege.edu/counseling-and-advising/disability-support-services/dss-tutoring-services.html"
    },
    {
      id: 11,
      title: "Dual Enrollment Program",
      organization: "Montgomery College",
      location: "Multiple Locations",
      description: "Earn college credit while still in high school. Free for MCPS students during designated semesters.",
      tags: ["College Prep", "Education"],
      resourceType: "college-prep",
      category: "opportunities",
      status: "Ongoing - Enrollment open for upcoming semesters",
      url: "https://www.montgomerycollege.edu/high-school-students/index.html"
    },
    {
      id: 12,
      title: "ACES (Achieving Collegiate Excellence and Success)",
      organization: "MC, MCPS, and Universities at Shady Grove",
      location: "Multiple Locations",
      description: "Collaborative program providing support and a seamless path to a bachelor's degree for high school students.",
      tags: ["College Prep", "Mentorship"],
      resourceType: "college-prep",
      category: "opportunities",
      status: "Accepting applications for next academic year",
      url: "https://www.montgomerycollege.edu/high-school-students/index.html"
    },
    {
      id: 13,
      title: "High School Special Programs Fair",
      organization: "Montgomery County Public Schools",
      location: "Online/Various Locations",
      description: "Learn about interest-based and criteria-based programs available for high school students. Applications open in fall for the following year.",
      tags: ["Info Session", "Education"],
      resourceType: "info-session",
      category: "events",
      date: "September 16, 2025 (7pm English, 8pm Spanish presentations)",
      url: "https://www.montgomeryschoolsmd.org/curriculum/specialprograms/high/"
    },
    {
      id: 14,
      title: "Career Fair with Local Employers",
      organization: "Montgomery College",
      location: "Multiple MC Campuses",
      description: "Meet representatives from local employers looking to recruit students for jobs, internships, and volunteer positions.",
      tags: ["Career Fair", "Networking"],
      resourceType: "career-fair",
      category: "events",
      date: "Recurring events throughout the year - Check website for schedule",
      url: "https://www.montgomerycollege.edu/life-at-mc/student-career-and-employment-services/recruitment-events-and-job-fairs.html"
    },
    {
      id: 15,
      title: "College Application Workshops",
      organization: "Montgomery County Public Schools",
      location: "Various High Schools",
      description: "Get help with college applications, essays, and financial aid forms. Sessions usually held in fall semester.",
      tags: ["Workshop", "College Prep"],
      resourceType: "workshop",
      category: "events",
      date: "Fall 2025 - September to November (check with your school)",
      url: "https://www.montgomeryschoolsmd.org/curriculum/careercenter/financialaid/scholarshipsearches"
    },
    {
      id: 16,
      title: "DSS Academic Success Workshops",
      organization: "Montgomery College",
      location: "Multiple Campuses/Online",
      description: "Series of workshops on topics like time management, test-taking, stress management, and research papers. Open to all students.",
      tags: ["Workshop", "Academic Support"],
      resourceType: "workshop",
      category: "events",
      date: "Spring 2025: Jan 28, Feb 19, Mar 10, and Apr 10 - RSVP required",
      url: "https://www.montgomerycollege.edu/counseling-and-advising/disability-support-services/dss-tutoring-services.html"
    },
    {
      id: 17,
      title: "Career Development Workshops",
      organization: "Montgomery College",
      location: "Multiple Campuses",
      description: "Learn about career planning, resume writing, interviewing, and job search strategies. Includes access to Big Interview for mock interview practice.",
      tags: ["Workshop", "Career Fair"],
      resourceType: "workshop",
      category: "events",
      date: "Monthly workshops - Check website for schedule",
      url: "https://www.montgomerycollege.edu/life-at-mc/student-career-and-employment-services/index.html"
    },
    {
      id: 18,
      title: "Campus Tours & College Visits",
      organization: "Universities at Shady Grove",
      location: "Rockville, MD",
      description: "Explore programs from nine University System of Maryland institutions located at one convenient campus in Montgomery County.",
      tags: ["College Visit", "College Prep"],
      resourceType: "college-visit",
      category: "events",
      date: "Weekly tours available - Registration required",
      url: "https://www.shadygrove.umd.edu/student-services/career-and-internship-center"
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

    // Filter by category
    if (categoryFilter !== 'all' && resource.category !== categoryFilter) return false;

    // Filter by type (opportunities or events)
    if (typeFilters.length > 0 && !resource.tags.some(tag => typeFilters.includes(tag))) return false;

    // Filter by field
    if (fieldFilters.length > 0 && !resource.tags.some(tag => fieldFilters.includes(tag))) return false;

    // Filter by location
    if (locationFilters.length > 0 && !locationFilters.some(loc => resource.location.includes(loc))) return false;

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
  const selectedFiltersCount = typeFilters.length + fieldFilters.length + locationFilters.length;

  // Function to clear all filters
  const clearAllFilters = () => {
    setCategoryFilter('all');
    setTypeFilters([]);
    setFieldFilters([]);
    setLocationFilters([]);
  };

  // Get the appropriate type options based on the selected category
  const getTypeOptions = () => {
    if (categoryFilter === 'opportunities') {
      return opportunityTypes;
    } else if (categoryFilter === 'events') {
      return eventTypes;
    } else {
      return [...opportunityTypes, ...eventTypes];
    }
  };

  // Resource card with icon based on resource type
  const ResourceCard = ({ resource }) => {
    // Choose icon based on resource type
    const getIcon = () => {
      switch(resource.resourceType) {
        case 'scholarship':
          return <Award size={20} className="mr-2 text-yellow-600" />;
        case 'internship':
          return <GraduationCap size={20} className="mr-2 text-blue-600" />;
        case 'volunteer':
          return <Users size={20} className="mr-2 text-green-600" />;
        case 'academic-support':
          return <BookOpen size={20} className="mr-2 text-purple-600" />;
        default:
          return <Building size={20} className="mr-2 text-gray-600" />;
      }
    };

    // Status or date display badge with appropriate styling
    const getStatusBadge = () => {
      if (resource.category === 'opportunities' && resource.status) {
        // Check if status contains "ongoing" or "open" (case insensitive)
        const isActive = resource.status.toLowerCase().includes('ongoing') ||
                        resource.status.toLowerCase().includes('open') ||
                        resource.status.toLowerCase().includes('accepting');

        // Check if status contains "closed" or "deadline" (case insensitive)
        const isClosed = resource.status.toLowerCase().includes('closed');
        const isDeadlineSoon = resource.status.toLowerCase().includes('deadline');

        let bgColor = "bg-blue-100 text-blue-800"; // Default
        if (isActive) bgColor = "bg-green-100 text-green-800";
        if (isClosed) bgColor = "bg-red-100 text-red-800";
        if (isDeadlineSoon) bgColor = "bg-yellow-100 text-yellow-800";

        return (
          <div className={`px-3 py-1.5 ${bgColor} text-xs font-medium rounded-md inline-block mb-2`}>
            {resource.status}
          </div>
        );
      } else if (resource.category === 'events' && resource.date) {
        return (
          <div className="px-3 py-1.5 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-md inline-block mb-2">
            {resource.date}
          </div>
        );
      }
      return null;
    };

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
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

          {/* Status or Date Badge */}
          <div className="mt-3">
            {getStatusBadge()}
          </div>

          <div className="mt-4 text-right">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 bg-[#0C2944] text-white text-sm rounded-md hover:bg-blue-800 transition-colors"
            >
              Learn More
              <ExternalLink size={14} className="ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Determine if pagination is needed (only when there are more than 10 resources)
  const isPaginationNeeded = filteredResources.length > 10;

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Larger Hero Section */}
      <div className="bg-[#0C2944] text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">Student Resources</h1>
          <h2 className="text-center text-blue-100 mb-10 max-w-3xl mx-auto">
            Find opportunities, academic support, and events for Montgomery County high school students
          </h2>

          {/* Search bar positioned lower */}
          <div className="relative max-w-lg mx-auto mt-10">
            <input
              type="text"
              placeholder="Search for internships, scholarships, events, academic support..."
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

      {/* Category Tabs - New feature */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                categoryFilter === 'all'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setCategoryFilter('all')}
            >
              All Resources
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                categoryFilter === 'opportunities'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setCategoryFilter('opportunities')}
            >
              Opportunities
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                categoryFilter === 'events'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setCategoryFilter('events')}
            >
              Events
            </button>
          </div>
        </div>
      </div>

      {/* Filters - Streamlined with dynamic options based on category */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-60">
                <ModernDropdown
                  title={categoryFilter === 'opportunities' ? "Opportunity Type" : categoryFilter === 'events' ? "Event Type" : "Resource Type"}
                  options={getTypeOptions()}
                  selectedOptions={typeFilters}
                  setSelectedOptions={setTypeFilters}
                />
              </div>
              <div className="w-full md:w-60">
                <ModernDropdown
                  title="Field of Interest"
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

            {(selectedFiltersCount > 0 || categoryFilter !== 'all') && (
              <div className="flex items-center">
                <button
                  onClick={clearAllFilters}
                  className="py-2 px-4 text-sm text-blue-700 hover:text-blue-900"
                >
                  Reset filters
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}

        {/* Pagination - Only shown when needed */}
        {isPaginationNeeded && (
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center rounded-md shadow-sm">
              <button className="px-3 py-1.5 bg-[#0C2944] text-white text-sm font-medium rounded-l-md">
                1
              </button>
              <button className="px-3 py-1.5 bg-white text-gray-700 text-sm font-medium border-y border-r border-gray-200 hover:bg-gray-50">
                2
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