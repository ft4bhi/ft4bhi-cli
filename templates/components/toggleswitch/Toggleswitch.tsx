import React, { useState } from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked = false, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (onChange) onChange(!isOn);
  };

  return (
    <button
      onClick={toggleSwitch}
      className={`relative w-14 h-7 flex items-center rounded-full p-1 transition duration-300 ${
        isOn ? "bg-violet-600" : "bg-gray-300"
      }`}
      aria-label="Toggle switch"
      role="switch"
      aria-checked={isOn}
    >
      <span
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
