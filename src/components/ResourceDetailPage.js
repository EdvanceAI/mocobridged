import React, { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Building, Calendar, Clock } from 'lucide-react';

const ResourceDetailPage = () => {
  // This would normally fetch the specific resource data based on an ID in the URL
  // For now, we'll just use a sample resource
  const resource = {
    id: 1,
    title: "Web Development Intern",
    organization: "TechFuture",
    location: "Rockville, MD",
    description: "Join our team to gain hands-on experience in front-end and back-end web development. Learn the latest technologies while working on real projects.",
    about: "TechFuture is a leading technology company in Montgomery County focused on developing innovative web and mobile applications for businesses and non-profits. We are committed to training the next generation of tech professionals through our internship programs.",
    tags: ["Internship", "Technology", "Part-time"],
    postedDays: 3,
    deadline: "May 15, 2025",
    duration: "10 weeks (June - August 2025)",
    responsibilities: [
      "Assist in developing and maintaining websites using HTML, CSS, and JavaScript",
      "Collaborate with the design team to implement visual elements",
      "Test applications and websites for bugs and usability issues",
      "Learn about database management and server-side technologies",
      "Document processes and contribute to technical documentation"
    ],
    requirements: [
      "Currently enrolled in high school (grades 9-12)",
      "Basic knowledge of HTML and CSS",
      "Interest in computer science and web development",
      "Ability to commit to 10 hours per week (after school and weekends)"
    ],
    applicationProcess: "Submit your resume and a brief statement of interest through our online application form. Selected candidates will be invited for an interview.",
    website: "https://techfuture.org",
    contactEmail: "internships@techfuture.org",
    contactPhone: "(301) 555-1234",
    logo: "/images/logo.png",
    isSaved: false
  };

  const [isSaved, setIsSaved] = useState(resource.isSaved);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <button className="hover:text-blue-600">Home</button>
            <span className="mx-2">›</span>
            <button className="hover:text-blue-600">Resources</button>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{resource.title}</span>
          </div>
        </div>
      </div>

      {/* Resource Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-blue-900 mb-2">{resource.title}</h1>
              <div className="flex items-center text-gray-700 mb-4">
                <Building size={18} className="mr-2" />
                <span className="mr-4">{resource.organization}</span>
                <MapPin size={18} className="mr-2" />
                <span>{resource.location}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={resource.logo}
                alt={`${resource.organization} logo`}
                className="w-16 h-16 md:w-24 md:h-24 rounded-lg bg-white p-2 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center">
            Apply Now
          </button>
          <button
            className={`px-6 py-3 border rounded-md flex items-center ${
              isSaved
                ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setIsSaved(!isSaved)}
          >
            <Heart size={18} className="mr-2" fill={isSaved ? "currentColor" : "none"} />
            {isSaved ? 'Saved' : 'Save'}
          </button>
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Visit Website
          </a>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">About {resource.organization}</h2>
              <p className="text-gray-700">{resource.about}</p>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Resource Description</h2>
              <p className="text-gray-700">{resource.description}</p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {resource.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Requirements</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {resource.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Application Process */}
            <section>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">How to Apply</h2>
              <p className="text-gray-700">{resource.applicationProcess}</p>

              <button className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors">
                Apply Now
              </button>
            </section>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Details</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-gray-600 text-sm">Posted</div>
                  <div className="text-gray-800">{resource.postedDays} days ago</div>
                </div>

                <div>
                  <div className="text-gray-600 text-sm">Application Deadline</div>
                  <div className="text-gray-800">{resource.deadline}</div>
                </div>

                <div>
                  <div className="text-gray-600 text-sm">Duration</div>
                  <div className="text-gray-800">{resource.duration}</div>
                </div>

                <div>
                  <div className="text-gray-600 text-sm">Location</div>
                  <div className="text-gray-800">{resource.location}</div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={18} className="text-blue-700 mr-2" />
                  <a href={`mailto:${resource.contactEmail}`} className="text-blue-700 hover:underline">
                    {resource.contactEmail}
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone size={18} className="text-blue-700 mr-2" />
                  <a href={`tel:${resource.contactPhone}`} className="text-blue-700 hover:underline">
                    {resource.contactPhone}
                  </a>
                </div>

                <div className="flex items-center">
                  <MapPin size={18} className="text-blue-700 mr-2" />
                  <span className="text-gray-800">{resource.location}</span>
                </div>
              </div>
            </div>

            {/* Similar Resources */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Similar Resources</h3>

              <div className="space-y-3">
                <a href="#" className="block hover:bg-blue-100 p-2 rounded">
                  <div className="font-medium text-blue-800">UX Design Summer Internship</div>
                  <div className="text-sm text-gray-600">CreativeLabs • Bethesda, MD</div>
                </a>

                <a href="#" className="block hover:bg-blue-100 p-2 rounded">
                  <div className="font-medium text-blue-800">Junior Web Developer (Part-time)</div>
                  <div className="text-sm text-gray-600">Montgomery Tech Solutions • Rockville, MD</div>
                </a>

                <a href="#" className="block hover:bg-blue-100 p-2 rounded">
                  <div className="font-medium text-blue-800">Coding Bootcamp Scholarship</div>
                  <div className="text-sm text-gray-600">Code4Tomorrow • Silver Spring, MD</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailPage;