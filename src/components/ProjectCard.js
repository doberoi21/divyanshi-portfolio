"use client";

export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div
        className="
        p-6 rounded-xl border border-gray-200 dark:border-white/10
        bg-white/50 dark:bg-white/5 backdrop-blur
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-purple-500/20
      "
      >
        <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-500 transition">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.description}
        </p>

        <ul className="list-disc ml-5 text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              text-xs px-2 py-1 rounded
              bg-purple-100 text-purple-700
              dark:bg-purple-500/10 dark:text-purple-300
            "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}