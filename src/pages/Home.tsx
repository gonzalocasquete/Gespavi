import React from "react";
import Hero from "../components/home/Hero";
import WhyGespavi from "../components/home/WhyGespavi";
import ServicesSection from "../components/home/ServicesSection";
import LatestProjects from "../components/home/LatestProjects";
import CtaSection from "../components/shared/CtaSection";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WhyGespavi />
      <LatestProjects />
      <CtaSection
        title="¿Necesitas asesoramiento técnico?"
        subtitle="Nuestro equipo especializado te ayudará a elegir la solución perfecta para tu proyecto"
        variant="gray"
      />
    </div>
  );
};

export default Home;
