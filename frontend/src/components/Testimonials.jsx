import React from "react";

function Testimonials() {
  const testimonials = [
    { name: "John Doe", quote: "Best tailoring experience ever!" },
    { name: "Ali Khan", quote: "Perfect fit and great service!" },
  ];
  return (
    <section className="bg-[#F5F6F8] py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-[#1E2A38] mb-8">
        Customer Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-lg italic text-[#2D2D2D]">"{t.quote}"</p>
            <h4 className="mt-4 font-semibold text-[#1E2A38]">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
