import React from 'react';
import { 
  BiCreditCard, BiGlobeAlt, BiMessageSquare, 
  BiSearch, BiTrendingUp 
} from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt size={30} />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <FaUserSecret size={30} />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <BiMessageSquare size={30} />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FiFileText size={30} />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: <BiTrendingUp size={30} />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <BsDatabase size={30} />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: <LuLanguages size={30} />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: <BiCreditCard size={30} />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: <BiSearch size={30} />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "from-cyan-500 to-cyan-600"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Comprehensive Solutions
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 focus-within:ring-2 focus-within:ring-primary"
            >
              {/* Icon */}
              <div className={`bg-gradient-to-r ${solution.color} p-4 rounded-full inline-flex mb-6 text-white`}>
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Animated bottom bar */}
              <span className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${solution.color} transition-all group-hover:w-full`}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

// Icons are now bigger (30px) and centered nicely inside rounded backgrounds.
// Used gradient backgrounds instead of flat colors → Looks more SaaS-like.
// Added hover animation on card + bottom gradient underline animation.
// Improved padding/margin for breathing room.
// Added focus-visible ring for accessibility.
// Responsive improvements (sm:grid-cols-2, lg:grid-cols-3) for tablets.
// Softened the card corner radius (rounded-2xl).