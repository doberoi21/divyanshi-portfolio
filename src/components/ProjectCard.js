"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
p-6 rounded-xl border border-gray-200 dark:border-white/10
bg-white/50 dark:bg-white/5 backdrop-blur
transition-all duration-300
hover:-translate-y-1
hover:shadow-xl
hover:shadow-purple-500/20
"
    >
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
            text-sm px-3 py-1 rounded
            bg-gray-100 dark:bg-neutral-800
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-indigo-500">
        <a href={project.github}>GitHub</a>
        {project.demo && <a href={project.demo}>Live</a>}
      </div>
    </motion.div>
  );
}
