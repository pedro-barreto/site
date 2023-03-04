import homeInit from "../img/home/homeInit.jpg";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <div className="h-fmh">
      <Carousel slideInterval={5000} indicators={false}>
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
      </Carousel>
    </div>
  );
}
