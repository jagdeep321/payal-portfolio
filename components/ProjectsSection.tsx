"use client";

import React from "react";
import { motion } from "framer-motion";
import { TbSparkles, TbBriefcase, TbCompass, TbLayersLinked } from "react-icons/tb";
import { PROJECTS_DATA } from "../data/portfolio";
import { ImageWithFallback } from "./ImageWithFallback";

export function ProjectsSection() {
  const brInteriors = PROJECTS_DATA[0];
  const graphicsDesign = PROJECTS_DATA[1];
  const outfitStore = PROJECTS_DATA[2];

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative bg-[#FAF8F5] border-t border-[#24212A]/5 overflow-hidden"
    >
      {/* Decorative Aura */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full glow-lavender pointer-events-none blur-3xl opacity-35"
      />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2F5]/80 border border-[#B8A4D8]/30 w-fit mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B8A4D8]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#39324B]">
              Selected Client Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#24212A] tracking-tight font-heading mb-4">
            Portfolio &amp; Success Stories
          </h2>
          <p className="text-base sm:text-lg text-[#645E6E] font-normal leading-relaxed">
            &ldquo;Creative work, thoughtful strategies, and digital experiences designed to help brands stand out.&rdquo;
          </p>
        </div>

        {/* 3 DISTINCT PROJECT SHOWCASES */}
        <div className="flex flex-col gap-20 lg:gap-28">

          {/* ===============================================================
              PROJECT 1: BR Interiors (Interior Design & Modular Kitchens)
              =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/95 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#24212A]/6 shadow-[0_12px_40px_-15px_rgba(36,33,42,0.06)]"
          >
            {/* Top Row: Meta & Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#24212A]/8">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EAE2F5] text-[#39324B]">
                    Project 01
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF8F5] text-[#645E6E] border border-[#24212A]/5">
                    {brInteriors.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24212A] font-heading">
                  {brInteriors.title}
                </h3>
              </div>

              {brInteriors.role && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/8 text-xs font-semibold text-[#24212A]">
                  <TbBriefcase className="w-4 h-4 text-[#674D94]" />
                  <span>Role: {brInteriors.role}</span>
                </div>
              )}
            </div>

            {/* Middle Row: Scope Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
              <div className="lg:col-span-8">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A8496] block mb-2">
                  Scope of Work
                </span>
                <p className="text-base sm:text-lg text-[#24212A] leading-relaxed font-normal">
                  &ldquo;{brInteriors.scope}&rdquo;
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap items-center gap-2 self-center">
                {brInteriors.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#FAF8F5] text-[#39324B] border border-[#24212A]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Exactly 2 High-Quality Images Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {brInteriors.images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#24212A]/8 shadow-sm"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                  {/* <div className="relative h-[280px] sm:h-[320px] lg:h-[350px] w-full overflow-hidden bg-white"> */}
                    <ImageWithFallback
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      // className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      className="object-contain transition-transform duration-700 ease-out "
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24212A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <p className="text-xs font-medium text-white tracking-wide">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                  {img.caption && (
                    <div className="p-3.5 bg-white border-t border-[#24212A]/5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#24212A]">
                        {img.caption}
                      </span>
                      <span className="text-[11px] text-[#8A8496]">Modern Kitchen</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.article>


          {/* ===============================================================
              PROJECT 2: Graphics Design (Cafe Branding & Promotional Graphics)
              =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/95 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#24212A]/6 shadow-[0_12px_40px_-15px_rgba(36,33,42,0.06)]"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#24212A]/8">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#E8C7CB]/60 text-[#39324B]">
                    Project 02
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF8F5] text-[#645E6E] border border-[#24212A]/5">
                    {graphicsDesign.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24212A] font-heading">
                  {graphicsDesign.title}
                </h3>
              </div>

              {graphicsDesign.context && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/8 text-xs font-semibold text-[#24212A]">
                  <TbCompass className="w-4 h-4 text-[#A25A64]" />
                  <span>Context: {graphicsDesign.context}</span>
                </div>
              )}
            </div>

            {/* Scope & Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#24212A]/5">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A8496] block mb-2">
                  Scope
                </span>
                <p className="text-sm sm:text-base text-[#24212A] leading-relaxed">
                  &ldquo;{graphicsDesign.scope}&rdquo;
                </p>
              </div>

              <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#24212A]/5">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A8496] block mb-2">
                  Key Deliverables
                </span>
                <p className="text-sm sm:text-base text-[#24212A] leading-relaxed">
                  &ldquo;{graphicsDesign.deliverables}&rdquo;
                </p>
              </div>
            </div>

            {/* Exactly 2 High-Quality Images for Cafe Branding */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {graphicsDesign.images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#24212A]/8 shadow-sm"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                    <ImageWithFallback
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      // className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      className="object-contain transition-transform duration-700 ease-out"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24212A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <p className="text-xs font-medium text-white tracking-wide">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                  {img.caption && (
                    <div className="p-3.5 bg-white border-t border-[#24212A]/5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#24212A]">
                        {img.caption}
                      </span>
                      <span className="text-[11px] text-[#8A8496]">Cafe Branding</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.article>


          {/* ===============================================================
              PROJECT 3: Clothing Brand: The Outfit Store
              =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white/95 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#24212A]/6 shadow-[0_12px_40px_-15px_rgba(36,33,42,0.06)]"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#24212A]/8">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF8F5] text-[#24212A] border border-[#24212A]/10">
                    Project 03
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-[#EAE2F5] text-[#39324B]">
                    {outfitStore.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#24212A] font-heading">
                  {outfitStore.title}
                </h3>
              </div>

              {outfitStore.role && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/8 text-xs font-semibold text-[#24212A]">
                  <TbBriefcase className="w-4 h-4 text-[#674D94]" />
                  <span>Role: {outfitStore.role}</span>
                </div>
              )}
            </div>

            {/* Split Editorial Presentation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#8A8496] block mb-2">
                    Scope of Engagement
                  </span>
                  <p className="text-base sm:text-lg text-[#24212A] leading-relaxed font-normal">
                    &ldquo;{outfitStore.scope}&rdquo;
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#24212A]/6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#674D94] mb-2">
                    <TbLayersLinked className="w-4 h-4" />
                    <span>Deliverables &amp; Campaign Execution</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#39324B] leading-relaxed">
                    &ldquo;{outfitStore.deliverables}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {outfitStore.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-[#39324B] border border-[#24212A]/10 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fashion Visual Gallery */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {outfitStore.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#24212A]/8 shadow-sm"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <ImageWithFallback
                        src={img.url}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        containerClassName="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24212A]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-xs font-medium text-white tracking-wide">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                    {img.caption && (
                      <div className="p-3 bg-white border-t border-[#24212A]/5 text-center">
                        <span className="text-[11px] font-semibold text-[#24212A] line-clamp-1">
                          {img.caption}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
