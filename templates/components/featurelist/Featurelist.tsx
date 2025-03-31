import React from "react";
import { LucideIcon, CheckCircle } from "lucide-react";

interface FeatureProps {
  icon?: LucideIcon;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon = CheckCircle, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl text-center space-y-4">
      <Icon className="w-10 h-10 text-violet-600" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Feature;
