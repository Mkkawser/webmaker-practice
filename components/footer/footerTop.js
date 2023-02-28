import React from "react";

const FooterTop = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1 p-16 shadow-2xl">
        <p className="font-Ubuntu text-[4.5vw] text-[#031E1D] md:text-[5vw]">
          {`Can't find your desired service?`}
        </p>
        <p className="font-Ubuntu text-[4.5vw] text-[#FF4F6E]">
          Let us know 24/7 in 123456
        </p>
        <div className="mt-3 flex gap-4">
          <button className="rounded-xl bg-[#009DAE] p-1 text-[3vw] text-white">
            Hire Me
          </button>
          <button className="rounded-xl border border-[#009DAE] p-1 text-[3vw] text-[#009DAE]">
            123456
          </button>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
