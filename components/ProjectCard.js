export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-lg transition">

      <img
        src={project.image}
        className="rounded-lg mb-4"
      />

      <h3 className="text-xl font-bold">
        {project.title}
      </h3>

      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-sm px-2 py-1 border rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <a href={project.github}>GitHub</a>
        <a href={project.demo}>Live</a>
      </div>

    </div>
  );
}