
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

const Card: React.FC<CardProps> = ({ title, thumbnail, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover"/>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
};

export default Card;
