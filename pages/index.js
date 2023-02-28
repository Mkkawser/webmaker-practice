import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import { ServiceProvide } from "@/components/serviceProvide/serviceProvide";
import WorkSample from "@/components/workSample/workSample";

export default function Home() {
  return (
    <>
      <title>Home | Personal Portfolio</title>

      {/*
         Wrap
     */}
      <div className="p-[5vw] ">
        <Navbar />
        <Hero />
        <ServiceProvide />
        <About />
        <WorkSample />
        <Footer />
      </div>
    </>
  );
}
