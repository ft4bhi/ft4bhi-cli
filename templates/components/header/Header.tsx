// Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover innovative solutions that help you grow and succeed.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
