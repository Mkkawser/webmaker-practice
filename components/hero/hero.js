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
            <p className="font-Roboto text-[5vw] text-[#FF4F6E] sm:text-[4.5vw]">
              {`Hello, I'm Nancy`}
            </p>
            <p className="font-Ubuntu text-[6vw] font-bold leading-[6vw] tracking-[-0.03em] text-[#031E1D] max-[600px]:pb-4">
              Professional UI/UX Designer & Web Developer
            </p>
          </div>

          {/*
            Hire Button 
          */}
          <div className="hidden max-w-[25vw] items-center gap-4 border-b-[3px] pb-3 pt-6 drop-shadow-sm sm:flex">
            <Image
              className="w-[5vw]"
              height={100}
              width={100}
              src={`/img/hero-hire-arrow.png`}
              alt="img/hero-hire-arrow"
            />
            <p className="font-Poppins text-[2.5vw] font-bold text-[#343E42]">
              Hire Me Now
            </p>

            {/* arrow Yellow */}
            <div className="absolute top-[-20px] right-[-100px] hidden rotate-[-20deg] sm:flex">
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
          <div className="hidden gap-2 pt-4 sm:flex">
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

        <div className="absolute bottom-0 left-0 hidden sm:flex">
          <Image
            height={800}
            width={800}
            src="/img/hero-bottom-red.png"
            alt="hero-bottom-red"
          />
        </div>

        <div className="absolute bottom-0 right-0 hidden sm:flex">
          <Image
            height={800}
            width={800}
            src="/img/hero-right-green.png"
            alt="hero-right-green"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
