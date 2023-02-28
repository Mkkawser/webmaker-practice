import Image from "next/image";
import React from "react";
import FooterTop from "./footerTop";

const Footer = () => {
  return (
    <>
      <div className="">
        <FooterTop />
        {/* Footer All Category*/}
        <div className="grid grid-cols-3 justify-items-center bg-[#009DAE] p-4 font-Roboto text-[2vw] text-[white] md:flex md:items-baseline md:gap-10 lg:items-center lg:justify-center">
          {/* About */}
          <div className="list-none">
            <li className="font-bold text-[2.5] text-white">About</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Complians</li>
          </div>

          {/* Company */}
          <div className="list-none">
            <li className="font-bold text-[2.5] text-white">Company</li>
            <li>About Us</li>
            <li>How to work?</li>
            <li>Populer Course</li>
            <li>Service</li>
          </div>

          {/* Support */}
          <div className="list-none">
            <li className="font-bold text-[2.5] text-white">Support</li>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </div>

          {/* About Company & Contact */}
          <div className="col-span-2 flex md:w-[500px] lg:-order-1 xl:w-[600px]">
            {/* Company Info */}
            <div className="">
              {/* Logo */}
              <div className="flex items-center gap-1 py-1">
                <Image
                  height={100}
                  width={100}
                  className="w-12 md:w-[2.5vw]"
                  src="/img/logo.png"
                  alt="Main logo"
                />
                <p className="text-[20px] text-white md:text-[2.5vw]">
                  Portfolio
                </p>
              </div>
              {/* About Company */}
              <p className="text-[2.1vw]">
                CreativePeoples Digital Agency is a customer-centric digital
                marketing company. We shape our internet marketing services
              </p>
            </div>
          </div>
          {/*Our Social Media*/}
          <div className="list-none text-[14px]">
            <li className="text-[16px] font-bold text-white">
              Our Social Media
            </li>
            {/* Social Icon */}
            <div className="flex gap-2 pt-4">
              <Image
                height={200}
                width={200}
                className="w-[4.5vw]"
                src="/img/footer-social-fb.png"
                alt="hero-social-fb"
              />
              <Image
                height={200}
                width={200}
                className="w-[4.5vw]"
                src="/img/footer-social-basket.png"
                alt="hero-social-basket"
              />
              <Image
                height={1000}
                width={1000}
                className="w-[4.5vw]"
                src="/img/footer-social-twitter.png"
                alt="hero-social-twitter"
              />
            </div>
          </div>
        </div>

        {/* Footer Treademark */}
        <div className="bg-[#FDF8EE]">
          <hr className="h-2" />
          <p className="flex justify-center font-Roboto text-[12px] text-white">
            Copyright - 2022 CreativePeolpes
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
