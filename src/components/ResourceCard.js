import React, { useState } from 'react';
import { Heart, Clock, Calendar, Building, MapPin } from 'lucide-react';

const ResourceCard = ({ resource, setCurrentPage, openModal }) => {
  const [isSaved, setIsSaved] = useState(resource.isSaved || false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="relative border-l-4 border-blue-500 p-6">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b"
          style={{background: `linear-gradient(to bottom, #3B82F6, #2563EB)`}}></div>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-blue-900 mb-1">{resource.title}</h3>
          <button
            className={`p-1 rounded-full ${isSaved ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
          >
            <Heart size={20} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Building size={16} className="mr-1" />
          <span className="mr-3">{resource.organization}</span>
          <MapPin size={16} className="mr-1" />
          <span>{resource.location}</span>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">{resource.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock size={14} className="mr-1" />
            <span className="mr-3">Posted {resource.postedDays} days ago</span>
            <Calendar size={14} className="mr-1" />
            <span>Deadline: {resource.deadline}</span>
          </div>

          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-white border border-blue-900 text-blue-900 rounded hover:bg-blue-50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                openModal(resource);
              }}
            >
              Details
            </button>
            <button
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors"
              onClick={() => setCurrentPage('resource-detail')}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;