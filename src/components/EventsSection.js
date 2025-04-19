import React from 'react';
import { MapPin, ChevronRight, Calendar, Clock } from 'lucide-react';

const EventsSection = () => {
  // Generic events template - each event requires title, date, location and time
  const events = [
    {
      date: "APR 11",
      title: "Freshman Year 101",
      location: "Remote",
      time: "6:00 PM - 7:30 PM",
    },
    {
      date: "MAY 10",
      title: "Resume Workshop",
      location: "Online",
      time: "1:00 PM - 2:30 PM",
    },
    {
      date: "MAY 15",
      title: "Internship Fair",
      location: "Rockville Town Center",
      time: "11:00 AM - 4:00 PM",
    }
  ];

  return (
    <div className="bg-[#f5f9ff] py-16 border-t border-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0C2944] mb-4 tracking-wide">Our Events</h2>

        {/* Added description */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gray-700 leading-relaxed">
            Join us at our upcoming events designed to help students connect with resources,
            develop professional skills, and explore career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
              {/* Calendar header style */}
              <div className="h-32 bg-[#0C2944] flex items-center justify-center">
                <div className="text-white text-center">
                  <Calendar className="mx-auto mb-2" size={24} />
                  <div className="font-bold text-xl">{event.date}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#0C2944]">{event.title}</h3>
                <div className="flex items-center mt-3 text-blue-700">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center mt-2 text-blue-700">
                  <Clock size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <button className="mt-5 text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;