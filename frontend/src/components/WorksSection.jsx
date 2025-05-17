import React from "react";

function WorksSection() {
  const steps = [
    "Book an Appointment",
    "Get Measured by Our Tailor",
    "Receive Your Custom Outfit",
  ];
  return (
    <div>
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#1E2A38] mb-8">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 md:mb-0">
              <div className="bg-[#D4AF37] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto">
                {index + 1}
              </div>
              <h3 className="text-center mt-4 text-lg font-semibold text-[#1E2A38]">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default WorksSection;
