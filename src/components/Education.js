"use client";

import { FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 max-w-5xl mx-auto px-6">

      <h2 className="text-3xl font-bold text-center mb-12">
        Education
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* IIT */}
        <div
          className="
          p-6
          rounded-xl
          bg-white/80 dark:bg-neutral-900/70
          border border-gray-200 dark:border-neutral-800
          shadow-sm hover:shadow-lg
          transition
          text-center
          "
        >
          <FaUniversity className="text-3xl mx-auto mb-3 text-indigo-500" />

          <h3 className="text-lg font-semibold">
            Illinois Institute of Technology
          </h3>

          <p className="text-sm text-gray-500 italic mb-1">
            Chicago, USA
          </p>

          <p className="text-sm">
            Master of Computer Science
          </p>

          <p className="text-sm text-gray-500 mt-1">
            2024 – 2026
          </p>
        </div>

        {/* DCE */}
        <div
          className="
          p-6
          rounded-xl
          bg-white/80 dark:bg-neutral-900/70
          border border-gray-200 dark:border-neutral-800
          shadow-sm hover:shadow-lg
          transition
          text-center
          "
        >
          <FaUniversity className="text-3xl mx-auto mb-3 text-indigo-500" />

          <h3 className="text-lg font-semibold">
            Dronacharya College of Engineering
          </h3>

          <p className="text-sm text-gray-500 italic mb-1">
            Gurugram, India
          </p>

          <p className="text-sm">
            B.Tech – Computer Science Engineering
          </p>

          <p className="text-sm text-gray-500 mt-1">
            2019 – 2023
          </p>

          <p className="text-sm text-gray-500">
            CGPA: 8.9
          </p>
        </div>

      </div>

    </section>
  );
}