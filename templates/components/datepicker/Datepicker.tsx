import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react"; // Icon for better UI

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center border rounded-md p-2 shadow-sm bg-white">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-full outline-none bg-transparent text-gray-700"
          placeholderText="Select a date"
        />
        <Calendar className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export default CustomDatePicker;
