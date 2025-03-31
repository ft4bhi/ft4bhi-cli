import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  name?: string;
  status?: "online" | "offline";
}

const sizeClasses = {
  small: "w-8 h-8 text-sm",
  medium: "w-12 h-12 text-base",
  large: "w-16 h-16 text-lg",
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "medium", name, status }) => {
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div className="relative inline-flex items-center">
      {src ? (
        <img src={src} alt={alt || "Avatar"} className={`rounded-full object-cover ${sizeClasses[size]}`} />
      ) : (
        <div
          className={`rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700 ${sizeClasses[size]}`}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
            status === "online" ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
