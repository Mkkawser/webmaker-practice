import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <title>Home | Personal Portfolio</title>

      {/*
         Wrap
     */}
      <div className="p-[5vw]">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
