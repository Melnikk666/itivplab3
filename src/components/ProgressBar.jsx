// components/ProgressBar.js
import React from "react";

export function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-blue-500 h-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}