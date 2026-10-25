"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { NAVIGATION_LINKS, CONTACT_INFO } from "../data/portfolio";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAVIGATION_LINKS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-[0_10px_30px_-10px_rgba(36,33,42,0.06)]"
            : "bg-[#FAF8F5]/80 backdrop-blur-md py-5 border-b border-[#24212A]/5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Left: Custom PA Monogram Logo */}
          <a
            href="#home"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#B8A4D8] rounded-xl"
            aria-label="Payal Arora - Back to Home"
          >
            {/* <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#24212A] to-[#39324B] flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[#B8A4D8]/20">
              <span className="font-heading font-extrabold text-sm tracking-widest text-[#FAF8F5]">
                PA
              </span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#B8A4D8] border-2 border-[#FAF8F5]" />
            </div> */}
            
{/* <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
  <img
    src="/payal logo2.PNG"
    alt="Payal Arora Logo"
    className="w-full h-full object-contain"
  />
  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#B8A4D8] border-2 border-[#FAF8F5]" />
</div> */}

<div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
  <img
    src="/payal logo.PNG"
    alt="Payal Arora Logo"
    className="w-full h-full object-contain"
  />
</div>


            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-[#24212A] tracking-tight group-hover:text-[#674D94] transition-colors">
                Payal Arora
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8A8496] font-medium -mt-1 hidden sm:block">
                Digital Marketer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#24212A]/8 shadow-sm"
          >
            {NAVIGATION_LINKS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#B8A4D8] ${
                    isActive
                      ? "text-[#FAF8F5]"
                      : "text-[#645E6E] hover:text-[#24212A] hover:bg-[#FAF8F5]/80"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#24212A] rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA button on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#24212A] text-white hover:bg-[#362852] transition-all hover:scale-105 shadow-sm"
              aria-label="Connect with Payal on WhatsApp"
            >
              <FaWhatsapp className="text-sm text-[#B8A4D8]" />
              <span>Let&apos;s Chat</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/80 border border-[#24212A]/10 flex items-center justify-center text-[#24212A] hover:bg-white transition-colors focus-visible:ring-2 focus-visible:ring-[#B8A4D8] outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <HiX className="w-5 h-5 text-[#24212A]" />
            ) : (
              <HiMenuAlt3 className="w-5 h-5 text-[#24212A]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#24212A]/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[72px] left-4 right-4 z-40 bg-[#FAF8F5]/98 backdrop-blur-2xl rounded-2xl border border-white/80 p-5 shadow-2xl md:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {NAVIGATION_LINKS.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#24212A] text-white"
                          : "text-[#24212A] hover:bg-[#EAE2F5]/60"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#B8A4D8]" />
                      )}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-[#24212A]/10">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#24212A] to-[#39324B] text-white font-medium text-sm shadow-md"
                  >
                    <FaWhatsapp className="text-base text-[#B8A4D8]" />
                    <span>Connect on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
