// Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-violet-600 border-solid"></div>
    </div>
  );
};

export default Loading;
