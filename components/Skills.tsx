"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Palette,
  Video,
  BrainCircuit,
  Globe,
} from "lucide-react";

const skillGroups = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    skills: [
      "Performance Marketing",
      "SEO",
      "Social Media Marketing",
      "Content Strategy",
      "Analytics",
    ],
  },

  {
    icon: Video,
    title: "Video Editing",
    skills: [
      "Premiere Pro",
      "After Effects",
      "CapCut",
      "Reels Editing",
      "Cinematic Editing",
    ],
  },

  {
    icon: Code2,
    title: "Web Development",
    skills: ["Next.js", "React", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },

  {
    icon: BrainCircuit,
    title: "AI & Technology",
    skills: [
      "AI Tools",
      "Machine Learning",
      "Python",
      "Automation",
      "Prompt Engineering",
    ],
  },

  {
    icon: Palette,
    title: "Creative Design",
    skills: [
      "Graphic Design",
      "Brand Identity",
      "Visual Content",
      "Photography",
    ],
  },

  {
    icon: Globe,
    title: "Other Skills",
    skills: [
      "Content Creation",
      "Social Media Growth",
      "Research",
      "Problem Solving",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-padding">
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

        className="mb-16"
      >
        <p className="gold-text mb-5 text-sm font-semibold tracking-[0.4em] uppercase">
          Skills
        </p>

        <h2 className="max-w-4xl text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          Tools & Skills That
          <span className="gold-text"> Create Impact.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
          A combination of creativity, marketing knowledge and technical skills
          to build modern digital experiences.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={group.title}

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
                duration: 0.5,
                delay: index * 0.08,
              }}

              className="card p-7"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B68D40]/10 text-[#B68D40]">
                <Icon size={28} />
              </div>

              <h3 className="mb-5 text-xl font-semibold">{group.title}</h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}

                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
