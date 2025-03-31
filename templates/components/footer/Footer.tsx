// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side: Brand or copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>

          {/* Right side: Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-500 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-indigo-500 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="hover:text-indigo-500 transition-colors duration-200 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
