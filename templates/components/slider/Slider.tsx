import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://source.unsplash.com/800x400/?nature",
  "https://source.unsplash.com/800x400/?city",
  "https://source.unsplash.com/800x400/?technology",
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slides */}
      <motion.div
        className="flex"
        animate={{ x: `-${current * 100}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="w-full object-cover" />
        ))}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
