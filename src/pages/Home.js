import React from 'react';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => (
  <div>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <a id="projects">
      <ProjectsSection />
    </a>
    <TestimonialsSection />
    {/* <ContactBanner /> */}
    <Footer />
  </div>
);

export default Home;
