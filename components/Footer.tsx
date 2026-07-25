"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const navigation = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "#",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#B68D40]/5 blur-3xl" />
      </div>

      <div className="section relative py-16">
        {/* Top */}

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              <span className="text-white">Bat</span>
              <span className="text-[#B68D40]">man</span>
            </h2>

            <p className="mt-3 max-w-md text-white/60">
              Building premium digital experiences through design, development,
              marketing and creativity.
            </p>
          </motion.div>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/60 transition-colors duration-300 hover:text-[#B68D40]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#B68D40]/40 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Copyright */}

          <p className="text-center text-sm text-white/50 lg:text-left">
            © {year} Batman. All rights reserved.
          </p>

          {/* Socials */}

          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[#B68D40] hover:bg-[#B68D40]/10 hover:text-[#B68D40]"
                >
                  <Icon size={15} />
                </Link>
              );
            })}
          </div>

          {/* Back to Top */}

          <Link
            href="#hero"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#B68D40]/30 bg-[#B68D40]/10 text-[#B68D40] transition-all duration-300 hover:-translate-y-1 hover:border-[#B68D40] hover:bg-[#B68D40] hover:text-black"
          >
            <ArrowUp
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
