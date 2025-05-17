import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WorksSection from "../components/WorksSection";
import GallerySection from "../components/GallerySection";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WorksSection />
      <GallerySection />
      <Testimonials />
    </div>
  );
}

export default Home;
