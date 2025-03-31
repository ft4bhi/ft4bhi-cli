import React, { useState } from "react";
import { XCircle } from "lucide-react"; // Icon for better UI

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="flex items-center p-3 bg-red-100 border border-red-400 text-red-800 rounded-lg shadow-md transition-opacity duration-300">
      <XCircle className="w-5 h-5 mr-2 text-red-600" />
      <span>{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-auto text-red-600 hover:text-red-800 transition"
      >
        ✖
      </button>
    </div>
  );
};

export default ErrorMessage;
