"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { CONTACT_DATA, CONTACT_INFO, INSTAGRAM_PROFILE_URL } from "../data/portfolio";
import { Card3D } from "./Card3D";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative bg-[#FAF8F5] border-t border-[#24212A]/5 overflow-hidden"
      style={{ perspective: 1200 }}
    >
      <div className="container-custom relative z-10">
        {/* Dark Charcoal Contrast Card with 3D Depth */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] bg-[#24212A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Dynamic Floating Ambient Glows inside Dark Panel */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.18, 0.32, 0.18],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#B8A4D8]/25 blur-3xl pointer-events-none"
          />
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E8C7CB]/20 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content from LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -6 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 w-fit mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#B8A4D8] animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#EAE2F5]">
                  Get In Touch
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight mb-5">
                {CONTACT_DATA.headline}
              </h2>

              <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-xl mb-8 font-body">
                &ldquo;{CONTACT_DATA.subheading}&rdquo;
              </p>

              {/* Direct Info Display: Phone & Email */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-4 border-t border-white/10">
                {/* Phone */}
                <motion.a
                  whileHover={{ scale: 1.03, x: 2 }}
                  href={CONTACT_INFO.telUrl}
                  className="group flex items-center gap-3.5 text-white/90 hover:text-white transition-colors"
                  aria-label={`Call Payal Arora at ${CONTACT_INFO.phone}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#B8A4D8] group-hover:text-[#24212A] group-hover:scale-110 transition-all shadow-xs">
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[11px] block text-white/60 uppercase tracking-wider font-semibold font-body">
                      Direct Line
                    </span>
                    <span className="text-base font-bold font-heading">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  whileHover={{ scale: 1.03, x: 2 }}
                  href={CONTACT_INFO.mailtoUrl}
                  className="group flex items-center gap-3.5 text-white/90 hover:text-white transition-colors"
                  aria-label={`Email Payal Arora at ${CONTACT_INFO.email}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#B8A4D8] group-hover:text-[#24212A] group-hover:scale-110 transition-all shadow-xs">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <span className="text-[11px] block text-white/60 uppercase tracking-wider font-semibold font-body">
                      Email Address
                    </span>
                    <span className="text-base font-bold font-heading">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Action Panel from RIGHT with 3D Tilt */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 6 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <Card3D intensity={8} depth={15} scaleOnHover={1.015}>
                <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <h3 className="text-lg font-bold text-white font-heading mb-2">
                    Quick Connections
                  </h3>

                  {/* Button 1: Call Now */}
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={CONTACT_INFO.telUrl}
                    className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white text-[#24212A] font-semibold text-sm hover:bg-[#FAF8F5] transition-all shadow-md hover:shadow-lg"
                    aria-label="Call Payal Now"
                  >
                    <div className="flex items-center gap-3 font-body">
                      <FaPhoneAlt className="text-base text-[#674D94] group-hover:rotate-12 transition-transform" />
                      <span>Call Now</span>
                    </div>
                    <HiOutlineArrowUpRight className="text-lg text-[#24212A]/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>

                  {/* Button 2: WhatsApp */}
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba5a] transition-all shadow-md hover:shadow-lg hover:shadow-[#25D366]/25"
                    aria-label="Chat on WhatsApp with Payal"
                  >
                    <div className="flex items-center gap-3 font-body">
                      <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
                      <span>WhatsApp Me</span>
                    </div>
                    <HiOutlineArrowUpRight className="text-lg text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>

                  {/* Button 3: Email Me */}
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={CONTACT_INFO.mailtoUrl}
                    className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-all border border-white/15 hover:shadow-md"
                    aria-label="Send an email to Payal"
                  >
                    <div className="flex items-center gap-3 font-body">
                      <FaEnvelope className="text-base text-[#B8A4D8] group-hover:scale-110 transition-transform" />
                      <span>Email Me</span>
                    </div>
                    <HiOutlineArrowUpRight className="text-lg text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>

                  {/* Social Media Links */}
                  <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/70 font-medium font-body">
                      Follow &amp; Connect:
                    </span>
                    <div className="flex items-center gap-3">
                      {/* Instagram - Configured via INSTAGRAM_PROFILE_URL in data/portfolio.ts */}
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        whileTap={{ scale: 0.95 }}
                        href={INSTAGRAM_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#E8C7CB] hover:bg-white/20 transition-all shadow-xs"
                        aria-label="Payal Arora on Instagram (Configure URL in data/portfolio.ts)"
                        title="Payal Arora on Instagram"
                      >
                        <FaInstagram className="text-base" />
                      </motion.a>

                      {/* WhatsApp Icon */}
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: -6 }}
                        whileTap={{ scale: 0.95 }}
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:text-[#25D366] hover:bg-white/20 transition-all shadow-xs"
                        aria-label="Payal Arora on WhatsApp"
                        title="Chat on WhatsApp"
                      >
                        <FaWhatsapp className="text-base" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
