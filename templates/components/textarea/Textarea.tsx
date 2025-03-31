import React from "react";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  error, 
  rows = 4 
}) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:outline-none ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-violet-500"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
