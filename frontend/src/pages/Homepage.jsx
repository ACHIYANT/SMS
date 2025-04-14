import Navbar from "@/components/NavBar";
import CarouselComponent1 from "../components/CarouselComponent1";
import Modal from "../components/Modal";
import React from "react";
import carousel1 from "/carousle-1.png";
import carousel2 from "/carousel-2.png";

export default function Homepage() {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      {/* <CarouselComponent /> */}
      <CarouselComponent1>
        <div>
          <img
            className="img-cr"
            src={carousel1}
            alt="img1"
          />
        </div>
        <div>
          <img
            className="img-cr"
            src={carousel2}
            alt="img2"
          />
        </div>
        <div>
          <img
            className="img-cr"
            src="https://www.w3schools.com/howto/img_lights_wide.jpg"
            alt="img3"
          />
        </div>
      </CarouselComponent1>
      <Modal />
    </div>
  );
}
