import slide1 from "../img/home/slide1.jpg";
import slide2 from "../img/home/slide2.jpg";
import slide3 from "../img/home/slide3.jpg";
import slide4 from "../img/home/slide4.jpg";
import slide5 from "../img/home/slide5.jpg";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <div className="h-fmh bg-gray-600">
      <Carousel slideInterval={5000} indicators={false}>
        <img src={slide1} alt="Slide" className="max object-cover" />
        <img src={slide2} alt="Slide" className="max object-cover" />
        <img src={slide3} alt="Slide" className="max object-cover" />
        <img src={slide4} alt="Slide" className="max object-cover" />
        <img src={slide5} alt="Slide" className="max object-cover" />
      </Carousel>
    </div>
  );
}
