import Image from "next/image";
import React from "react";

const HeroPicture = () => {
  return (
    <>
    
      {/* 
          Hero Image Section
      */}
      <div className="relative pt-[10vw]">
        {/* 
         Background Image Reative
        */}
        <div className="">
          <Image
            className="max-w-[75%]"
            height={1000}
            width={1000}
            src="/img/hero-girl-smile-img-bg.png"
            alt="hero-girl-smile-img-bg"
          />
        </div>

        <div className="absolute bottom-0 max-w-[65%]">
          <Image
            width={1000}
            height={1000}
            className=" "
            src={`/img/hero-girl-smile-img.png`}
            alt="hero-girl-smile-img"
          />

          {/* Image Dot Dot */}
          <div className="absolute bottom-0 max-w-[8vw]">
            <Image
              height="100"
              width="100"
              src="/img/hero-girl-smile-dot.png"
              alt="hero-girl-smile-dot"
            />
          </div>
        </div>

        {/*
           Hire Button 
          */}
      </div>
      <div className="flex max-w-[200px] items-center gap-7 border-b-[3px] pb-3 pt-4 drop-shadow-sm sm:hidden">
        <Image
          height={50}
          width={50}
          src="/img/hero-hire-arrow.png"
          alt="hero-hire-arrow"
        />
        <p className="font-Poppins text-[18px] font-bold text-[#343E42]">
          Hire Me Now
        </p>
      </div>
    </>
  );
};

export default HeroPicture;
