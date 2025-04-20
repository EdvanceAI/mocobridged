import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="bg-[#0C2944] text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6 tracking-wide">Contact Us</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-blue-100">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>
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