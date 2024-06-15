// event Cards.tsx
import React from "react";
import './EventCard.css'
interface EventCardsProps {
  name: string;
  image: string;
}

const EventCards: React.FC<EventCardsProps> = ({ name, image }) => {
  return (
    
       <div className="card">
       <div className="image"> <img  src={image} alt={name} /></div>
      <div className="header">
        <h5 >{name}</h5>
      </div>
       </div>
    
  );
};

export default EventCards;