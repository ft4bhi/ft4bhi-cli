// Card.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-4 px-4 py-2 bg-violet-600 text-white rounded-md w-full hover:bg-violet-700"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
