"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "Home";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 160;

        if (window.scrollY >= top) {
          current = item.label;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0B0B0B]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="section flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-[0.28em] select-none"
          >
            <span className="text-white">BAT</span>

            <span className="text-[#B68D40]">MAN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  active === item.label
                    ? "text-[#B68D40]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}

                {active === item.label && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#B68D40]"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full bg-[#B68D40] px-7 font-semibold text-black transition hover:-translate-y-1 hover:bg-[#D6B56B] hover:shadow-[0_15px_40px_rgba(182,141,64,.35)]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            exit={{
              opacity: 0,
              x: "100%",
            }}

            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}

            className="fixed inset-0 z-[60] bg-[#0B0B0B] px-8"
          >
            <div className="flex h-full flex-col justify-center">
              <div className="space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-4xl font-bold tracking-tight text-white transition hover:text-[#B68D40]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-12 inline-flex h-14 w-fit items-center rounded-full bg-[#B68D40] px-9 font-bold text-black"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
