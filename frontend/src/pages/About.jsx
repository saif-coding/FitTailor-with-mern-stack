import React from "react";
import heroimage from "../assets/heroimage.png";

function About() {
  return (
    <section className="bg-white py-12 px-14 md:flex items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">About Us</h2>
        <p className="text-[#2D2D2D] text-base">
          With years of experience in fine tailoring, we bring timeless style
          and craftsmanship to every outfit. Whether you're dressing for a
          wedding, a corporate event, or everyday elegance, our expert tailors
          ensure a flawless fit.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <img
          src={heroimage}
          alt="Tailor at work"
          className="rounded-xl shadow-lg w-full"
        />
      </div>
    </section>
  );
}

export default About;
