"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

import type { Variants } from "framer-motion";

const animation: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#B68D40]/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#8B1E24]/10 blur-[140px]" />
      </div>

      <div className="section grid items-center gap-10 lg:gap-16 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)]">
        {/* LEFT SIDE */}

        <div>
          <motion.p
            variants={animation}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex rounded-full border border-[#B68D40]/30 bg-[#B68D40]/10 px-5 py-2 text-sm font-medium tracking-wide text-[#B68D40]"
          >
            🦇 Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={animation}
            initial="hidden"
            animate="show"
            custom={0.15}

            className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Crafting
            <span className="gold-text">Digital Experiences</span>
            with Creativity &<span className="gradient-text">Strategy.</span>
          </motion.h1>

          <motion.p
            variants={animation}
            initial="hidden"
            animate="show"
            custom={0.3}

            className="mt-8 max-w-2xl text-lg leading-8 text-white/70"
          >
            I'm <span className="font-semibold text-white">Batman</span>, a
            Freelance Digital Marketer, Video Editor and Content Creator focused
            on building impactful brands through performance marketing,
            cinematic storytelling and modern web experiences.
          </motion.p>

          <motion.div
            variants={animation}
            initial="hidden"
            animate="show"
            custom={0.45}

            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="#projects" className="btn-primary group">
              View Projects
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={animation}
            initial="hidden"
            animate="show"
            custom={0.6}

            className="mt-12 flex items-center gap-4"
          >
            {[
              {
                icon: <FaLinkedinIn />,
                label: "LinkedIn",
              },
              {
                icon: <FaGithub />,
                label: "Github",
              },
              {
                icon: <FaInstagram />,
                label: "Instagram",
              },
            ].map((item) => (
              <Link
                key={item.label}

                href="#"

                aria-label={item.label}

                className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full text-white"
              >
                {item.icon}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.8,
          }}

          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute inset-5 rounded-[40px] bg-[#B68D40]/20 blur-3xl" />

          <div className="glass relative rounded-[36px] border border-[#B68D40]/20 p-3">
            <div className="overflow-hidden rounded-[30px]">
                <Image
                    src="/images/profile.jpg"
                    alt="Batman"
                    width={700}
                    height={900}
                    sizes="(max-width: 768px) 90vw, 420px"
                />
            </div>

            <div className="absolute top-8 left-0 h-[80%] w-1 rounded-full bg-[#B68D40]" />
          </div>

          {/* Floating Cards */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 4,
            }}

            className="glass absolute bottom-6 left-[-20px] rounded-3xl px-5 py-4 sm:left-[-35px]"
          >
            <p className="text-3xl font-bold text-[#B68D40]">3+</p>

            <p className="text-xs text-white/60">Years Creating Content</p>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 5,
            }}

            className="glass absolute top-10 right-[-20px] rounded-3xl px-5 py-4 sm:right-[-35px]"
          >
            <p className="text-3xl font-bold text-[#B68D40]">100+</p>

            <p className="text-xs text-white/60">Creative Projects</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
