import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCards from "./EventCard";
import dj from '../../assets/dj.jpg'
import lawn from '../../assets/lawn.jpg'
import decorator from '../../assets/photographer.jpeg'
import mehandi from '../../assets/mehandi.jpg'
import decorator1 from '../../assets/decorator1.jpg'
import catering from '../../assets/catering.png'
import cars from '../../assets/cars.png'
import banquet from '../../assets/banquet.jpg'

import './EventCard.css'
// import { ImOffice } from "react-icons/im";




const events = [
  { name: "Photography", image: decorator },
  { name: "Mehandi", image: mehandi },
  { name: "DJ", image: dj },
  { name: "Lawns", image: lawn },
  { name: "Banquet", image: banquet },
  { name: "Catering", image: catering },
  { name: "Decorator", image: decorator1 },
  { name: "Cars", image: cars }

];

const EventSlider = () => {


  return (
    <Slider className="cards" dots={true} infinite={true} speed={500} slidesToShow={4} slidesToScroll={1}>
    {events.map((element, index) => (
      <EventCards key={index} name={element.name} image={element.image} />
    ))}
  </Slider>
  );
};

export default EventSlider;