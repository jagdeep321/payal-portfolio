"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HERO_DATA, CONTACT_INFO } from "../data/portfolio";
import { ImageWithFallback } from "./ImageWithFallback";
import { Card3D } from "./Card3D";

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
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Floating Ambient Background Glows */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/4 -translate-x-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] rounded-full glow-lavender pointer-events-none blur-3xl opacity-75"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 right-6 w-[280px] sm:w-[460px] h-[280px] sm:h-[460px] rounded-full glow-blush pointer-events-none blur-3xl opacity-65"
      />

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Essential Hero Information with 3D Entrance from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Profession Accent Badge with Soft Pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2F5]/85 border border-[#B8A4D8]/40 w-fit mb-5 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8A4D8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8265B3]" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#39324B]">
                {HERO_DATA.profession}
              </span>
            </motion.div>

            {/* Main Heading: Payal Arora */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#24212A] leading-[1.05] mb-6 font-heading"
            >
              {HERO_DATA.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-base sm:text-xl md:text-2xl text-[#645E6E] font-normal leading-relaxed max-w-xl mb-10 font-body"
            >
              &ldquo;{HERO_DATA.subtitle}&rdquo;
            </motion.p>

            {/* Two Call To Action Buttons with 3D Depth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base shadow-xl shadow-[#24212A]/20 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#B8A4D8]"
                aria-label="Hire Payal Arora on WhatsApp"
              >
                <FaWhatsapp className="text-lg text-[#B8A4D8] animate-bounce" />
                <span>Hire Me</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-secondary group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm sm:text-base cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#B8A4D8] shadow-sm hover:shadow-md"
                aria-label="Explore Payal's Work and Case Studies"
              >
                <span>Explore My Work</span>
                <HiArrowNarrowRight className="text-lg text-[#24212A] transition-transform duration-200 group-hover:translate-x-1.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Portrait with Interactive 3D Card Tilt from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70, rotateY: 10, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
              <Card3D intensity={14} depth={35} scaleOnHover={1.03}>
                <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 sm:p-3.5 shadow-2xl border border-white/95">
                  {/* Decorative Frame Glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2 bg-gradient-to-tr from-[#B8A4D8]/30 via-[#FAF8F5] to-[#E8C7CB]/35 rounded-[2.5rem] -rotate-2 transform scale-100 filter blur-xs pointer-events-none"
                  />

                  {/* Portrait Image */}
                  <div className="relative aspect-[4/5] w-full rounded-[1.6rem] overflow-hidden bg-[#FAF8F5] z-10">
                    <ImageWithFallback
                      src={HERO_DATA.portraitImage.url}
                      alt={HERO_DATA.portraitImage.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 460px"
                      className="object-cover object-top hover:scale-108 transition-transform duration-700 ease-out"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24212A]/45 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Glassmorphism Floating Tag with True 3D translateZ */}
                  <div
                    style={{ transform: "translateZ(45px)" }}
                    className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7 glass-panel rounded-2xl p-3.5 sm:p-4 shadow-2xl flex items-center justify-between border border-white/95 z-20"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#645E6E]">
                        Creative Direction
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#24212A] font-heading">
                        Strategic Brand Growth
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#24212A] to-[#39324B] text-[#FAF8F5] flex items-center justify-center font-bold text-xs shadow-md">
                      PA
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
