import React from "react";
import suit1 from "../assets/suit1.jpg"; // Add actual image paths
import suit2 from "../assets/suit2.jpg";
import suit3 from "../assets/one.jpg";

function GallerySection() {
  return (
    <section className="bg-[#1E2A38] py-12 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#D4AF37]">
        Our Work
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[suit1, suit2, suit3].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Suit ${i + 1}`}
            className="rounded-xl shadow-lg w-full hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
export default GallerySection;
