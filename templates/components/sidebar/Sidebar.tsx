import React, { useState } from "react";
import { Home, User, Settings, Menu, LogOut } from "lucide-react"; // Import icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white h-screen transition-all duration-300 flex flex-col`}
      >
        {/* Toggle Button */}
        <button
          className="p-4 focus:outline-none hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Navigation Links */}
        <nav className="flex-1 px-2 space-y-4">
          <SidebarItem icon={<Home size={24} />} text="Home" isOpen={isOpen} />
          <SidebarItem icon={<User size={24} />} text="Profile" isOpen={isOpen} />
          <SidebarItem icon={<Settings size={24} />} text="Settings" isOpen={isOpen} />
        </nav>

        {/* Logout */}
        <SidebarItem icon={<LogOut size={24} />} text="Logout" isOpen={isOpen} />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isOpen }) => {
  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-gray-800 cursor-pointer">
      {icon}
      {isOpen && <span className="text-lg">{text}</span>}
    </div>
  );
};

export default Sidebar;
