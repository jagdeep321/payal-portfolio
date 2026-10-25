"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NAVIGATION_LINKS, CONTACT_INFO, INSTAGRAM_PROFILE_URL } from "../data/portfolio";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
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
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#24212A]/10 pt-16 pb-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#24212A]/8">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3.5">
            <a
              href="#home"
              onClick={handleLogoClick}
              className="group flex items-center gap-3 select-none"
              aria-label="Payal Arora - Back to Top"
            >
              {/* <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#24212A] to-[#39324B] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="font-heading font-extrabold text-sm tracking-widest text-[#FAF8F5]">
                  PA
                </span>
              </div> */}
              <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
  <img
    src="/payal logo2.PNG"
    alt="Payal Arora Logo"
    className="w-full h-full object-contain"
  />
</div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-lg text-[#24212A] tracking-tight">
                  Payal Arora
                </span>
                <span className="text-xs text-[#8A8496] font-medium">
                  Digital Marketer &amp; Social Media Executive
                </span>
              </div>
            </a>
          </div>

          {/* Quick Navigation Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-[#645E6E]"
          >
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-[#24212A] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-[#24212A]/10 flex items-center justify-center text-[#24212A] hover:text-[#674D94] hover:border-[#674D94] hover:scale-105 transition-all shadow-2xs"
              aria-label="Payal Arora on Instagram"
              title="Instagram"
            >
              <FaInstagram className="text-base" />
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-[#24212A]/10 flex items-center justify-center text-[#24212A] hover:text-[#25D366] hover:border-[#25D366] hover:scale-105 transition-all shadow-2xs"
              aria-label="Connect on WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-base" />
            </a>
          </div>
        </div>

        {/* Dynamic Copyright Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8496] gap-4">
          <p>
            &copy; {currentYear} Payal Arora. All rights reserved.
          </p>
          <p className="font-medium text-[#645E6E]">
            Designed with precision &amp; strategic vision.
          </p>
        </div>
      </div>
    </footer>
  );
}
