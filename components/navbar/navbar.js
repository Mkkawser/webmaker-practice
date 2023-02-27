import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(false); //For Mobile BTn

  return (
    <>
      <div className="flex items-center justify-between">
        {/* Site Logo */}
        <div className="flex max-w-[7vw] items-center gap-[1vw] sm:max-w-[4vw]">
          <Image
            src="/img/logo.png"
            width={1000}
            height={1000}
            alt="Logo-of-this-site"
          />

          {/* 
             Logo Text Not For Mobile
           */}
          <p className="hidden font-Roboto text-[2.5vw] font-semibold text-[#031E1D] sm:block">
            Portfolio
          </p>
        </div>

        {/*
         Navbar Menu items
         */}
        <div className="ml-4 hidden gap-[1.2vw] font-Roboto text-[2vw] sm:flex">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About us</Link>
          <Link href={"/service"}>Services</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>

        {/* Mobile Menu btn */}
        <div className="sm:hidden">
          <button className="text-[7vw]" onClick={() => setVisible(true)}>
            <FiMenu />
          </button>
        </div>

        {/*
             Navbar Lets talk Button
         */}
        <div className="hidden rounded-lg bg-[#009DAE] p-1 px-2 shadow-[7px_7px_30px_rgba(13,53,54,0.1)] sm:block">
          <p className="font-Roboto text-[2vw] text-white">Let’s talk</p>
        </div>
      </div>

      {/* 
          Sidebar Panel      
         */}
      <div className="card justify-content-center flex ">
        <Sidebar
          className="customWidth"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          {/* 
              Mobile Sidebar Menu Items 
          */}
          <div className="flex list-none flex-col items-center font-Roboto text-[#1D1D1D]">
            <li className="pt-2 text-[22px] hover:text-[#717578]">Home</li>

            <li className="pt-2 text-[22px] hover:text-[#717578]">About Us</li>

            <li className="pt-2 text-[22px] hover:text-[#717578]">Services</li>

            <li className="pt-2 text-[22px] hover:text-[#717578]">Portfolio</li>

            <li className="pt-2 text-[22px] hover:text-[#717578]">
              Contact us
            </li>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Navbar;
