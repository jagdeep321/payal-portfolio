"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineLightBulb } from "react-icons/hi";
import { TbCertificate, TbTargetArrow } from "react-icons/tb";
import { ABOUT_DATA } from "../data/portfolio";
import { Card3D } from "./Card3D";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative bg-[#FAF8F5] border-t border-[#24212A]/5 overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* Decorative Aura with Ambient Floating Animation */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-0 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full glow-lavender pointer-events-none blur-3xl opacity-50 translate-x-1/3"
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2F5]/80 border border-[#B8A4D8]/30 w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8A4D8] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#39324B]">
              Discover My Story
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24212A] tracking-tight font-heading">
            {ABOUT_DATA.sectionHeading}
          </h2>
        </motion.div>

        {/* Two-Column Modern Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Introduction & My Approach with 3D Entrance from LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Introduction Card */}
            <Card3D intensity={8} depth={18} scaleOnHover={1.015}>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white shadow-[0_10px_30px_-10px_rgba(36,33,42,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(36,33,42,0.1)] transition-shadow duration-300 relative">
                <div
                  style={{ transform: "translateZ(25px)" }}
                  className="w-12 h-12 rounded-2xl bg-[#EAE2F5] flex items-center justify-center text-[#24212A] mb-6 shadow-xs"
                >
                  <TbTargetArrow className="w-6 h-6 text-[#4F3B74]" />
                </div>
                <p className="text-lg sm:text-xl text-[#24212A] font-normal leading-relaxed font-body">
                  {ABOUT_DATA.introParagraph}
                </p>
              </div>
            </Card3D>

            {/* My Approach Panel with 3D Depth */}
            <Card3D intensity={10} depth={24} scaleOnHover={1.02}>
              <div className="relative rounded-3xl overflow-hidden p-8 sm:p-9 bg-gradient-to-br from-[#EAE2F5]/85 via-[#FAF8F5] to-[#E8C7CB]/65 border border-[#B8A4D8]/35 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="w-9 h-9 rounded-xl bg-white/95 shadow-xs flex items-center justify-center text-[#674D94]"
                  >
                    <HiOutlineLightBulb className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#24212A] font-heading">
                    {ABOUT_DATA.approach.heading}
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#39324B] leading-relaxed font-body">
                  &ldquo;{ABOUT_DATA.approach.text}&rdquo;
                </p>
              </div>
            </Card3D>
          </motion.div>

          {/* Right Column: Education & Training Cards from RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="px-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8A8496]">
                Background &amp; Credentials
              </span>
              <h3 className="text-2xl font-bold text-[#24212A] font-heading mt-1">
                Education &amp; Training
              </h3>
            </div>

            {/* Card 1: Graduation in Mathematics */}
            <Card3D intensity={10} depth={18} scaleOnHover={1.025}>
              <div className="group bg-white rounded-3xl p-7 border border-[#24212A]/6 shadow-[0_8px_24px_-8px_rgba(36,33,42,0.05)] hover:shadow-[0_20px_35px_-8px_rgba(36,33,42,0.12)] hover:border-[#B8A4D8]/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    style={{ transform: "translateZ(25px)" }}
                    className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/8 flex items-center justify-center text-[#24212A] group-hover:bg-[#EAE2F5] group-hover:scale-110 transition-all duration-300 shrink-0 shadow-xs"
                  >
                    <HiOutlineAcademicCap className="w-6 h-6 text-[#24212A]" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#674D94] mb-1">
                      Formal Degree
                    </span>
                    <h4 className="text-lg font-bold text-[#24212A] font-heading">
                      Graduation in Mathematics
                    </h4>
                    <p className="text-sm text-[#645E6E] mt-1 font-medium font-body">
                      Guru Nanak Dev University, Amritsar
                    </p>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Card 2: Digital Marketing */}
            <Card3D intensity={10} depth={18} scaleOnHover={1.025}>
              <div className="group bg-white rounded-3xl p-7 border border-[#24212A]/6 shadow-[0_8px_24px_-8px_rgba(36,33,42,0.05)] hover:shadow-[0_20px_35px_-8px_rgba(36,33,42,0.12)] hover:border-[#E8C7CB]/60 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    style={{ transform: "translateZ(25px)" }}
                    className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/8 flex items-center justify-center text-[#24212A] group-hover:bg-[#E8C7CB]/50 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-xs"
                  >
                    <TbCertificate className="w-6 h-6 text-[#24212A]" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#A25A64] mb-1">
                      Specialized Training
                    </span>
                    <h4 className="text-lg font-bold text-[#24212A] font-heading">
                      Digital Marketing
                    </h4>
                    <p className="text-sm text-[#645E6E] mt-1 font-medium font-body">
                      Deforce Academy, Amritsar
                    </p>
                  </div>
                </div>
              </div>
            </Card3D>

            {/* Subtle editorial quote tag */}
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-xs border border-dashed border-[#B8A4D8]/50 text-xs text-[#645E6E] leading-relaxed font-body">
              <span className="font-semibold text-[#24212A]">Data + Narrative:</span> A mathematical background brings rigorous analytical measurement to marketing campaigns, paired with intuitive visual creative execution.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
