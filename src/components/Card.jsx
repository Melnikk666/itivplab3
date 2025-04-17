// components/Card.js
import React from "react";

export function Card({ title, description, image }) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden w-80 bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

