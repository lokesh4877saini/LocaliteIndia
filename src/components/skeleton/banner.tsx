import React from "react";

export default function BannerSkeleton() {
  return (
    <div className="relative w-full mx-auto mb-10">
      
      <div className="relative w-full p-5 bg-gray-300 animate-pulse h-[60vh] rounded-md"></div>

      
      <div className="absolute bottom-2 left-2 z-10 flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gray-400 animate-pulse"
          ></div>
        ))}
      </div>

      
      <div className="absolute bottom-2 left-10 z-10">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="stroke-current text-gray-500 animate-pulse"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            strokeWidth="2"
            fill="none"
            stroke="#a3a3a3"
          ></circle>
        </svg>
        <span className="text-[8px] absolute bottom-[6px] left-2 font-semibold text-gray-400">
        </span>
      </div>
    </div>
  );
}
