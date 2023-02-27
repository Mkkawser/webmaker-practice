import Image from "next/image";
import HeroPicture from "./heroPic";

const Hero = () => {
  return (
    <>
      <div className="grid sm:grid-cols-[60%_40%] sm:pt-[10vw]">
        <div className="sm:order-1">
          {/* 
             Hero Title Section
           */}
          <div className="pb-8 pt-2">
            <p className="font-Roboto text-[#FF4F6E] text-[5vw] sm:text-[4.5vw]">
              {`Hello, I'm Nancy`}
            </p>
            <p className="font-Ubuntu text-[#031E1D] font-bold tracking-[-0.03em] leading-[6vw] text-[6vw] max-[600px]:pb-4">
              Professional UI/UX Designer & Web Developer
            </p>
          </div>

          {/*
            Hire Button 
          */}
          <div className="hidden sm:flex max-w-[25vw] border-b-[3px] pb-3 pt-6 drop-shadow-sm items-center gap-4">
            <Image
              className="w-[5vw]"
              height={100}
              width={100}
              src={`/img/hero-hire-arrow.png`}
              alt="img/hero-hire-arrow"
            />
            <p className="text-[#343E42] font-Poppins font-bold text-[2.5vw]">
              Hire Me Now
            </p>

            {/* arrow Yellow */}
            <div className="absolute top-[-20px] right-[-100px] rotate-[-20deg] hidden sm:flex">
              <Image
                height={200}
                width={200}
                className="max-w-[15vw]"
                src="/img/hero-hire-arrow-yellow.png"
                alt="img/hero-hire-arrow-yellow"
              />
            </div>
          </div>

          {/* Social Icon */}
          <div className="pt-4 hidden sm:flex gap-2">
            <Image
              height={200}
              width={200}
              className="w-[4.5vw]"
              src="/img/hero-social-fb.png"
              alt="hero-social-fb"
            />
            <Image
              height={200}
              width={200}
              className="w-[4.5vw]"
              src="/img/hero-social-basket.png"
              alt="hero-social-basket"
            />
            <Image
              height={1000}
              width={1000}
              className="w-[4.5vw]"
              src="/img/hero-social-twitter.png"
              alt="hero-social-twitter"
            />
          </div>
        </div>

        <HeroPicture />
      </div>
    </>
  );
};

export default Hero;
