"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI SQL Analytics Assistant",
    description:
      "Built a natural language to SQL analytics assistant using OpenAI APIs that converts user queries into optimized SQL queries and generates interactive charts. Designed a full-stack architecture with Next.js frontend and Node.js backend for seamless query processing.",
    highlights: [
      "Converted natural language queries into SQL using OpenAI APIs",
      "Integrated dynamic chart generation for analytics visualization",
      "Built scalable backend APIs for query parsing and execution",
      "Improved data accessibility for non-technical users"
    ],
    tech: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
    github: "https://github.com/doberoi21/ai-sql-assistant",
    demo: ""
  },

  {
    title: "React Native Stallion",
    description:
      "Developed and optimized a React Native based company website focused on performance improvements and user experience. Implemented modern UI components and optimized rendering for faster load times.",
    highlights: [
      "Improved website performance and page load time by 35%",
      "Developed responsive UI components",
      "Optimized rendering and component reusability",
      "Improved overall user experience"
    ],
    tech: ["React", "Next.js", "JavaScript"],
    github: "https://stalliontech.io/",
    demo: ""
  },

  {
    title: "Movie Recommendation System",
    description:
      "Developed a machine learning based movie recommendation system using the TMDB dataset. Built similarity-based recommendation algorithms and interactive UI for exploring recommendations.",
    highlights: [
      "Implemented content-based recommendation algorithm",
      "Processed large TMDB dataset using Pandas",
      "Integrated TMDB API for movie metadata",
      "Built interactive UI using Streamlit"
    ],
    tech: ["Python", "Pandas", "Streamlit", "Machine Learning"],
    github: "https://github.com/doberoi21/movie-recommender-app",
    demo: ""
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </section>
  );
}