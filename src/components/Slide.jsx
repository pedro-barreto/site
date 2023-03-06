import slide1 from "../img/home/slide1.jpg";
import slide2 from "../img/home/slide2.jpg";
import slide3 from "../img/home/slide3.jpg";
import slide4 from "../img/home/slide4.jpg";
import slide5 from "../img/home/slide5.jpg";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <div className="w-full aspect-video max-w-full max-h-fmh">
      <Carousel slideInterval={5000}>
        <img src={slide1} alt="Slide" />
        <img src={slide2} alt="Slide" />
        <img src={slide3} alt="Slide" />
        <img src={slide4} alt="Slide" />
        <img src={slide5} alt="Slide" />
      </Carousel>
    </div>
  );
}
