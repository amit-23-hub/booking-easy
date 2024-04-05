// evet Cards.tsx
import React from "react";

interface CityCardsProps {
  name: string;
  image: string;
}

const EventCards: React.FC<CityCardsProps> = ({ name, image }) => {
  return (
    <div className="w-full max-w-[70%] rounded-full shadow dark:bg-black dark:border-gray-700 overflow-hidden mr-0.5 transition-transform duration-300 hover:scale-95 hover:shadow-lg mb-4">
      <a href="#" className="block">
        <img className="p-2 rounded-t-full" src={image} alt={name} />
      </a>
      <div className="px-5 pb-5 text-center">
        <a href="#">
          <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white hover:transition-transform duration-300 transform-gpu" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}>{name}</h5>
        </a>
      </div>
    </div>
  );
};

export default EventCards;