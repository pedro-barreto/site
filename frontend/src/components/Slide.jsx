import imgs from "../img/home";
import { Carousel } from "flowbite-react";

export default function Slide() {
  return (
    <div className="h-fmh bg-gray-600">
      <Carousel slideInterval={5000}>
        <img src={imgs[5]} alt="Slide" className="max object-cover" />
        <img src={imgs[6]} alt="Slide" className="max object-cover" />
        <img src={imgs[7]} alt="Slide" className="max object-cover" />
        <img src={imgs[8]} alt="Slide" className="max object-cover" />
        <img src={imgs[9]} alt="Slide" className="max object-cover" />
      </Carousel>
    </div>
  );
}
