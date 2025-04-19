import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MultiSelect = ({ title, options, selectedOptions, setSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-blue-900 hover:bg-blue-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title} ({selectedOptions.length})</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-30 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                selectedOptions.includes(option) ? 'bg-blue-100' : ''
              }`}
              onClick={() => toggleOption(option)}
            >
              <div className="flex items-center">
                <div className={`w-4 h-4 mr-2 border border-blue-500 rounded flex items-center justify-center ${
                  selectedOptions.includes(option) ? 'bg-blue-500' : 'bg-white'
                }`}>
                  {selectedOptions.includes(option) && (
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;