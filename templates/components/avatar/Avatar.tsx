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
