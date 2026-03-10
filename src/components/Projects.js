"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI SQL Analytics Assistant",
    description:
      "Built a natural language to SQL analytics assistant using OpenAI APIs that converts user queries into optimized SQL queries and generates interactive charts.",
    highlights: [
      "Converted natural language queries into SQL using OpenAI APIs",
      "Integrated dynamic chart generation for analytics visualization",
      "Built scalable backend APIs for query parsing and execution",
      "Improved data accessibility for non-technical users"
    ],
    tech: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    link: "https://github.com/doberoi21/ai-sql-assistant"
  },

  {
    title: "React Native Stallion",
    description:
      "Optimized a React-based company website focused on performance improvements and modern UI architecture.",
    highlights: [
      "Improved website performance and page load time by 35%",
      "Developed responsive UI components",
      "Optimized rendering and component reusability",
      "Improved overall user experience"
    ],
    tech: ["React", "Next.js", "JavaScript"],
    link: "https://stalliontech.io/"
  },

  {
    title: "Movie Recommendation System",
    description:
      "Developed a machine learning movie recommendation system using the TMDB dataset with similarity-based recommendations.",
    highlights: [
      "Implemented content-based recommendation algorithm",
      "Processed TMDB dataset using Pandas",
      "Integrated TMDB API for movie metadata",
      "Built interactive UI using Streamlit"
    ],
    tech: ["Python", "Pandas", "Streamlit", "Machine Learning"],
    link: "https://github.com/doberoi21/movie-recommender-app"
  },
  // {

  // }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}