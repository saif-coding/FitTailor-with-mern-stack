import React from "react";

function Services() {
  const services = [
    "Custom Shalwar Kameez",
    "Measurement & Fitting",
    "Custom Suit Tailoring",
  ];
  return (
    <div>
      <section className="bg-[#F5F6F8] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#1E2A38] mb-8">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#D4AF37]"
            >
              <h3 className="text-xl font-semibold text-[#1E2A38]">
                {service}
              </h3>
              <p className="text-sm text-[#2D2D2D] mt-2">
                We provide premium quality service to meet your unique tailoring
                needs.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
