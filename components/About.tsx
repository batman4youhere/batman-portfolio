"use client";

import { motion } from "framer-motion";
import { Briefcase, Clapperboard, Globe, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    title: "Digital Marketing",
    description:
      "Performance-driven campaigns focused on growth, engagement, lead generation and measurable business results.",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description:
      "Cinematic edits, reels, YouTube videos and social-first content designed to capture attention within seconds.",
  },
  {
    icon: Globe,
    title: "Content Creation",
    description:
      "Creating high-quality visual content that helps brands build trust and connect with their audience.",
  },
  {
    icon: Sparkles,
    title: "Creative Strategy",
    description:
      "Combining creativity with data to build memorable digital experiences and impactful marketing campaigns.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-padding">
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-20"
      >
        <div className="max-w-3xl mx-auto lg:mx-0">
          <p className="gold-text mb-5 text-sm font-semibold tracking-[0.4em] uppercase">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-6xl text-center lg:text-left">
            Blending <span className="gold-text">Creativity,</span>
            <br />
            Marketing <span className="gradient-text">and Technology.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            Building premium digital experiences by combining creative
            storytelling, marketing strategy and modern technology.
          </p>
        </div>
      </motion.div>

      <div className="grid items-start gap-8 lg:gap-12gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="glass p-8 md:p-10">
            <h3 className="mb-6 text-2xl font-semibold">Who am I?</h3>

            <div className="space-y-5">
              <p>
                I'm <span className="font-semibold text-white">Batman</span> — a
                freelance Digital Marketer, Video Editor and Content Creator
                passionate about building brands that leave a lasting
                impression.
              </p>

              <p>
                My work combines modern design, storytelling and marketing
                strategy to create content that not only looks premium but also
                delivers measurable results.
              </p>

              <p>
                I enjoy experimenting with new technologies, AI tools and
                creative workflows to produce engaging experiences across web,
                social media and digital platforms.
              </p>
            </div>

            <div className="divider my-8" />

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-[#B68D40]">100+</h4>

                <p className="mt-2 text-sm text-white/60">Creative Projects</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#B68D40]">3+</h4>

                <p className="mt-2 text-sm text-white/60">Years Experience</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="grid gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="card flex flex-col sm:flex-row items-start gap-5 p-6 lg:p-7"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B68D40]/10 text-[#B68D40]">
                  <Icon size={28} />
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>

                  <p className="text-sm leading-7 text-white/65">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
