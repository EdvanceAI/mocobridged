import React from 'react';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-blue-100">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <address className="text-gray-700 not-italic">
                      100 Rockville Pike<br />
                      Suite 400<br />
                      Rockville, MD 20850
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:info@mocobridged.org" className="text-blue-700 hover:underline">
                      info@mocobridged.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href="tel:+13015551234" className="text-blue-700 hover:underline">
                      (301) 555-1234
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Follow Us</h2>

            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Subscribe to Our Newsletter</h2>

              <div className="flex">
                <input
                  type="email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
                <button className="px-4 py-2 bg-blue-900 text-white rounded-r-md hover:bg-blue-800 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Stay updated with the latest resources and events for Montgomery County students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;