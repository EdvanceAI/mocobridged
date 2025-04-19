import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center max-w-3xl mx-auto text-blue-100">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:mocobridged@gmail.com" className="text-blue-700 hover:underline">
                      mocobridged@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Instagram className="w-6 h-6 text-blue-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900">Instagram</h3>
                    <a href="https://instagram.com/bridged.moco" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                      @bridged.moco
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;