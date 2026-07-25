"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@batman.dev",
    href: "mailto:hello@batman.dev",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+9100000000",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, Maharashtra",
    href: "#",
  },
];

const socials = [
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "#",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section section-padding"
    >
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
          Contact
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
          Let's Create Something{" "}
          <span className="gradient-text">
            Extraordinary.
          </span>
        </h2>

        <p
          className="
            mt-
            max-w-2xl
            text-lg
            leading-8
            text-white/65
          "
        >
          Have an idea, project, or collaboration in mind?
          I'd love to hear from you.
        </p>
      </motion.div>

      <div
        className="
          grid
          gap-10
          lg:grid-cols-[380px_1fr]
        "
      >
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="
                  card
                  flex
                  items-center
                  gap-5
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#B68D40]/10
                    text-[#B68D40]
                  "
                >
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/50">
                    {item.title}
                  </p>

                  <h3 className="mt-1 font-medium">
                    {item.value}
                  </h3>
                </div>
              </Link>
            );
          })}

          <div className="glass p-7">
            <h3 className="mb-6 text-lg font-semibold">
              Connect with me
            </h3>

            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="
                      glass
                      glass-hover
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                    "
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-sm text-white/60">
                Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-[#B68D40]
                "
              />
            </div>

            <div>
              <label className="mb-3 block text-sm text-white/60">
                Email
              </label>

              <input
                type="email"
                placeholder="john@email.com"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-[#B68D40]
                "
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-3 block text-sm text-white/60">
              Subject
            </label>

            <input
              type="text"
              placeholder="Project Discussion"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                outline-none
                transition
                focus:border-[#B68D40]
              "
            />
          </div>

          <div className="mt-6">
            <label className="mb-3 block text-sm text-white/60">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              className="
                w-full
                resize-none
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-4
                outline-none
                transition
                focus:border-[#B68D40]
              "
            />
          </div>

          <button
            type="submit"
            className="
              btn-primary
              mt-8
              inline-flex
              w-full
              justify-center
              items-center
            "
          >
            Send Message

            <ArrowUpRight
              size={18}
              className="ml-2"
            />
          </button>
        </motion.form>
      </div>
    </section>
  );
}