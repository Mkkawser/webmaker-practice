import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="pt-2 p-5 sm:p-10 sm:mt-[50px] md:px-[80px]">
        <div className="flex flex-col gap-[100px] sm:grid sm:grid-cols-2 sm:gap-10">
          {/* 
             Hero Title Section
           */}
          <div className="sm:order-2">
            <p className="font-Roboto text-[#FF4F6E] text-[24px]">
              {`Hello, I'm Nancy`}
            </p>
            <p className="font-Ubuntu text-[#031E1D] text-[36px] font-bold tracking-[-0.03em] leading-[45px] w-[300px] sm:w-[300px] sm:h-[180px] sm:text-[40px]">
              Professional UI/UX Designer & Web Developer
            </p>

            <div className="relative">
              {/*
               Hire Button 
              */}
              <div className="hidden sm:flex max-w-[150px] border-b-[3px]    pb-3 pt-6 drop-shadow-sm items-center gap-4">
                <Image
                  className="w-[36px]"
                  height={100}
                  width={100}
                  src={`/img/hero-hire-arrow.png`}
                  alt="img/hero-hire-arrow"
                />
                <p className="text-[#343E42] font-Poppins font-bold text-[12px]">
                  Hire Me Now
                </p>
                {/* arrow Yellow */}
                <div className="absolute top-[-60px] right-[-158px] rotate-[-20deg] hidden min-[730px]:flex">
                  <Image
                    height={100}
                    width={100}
                    className="max-w-[160px]"
                    src="/img/hero-hire-arrow-yellow.png"
                    alt="img/hero-hire-arrow-yellow"
                  />
                </div>
              </div>
            </div>

            {/* Social Icon */}
            <div className="pt-4 hidden sm:flex">
              <Image
                height={100}
                width={100}
                className="w-[25px]"
                src="/img/hero-social-fb.png"
                alt="hero-social-fb"
              />
              <Image
                height={100}
                width={100}
                className="w-[25px]"
                src="/img/hero-social-basket.png"
                alt="hero-social-basket"
              />
              <Image
                height={1000}
                width={1000}
                className="w-[25px]"
                src="/img/hero-social-twitter.png"
                alt="hero-social-twitter"
              />
            </div>
          </div>

          {/* 
             Hero Image Section
           */}
          <div className="relative pt-50 sm:inline-flex sm:items-end">
            {/* 
              Background Image Reative
           */}
            <Image
              height={1000}
              width={1000}
              className="w-[290px] sm:max-w-[600px] md:w-800px"
              src="/img/hero-girl-smile-img-bg.png"
              alt="hero-girl-smile-img-bg"
            />

            <div className="absolute bottom-0">
              <Image
                height="1000"
                width="1000"
                className="w-[250px] sm:max-w-[600px] md:w-800px"
                src={`/img/hero-girl-smile-img.png`}
                alt="hero-girl-smile-img"
              />

              {/* Image Dot Dot */}
              <div className="absolute max-w-[55px] bottom-0 opacity-60">
                <Image
                  height="1000"
                  width="1000"
                  src="/img/hero-girl-smile-dot.png"
                  alt="hero-girl-smile-dot"
                />
              </div>
            </div>
          </div>
        </div>

        {/*
           Hire Button 
          */}
        <div className="max-w-[280px] border-b-[3px] pb-3 pt-4 drop-shadow-sm flex items-center gap-7 sm:hidden">
          <Image
            height={1000}
            width={1000}
            src="/img/hero-hire-arrow.png"
            alt="hero-hire-arrow"
          />
          <p className="text-[#343E42] font-Poppins font-bold text-[18px]">
            Hire Me Now
          </p>
        </div>

        <div className="absolute bottom-0 left-0 hidden sm:flex">
          <Image
            height={1000}
            width={1000}
            src="/img/hero-bottom-red.png"
            alt="hero-bottom-red"
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden sm:flex">
          <Image
            height={1000}
            width={1000}
            src="/img/hero-right-green.png"
            alt="hero-right-green"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
