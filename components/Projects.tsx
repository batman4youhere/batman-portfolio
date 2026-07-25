"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Brand Promo Edit",
    category: "Video Editing",
    description:
      "High-energy promotional edit designed to increase engagement and brand awareness.",
    image: "/images/project-1.jpg",
  },
  {
    title: "Instagram Reels Campaign",
    category: "Social Media Marketing",
    description:
      "Created and optimized short-form content for maximum reach and engagement.",
    image: "/images/project-2.jpg",
  },
  {
    title: "Meta Ads Campaign",
    category: "Digital Marketing",
    description:
      "Performance-focused advertising campaign targeting lead generation and conversions.",
    image: "/images/project-3.jpg",
  },
  {
    title: "YouTube Video Edit",
    category: "Video Editing",
    description:
      "Professional long-form editing with motion graphics, transitions, and color grading.",
    image: "/images/project-4.jpg",
  },
  {
    title: "Business Branding",
    category: "Creative Design",
    description:
      "Developed visual identity and marketing creatives for social media platforms.",
    image: "/images/project-5.jpg",
  },
  {
    title: "SEO Growth Strategy",
    category: "SEO",
    description:
      "Optimized website structure and content strategy for improved search visibility.",
    image: "/images/project-6.jpg",
  },
];



export default function Projects() {
  return (
    <section
      id="projects"
      className="section section-padding"
    >
      <div className="section">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p
            className="
              gold-text
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.4em]
            "
          >
            Portfolio
          </p>

          <h2
            className="
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              md:text-5xl
              lg:text-6xl
            "
          >
            Featured{" "}
            <span className="gradient-text">
              Work
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-white/65
            "
          >
            A selection of projects showcasing my expertise in digital
            marketing, content creation, branding and professional
            video editing.
          </p>
        </motion.div>

        {/* Projects */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
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
                delay: index * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                card
                overflow-hidden
                rounded-[28px]
              "
              >
              {/* Image */}

              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}

              <div className="p-7">
                <p
                  className="
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    text-[#B68D40]
                  "
                >
                  {project.category}
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-white/65
                  "
                >
                  {project.description}
                </p>

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#B68D40]
                  "
                >
                  View Project

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}