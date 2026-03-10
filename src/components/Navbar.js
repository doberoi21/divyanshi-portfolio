"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
${
  scrolled
    ? "backdrop-blur bg-white/80 dark:bg-black/70 border-b border-gray-200/50 shadow-sm"
    : "bg-transparent"
}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          className="text-base font-semibold tracking-tight text-gray-900 dark:text-white"
          onClick={() => setOpen(false)}
        >
          DO
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-[16px] font-medium text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition hover:text-purple-500 ${
                active === link.href.replace("#", "")
                  ? "text-purple-500 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          {open ? (
            <HiX className="text-[26px]" />
          ) : (
            <HiMenu className="text-[26px]" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-200 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 text-sm font-medium text-gray-800 dark:text-gray-200">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-purple-500"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
