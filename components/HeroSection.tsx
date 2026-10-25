"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HERO_DATA, CONTACT_INFO } from "../data/portfolio";
import { ImageWithFallback } from "./ImageWithFallback";

export function HeroSection() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const topOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle Background Glow Accents */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full glow-lavender pointer-events-none blur-3xl opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full glow-blush pointer-events-none blur-3xl opacity-60"
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Essential Hero Information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Profession Accent Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2F5]/70 border border-[#B8A4D8]/30 w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-[#B8A4D8] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#39324B]">
                {HERO_DATA.profession}
              </span>
            </div>

            {/* Main Heading: Payal Arora */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#24212A] leading-[1.05] mb-6 font-heading">
              {HERO_DATA.name}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#645E6E] font-normal leading-relaxed max-w-xl mb-10 font-body">
              &ldquo;{HERO_DATA.subtitle}&rdquo;
            </p>

            {/* Two Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-[#24212A]/15 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#B8A4D8]"
                aria-label="Hire Payal Arora on WhatsApp"
              >
                <FaWhatsapp className="text-lg text-[#B8A4D8]" />
                <span>Hire Me</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm sm:text-base cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#B8A4D8]"
                aria-label="Explore Payal's Work and Case Studies"
              >
                <span>Explore My Work</span>
                <HiArrowNarrowRight className="text-lg text-[#24212A] transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[460px]">
              {/* Decorative Frame Glow & Geometry */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 bg-gradient-to-tr from-[#B8A4D8]/30 via-[#FAF8F5] to-[#E8C7CB]/40 rounded-[2.5rem] -rotate-2 transform scale-100 filter blur-sm"
              />

              {/* Card Container */}
              <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 sm:p-3.5 shadow-2xl border border-white/90">
                {/* Portrait Image */}
                <div className="relative aspect-[4/5] w-full rounded-[1.6rem] overflow-hidden bg-[#FAF8F5]">
                  <ImageWithFallback
                    src={HERO_DATA.portraitImage.url}
                    alt={HERO_DATA.portraitImage.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 460px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24212A]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Glassmorphism Floating Tag */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7 glass-panel rounded-2xl p-3.5 sm:p-4 shadow-xl flex items-center justify-between border border-white/90">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#645E6E]">
                      Creative Direction
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#24212A] font-heading">
                      Strategic Brand Growth
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#24212A] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shadow-sm">
                    PA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
