import homeInit from "../img/home/homeInit.jpg";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <div className="h-fmh max-w-full max-h-fmh aspect-video m-auto bg-black">
      <Carousel slideInterval={5000}>
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
        <img src={homeInit} alt="Slide" />
      </Carousel>
    </div>
  );
}
