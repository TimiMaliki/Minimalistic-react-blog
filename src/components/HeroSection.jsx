import React from "react";
import heroVid from "../assets/hero-img/Main_2.mp4";

const HeroSection = () => {
  return (
    <div className="w-full h-full">
      <video src={heroVid} muted autoPlay={"autoplay"} loop></video>
    </div>
  );
};

export default HeroSection;
