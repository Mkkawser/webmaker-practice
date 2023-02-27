import Image from "next/image";
import React, { useState } from "react";
import file from "./servicesDetails.json";

export const ServiceProvide = () => {
  return (
    <div className="pt-6">
      {/*
           Service Text Area
        */}
      <div className="">
        <p className="font-Roboto text-[4vw] text-[#FF4F6E]">Services</p>
        <p className="font-Ubuntu text-[5vw] font-bold text-[#031E1D]">
          I Provide Wide Range Of Digital Services
        </p>
      </div>

      {/* 
         Service Card Section 
      */}

      <div className="sm:grid sm:grid-cols-2">
        <CardTemplate
          name="UI/UX Design"
          des="From the initial design to the final development stage, your dedicated team of specialists."
          img="/img/service-ui-ux-vector.png"
        />
        <CardTemplate
          name="Web Design"
          des="From the initial design to the final development stage, your dedicated team of specialists."
          img="/img/service-web-design-vector.png"
        />
        <CardTemplate
          name="Digital Marketing"
          des="From the initial design to the final development stage, your dedicated team of specialists."
          img="/img/service-digital-marketing-vector.png"
        />
      </div>
    </div>
  );
};

// Card Template
const CardTemplate = ({ name, des, img }) => {
  console.log(name);
  return (
    <div className="shadow-md">
      <div className="flex flex-col items-center gap-6 p-8">
        <div className="max-w-[18vw]">
          <Image
            src={img}
            width={100}
            height={100}
            alt="service-web-design-vector"
          />
        </div>
        <p className="font-Roboto text-[4vw] font-bold text-[#2A2A38] sm:text-[2vw]">
          {name}
        </p>
        <p className="text-center font-Roboto text-[5vw] text-[#929BB3] sm:text-[2.8vw]">
          {des}
        </p>
      </div>
    </div>
  );
};
