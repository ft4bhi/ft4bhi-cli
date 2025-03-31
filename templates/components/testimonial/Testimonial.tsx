import React from "react";

interface TestimonialProps {
  name: string;
  role: string;
  review: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, review, image }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md text-center space-y-4">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
      <p className="text-gray-700 text-sm italic">"{review}"</p>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;
