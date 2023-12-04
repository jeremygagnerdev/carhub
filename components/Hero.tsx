"use client";

import Image from "next/image";

import CustomButton from "@/components/CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Buy, sell or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car shopping experience with our effortless sales
          process.
        </p>
        <CustomButton
          title="Explore"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;