"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TbChartBar,
  TbPalette,
  TbVideo,
  TbTargetArrow,
  TbMapPin,
  TbDeviceDesktop,
} from "react-icons/tb";
import { SERVICES_DATA } from "../data/portfolio";

export function ServicesSection() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "ChartBar":
        return <TbChartBar className="w-7 h-7 text-[#24212A]" />;
      case "Palette":
        return <TbPalette className="w-7 h-7 text-[#24212A]" />;
      case "VideoCamera":
        return <TbVideo className="w-7 h-7 text-[#24212A]" />;
      case "Target":
        return <TbTargetArrow className="w-7 h-7 text-[#24212A]" />;
      case "MapPin":
        return <TbMapPin className="w-7 h-7 text-[#24212A]" />;
      case "Devices":
        return <TbDeviceDesktop className="w-7 h-7 text-[#24212A]" />;
      default:
        return <TbChartBar className="w-7 h-7 text-[#24212A]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-[#FAF8F5] border-t border-[#24212A]/5 overflow-hidden"
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full glow-blush pointer-events-none blur-3xl opacity-40"
      />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2F5]/80 border border-[#B8A4D8]/30 w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8A4D8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#39324B]">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24212A] tracking-tight font-heading mb-4">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-[#645E6E] font-medium">
            &ldquo;Creative digital solutions designed to grow your brand.&rdquo;
          </p>
        </div>

        {/* 6 Services Responsive Grid: 3 col desktop, 2 col tablet, 1 col mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-9 border border-[#24212A]/6 shadow-[0_8px_24px_-10px_rgba(36,33,42,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(36,33,42,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/8 flex items-center justify-center group-hover:bg-[#EAE2F5] group-hover:scale-110 group-hover:rotate-1 transition-all duration-300 shadow-sm">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-heading font-bold text-xs text-[#8A8496] tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#24212A] font-heading mb-3 group-hover:text-[#674D94] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-[#645E6E] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Deliverable pills */}
              <div className="pt-5 border-t border-[#24212A]/5 flex flex-wrap gap-2">
                {service.deliverablesList.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#39324B] border border-[#24212A]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
