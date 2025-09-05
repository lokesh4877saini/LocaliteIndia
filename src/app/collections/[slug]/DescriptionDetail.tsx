import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface ProductContentProps {
  description: string;
  care_instructions: string;
}

export default function DescriptionDropdown({
  description,
  care_instructions,
}: ProductContentProps) {
  const [openSections, setOpenSections] = useState({
    description: false,
    care: false,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* Section 1: Description */}
      <div className="w-full overflow-hidden border-b border-t border-gray-200 transparent transition-all">
        <button
          onClick={() => toggleSection('description')}
          className="w-full flex items-center justify-between py-4 transition-colors"
        >
          <span className="text-base font-semibold text-gray-800">Description</span>
          <ChevronDownIcon
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
              openSections.description ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={`pt-0 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
            openSections.description ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          {description}
        </div>
      </div>

      {/* Section 2: Care Instructions */}
      <div className="w-full overflow-hidden border-b border-gray-200 transparent transition-all">
        <button
          onClick={() => toggleSection('care')}
          className="w-full flex items-center py-4 justify-between transition-colors"
        >
          <span className="text-base font-semibold text-gray-800">Care Instructions</span>
          <ChevronDownIcon
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
              openSections.care ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={` text-sm text-gray-700 transition-all duration-300 ease-in-out ${
            openSections.care ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          {care_instructions}
        </div>
      </div>
    </div>
  );
}
