"use client";

import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Introduction to Mobile Development",
    org: "Meta · Coursera",
    logo: "/logos/meta.png",
    link: "#",
  },
  {
    title: "Introduction to Data Analytics",
    org: "IBM Skills Network · Coursera",
    logo: "/logos/ibm.png",
    link: "#",
  },
  {
    title: "Introduction to Data Analytics",
    org: "Simplilearn SkillUp",
    logo: "/logos/simplilearn.png",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-16">
          Certifications
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border
              border-gray-200 dark:border-white/10
              bg-white/60 dark:bg-white/5
              backdrop-blur
              transition
              hover:shadow-2xl
              hover:-translate-y-1
              duration-300"
            >

              {/* Top Row */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-3xl">🏆</span>

                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.org}
                    className="h-7 opacity-80"
                  />
                )}

              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                {cert.title}
              </h3>

              {/* Organization */}
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
                {cert.org}
              </p>

              {/* View certificate */}
              <a
                href={cert.link}
                target="_blank"
                className="inline-flex items-center gap-2
                text-blue-500 font-medium
                hover:text-blue-600"
              >
                View Certificate
                <FaExternalLinkAlt size={12} />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}