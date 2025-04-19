import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">MoCo Bridged</h2>
            <p className="text-blue-200 mb-6">
              Equipping students with high school and career readiness resources to ensure long-term success.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/bridged.moco" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-blue-200 hover:text-white"
                  onClick={() => setCurrentPage('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-blue-200 hover:text-white"
                  onClick={() => setCurrentPage('resources')}
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  className="text-blue-200 hover:text-white"
                  onClick={() => setCurrentPage('about')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="text-blue-200 hover:text-white"
                  onClick={() => setCurrentPage('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-200 hover:text-white">Internships</button>
              </li>
              <li>
                <button className="text-blue-200 hover:text-white">Scholarships</button>
              </li>
              <li>
                <button className="text-blue-200 hover:text-white">Volunteer Opportunities</button>
              </li>
              <li>
                <button className="text-blue-200 hover:text-white">Career Fairs</button>
              </li>
              <li>
                <button className="text-blue-200 hover:text-white">Workshops</button>
              </li>
            </ul>
          </div>

          {/* Contact */}

        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} MoCo Bridged. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;