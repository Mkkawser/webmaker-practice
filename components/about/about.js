import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="pt-4 sm:relative">
        <div className="grid-cols-[40%_60%] sm:grid sm:pt-8">
          {/* 
           about us head 
        */}
          <div className="pb-4">
            <p className="font-Roboto text-[4vw] text-[#FF4F6E]">about us</p>
            <p className="font-Ubuntu text-[5vw] text-[#373D4A] lg:text-[4vw]">
              You Can Imagine I Can Do
            </p>
            <p className="text-[11px] text-[#373D4A] md:text-[2vw] ">
              Professional UI/UX Design
            </p>
          </div>
          {/* about us image */}
          <div className="md:inherit relative w-[200px] sm:w-full md:z-10 lg:border">
            <Image
              className=""
              src={`/img/about-girl.png`}
              width={1000}
              height={850}
              alt="about-girl"
            />
            <div className="absolute -bottom-8 -right-6 z-[-2] hidden sm:flex lg:left-1/2 xl:left-[20%]">
              <Image
                src={`/img/about-girl-bg.png`}
                width={800}
                height={750}
                alt="about-girl-bg"
              />
            </div>
          </div>
        </div>

        {/*
            about us about me
        */}
        <div className="left[-38px] bottom-[30px] py-4 pt-4 shadow-xl sm:absolute sm:z-20 sm:w-2/3 sm:rounded-3xl sm:bg-white sm:p-4 sm:shadow-2xl lg:w-1/2">
          <p className="pb-2 font-Roboto text-[5vw] text-[#FF4F6E] sm:text-[3.5vw] lg:text-[3vw]">
            About Me
          </p>
          <p className="font-Roboto text-[3.5vw] text-[#373D4A] sm:text-[2.5vw] lg:text-[2vw]">
            User experience (UX) designers are responsible for creating an
            optimal experience for the user when they interact with a digital or
            physical
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
