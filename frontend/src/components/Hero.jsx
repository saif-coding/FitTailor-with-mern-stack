import React from "react";
import heroImage from "../assets/heroimage.png"; // Replace with your suits image
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-[#1E2A38] text-white px-14 py-16 md:flex md:items-center md:justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] leading-tight">
          Precision Tailoring for the Modern Gentleman
        </h1>
        <p className="text-[#F5F6F8] text-base md:text-lg">
          Experience the art of bespoke fashion. We craft each piece with
          unmatched precision, tailored uniquely for you.
        </p>

        <Link to={"/dashboard"}>
          <button className="bg-[#3CB4AC] cursor-pointer hover:bg-[#16fef4] hover:text-black hover:border-black border text-white px-6 py-3 rounded-full font-medium transition duration-300">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Tailored Suits"
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
