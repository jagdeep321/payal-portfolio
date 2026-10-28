import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#24212A] selection:bg-[#B8A4D8] selection:text-[#24212A] overflow-x-hidden">
      {/* Sticky Premium Navbar */}
      <Navbar />

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Case Studies & Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
