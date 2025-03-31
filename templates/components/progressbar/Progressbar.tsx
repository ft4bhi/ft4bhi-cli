import React from "react";

interface ProgressBarProps {
  progress: number; // Percentage (0-100)
  color?: string; // Custom color class
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
}

const sizeClasses = {
  small: "h-2",
  medium: "h-4",
  large: "h-6",
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = "bg-blue-500", size = "medium", showLabel = true }) => {
  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`transition-all duration-500 ${color} rounded-full h-full`}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        ></div>
      </div>
      {showLabel && (
        <p className="text-sm text-gray-700 mt-1 text-center">{progress}%</p>
      )}
    </div>
  );
};

export default ProgressBar;
