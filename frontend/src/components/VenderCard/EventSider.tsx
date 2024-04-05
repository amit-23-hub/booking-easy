import Slider from "react-slick";
import EventCards from "./EventCard";
import dj from '../../assets/dj.jpg'
import lawn from '../../assets/lawn.jpg'
import decorator from '../../assets/decorator.jpg'
import mehandi from '../../assets/mehandi.jpg'

const events = [
  { name: "decorator", image: decorator },
  { name: "mehandi", image: mehandi },
  { name: "dj", image: dj },
  { name: "lawns", image: lawn },
];

function EventsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {events.map((element, index) => (
        <EventCards key={index} name={element.name} image={element.image} />
      ))}
    </Slider>
  );
}

export default EventsSlider;
