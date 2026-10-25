"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { CONTACT_DATA, CONTACT_INFO, INSTAGRAM_PROFILE_URL } from "../data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative bg-[#FAF8F5] border-t border-[#24212A]/5 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Dark Charcoal Contrast Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-[#24212A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Subtle Accent Glows inside Dark Panel */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B8A4D8]/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E8C7CB]/15 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-[#B8A4D8]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#EAE2F5]">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight mb-5">
                {CONTACT_DATA.headline}
              </h2>

              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-xl mb-8">
                &ldquo;{CONTACT_DATA.subheading}&rdquo;
              </p>

              {/* Direct Info Display: Phone & Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-4 border-t border-white/10">
                {/* Phone */}
                <a
                  href={CONTACT_INFO.telUrl}
                  className="group flex items-center gap-3.5 text-white/90 hover:text-white transition-colors"
                  aria-label={`Call Payal Arora at ${CONTACT_INFO.phone}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#B8A4D8] group-hover:text-[#24212A] transition-all">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[11px] block text-white/60 uppercase tracking-wider font-semibold">
                      Direct Line
                    </span>
                    <span className="text-base font-bold font-heading">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={CONTACT_INFO.mailtoUrl}
                  className="group flex items-center gap-3.5 text-white/90 hover:text-white transition-colors"
                  aria-label={`Email Payal Arora at ${CONTACT_INFO.email}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#B8A4D8] group-hover:text-[#24212A] transition-all">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[11px] block text-white/60 uppercase tracking-wider font-semibold">
                      Email Address
                    </span>
                    <span className="text-base font-bold font-heading">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Action Panel: 3 Functional CTA Buttons & Social Icons */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Quick Connections
              </h3>

              {/* Button 1: Call Now */}
              <a
                href={CONTACT_INFO.telUrl}
                className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white text-[#24212A] font-semibold text-sm hover:bg-[#FAF8F5] transition-all hover:scale-[1.02] shadow-md"
                aria-label="Call Payal Now"
              >
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-base text-[#674D94]" />
                  <span>Call Now</span>
                </div>
                <HiOutlineArrowUpRight className="text-lg text-[#24212A]/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Button 2: WhatsApp */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba5a] transition-all hover:scale-[1.02] shadow-md"
                aria-label="Chat on WhatsApp with Payal"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp Me</span>
                </div>
                <HiOutlineArrowUpRight className="text-lg text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Button 3: Email Me */}
              <a
                href={CONTACT_INFO.mailtoUrl}
                className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/15 hover:scale-[1.02]"
                aria-label="Send an email to Payal"
              >
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-base text-[#B8A4D8]" />
                  <span>Email Me</span>
                </div>
                <HiOutlineArrowUpRight className="text-lg text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Social Media Links */}
              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/70 font-medium">
                  Follow &amp; Connect:
                </span>
                <div className="flex items-center gap-3">
                  {/* Instagram - Configured via INSTAGRAM_PROFILE_URL in data/portfolio.ts */}
                  <a
                    href={INSTAGRAM_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#E8C7CB] hover:bg-white/20 hover:scale-110 transition-all"
                    aria-label="Payal Arora on Instagram (Configure URL in data/portfolio.ts)"
                    title="Payal Arora on Instagram"
                  >
                    <FaInstagram className="text-base" />
                  </a>

                  {/* WhatsApp Icon */}
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#25D366] hover:bg-white/20 hover:scale-110 transition-all"
                    aria-label="Payal Arora on WhatsApp"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
