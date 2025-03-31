// SearchBar.tsx
import React from "react";
import { Search } from "lucide-react"; // or use any icon library you prefer

const SearchBar: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border rounded-md dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
