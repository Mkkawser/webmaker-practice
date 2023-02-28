import Image from "next/image";
import React from "react";

const WorkSample = () => {
  return (
    <>
      <div className="md:pt-20 pt-4">
        {/* Text */}
        <div className="">
          <p className="font-Roboto text-[3.5vw] text-[#FF4F6E]">
            Working Process
          </p>
          <p className="font-Ubuntu text-[6vw] text-[#000000]">
            My Creative Portfolio
          </p>
          <div className="flex gap-4 text-[10px]">
            <p>All</p>
            <p>UI Design</p>
            <p>UX Design</p>
            <p>Branding Design</p>
          </div>
        </div>
        <div className="sm:grid grid-cols-2">
          <CardTemplate
            pics="/img/work-sample-1.png"
            tname="Mobile Application"
            bname="Mobile Apps"
          />
          <CardTemplate
            pics="/img/work-sample-2.png"
            tname="Product Design"
            bname="Apps Landing Page"
          />
          <CardTemplate
            pics="/img/work-sample-3.png"
            tname="Fitness Landing Page"
            bname="Web Design"
          />
        </div>
      </div>
    </>
  );
};

export default WorkSample;

const CardTemplate = ({ pics, bname, tname }) => {
  return (
    <div className="shadow-md">
      <div className="flex flex-col items-center gap-6 p-8">
        <div className="relative max-w-[60vw]">
          <Image
            src={pics}
            width={1000}
            height={1000}
            alt="service-web-design-vector"
          />
          <div className="absolute -bottom-2 flex w-full justify-center  ">
            <p className="w-fit rounded-3xl bg-white p-2 font-Roboto text-[2vw] font-bold text-[#2A2A38] sm:text-[2vw]">
              {bname}
            </p>
          </div>
        </div>
        <p className="text-center font-Roboto text-[5vw] text-[#929BB3] sm:text-[2.8vw]">
          {tname}
        </p>
      </div>
    </div>
  );
};
