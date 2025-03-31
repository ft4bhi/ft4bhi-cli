import React from "react";
import { XCircle } from "lucide-react";

interface ErrorComponentProps {
  message: string;
  type?: "error" | "warning";
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, type = "error" }) => {
  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-md w-full max-w-md text-white ${
        type === "error" ? "bg-red-600" : "bg-yellow-500"
      }`}
    >
      <XCircle className="w-6 h-6 mr-3" />
      <p className="flex-1">{message}</p>
    </div>
  );
};

export default ErrorComponent;
