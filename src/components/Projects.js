"use client";

import ProjectCard from "./ProjectCard";

const projects = [
    {
    title: "Restaurant Inventory Predictor ",
    description:
      "An AI-powered SaaS platform that predicts ingredient demand for restaurants using ML trained on historical sales, weather, local events, and seasonal patterns reducing food waste and stockouts.",
    highlights: [
      "Built an AI-powered SaaS platform predicting ingredient demand for restaurants using ML models trained on historical sales, weather, and seasonal patterns.",
      "Engineered a Node.js/Express backend on AWS Lambda + API Gateway with DynamoDB for inventory storage, handling real-time prediction requests.",
      "Built React 18 frontend with TailwindCSS, Recharts, and React Query, displaying live demand forecasts and inventory dashboards.",
      "Trained and deployed XGBoost and scikit-learn models on AWS SageMaker, integrating weather and local event APIs as input features to improve accuracy."
    ],
    tech: ["React 18, TailwindCSS, Recharts, React Query", "Node.js, Express, AWS Lambda", "DynamoDB (inventory), S3 (ML data)", "Python, scikit-learn, XGBoost, AWS SageMaker"],
    link: "https://github.com/doberoi21/restaurant-inventory-predictor"
  },
   {
    title: "Spotify ELT Pipeline",
    description:
      "End to end ELT pipeline built with Apache Airflow, dbt, and Snowflake, ingesting real Spotify Global Top 50 data and transforming it into analytics ready models.",
    highlights: [
      "Built an end-to-end ELT pipeline ingesting Spotify Global Top 50 data weekly using Apache Airflow for orchestration, with automated retries and dependency management.",
      "Designed a Snowflake data warehouse with RAW, STAGING, and MARTS schemas; built dbt transformation models including fact and dimension tables for weekly chart analytics.",
      "Wrote Python extract and load scripts consuming the Spotify Web API, pulling real-time track, artist, and audio feature data into the pipeline.",
      "Enforced data quality across all dbt models with not_null, unique, accepted_values, and referential integrity tests; containerized the local Airflow environment with Docker."
    ],
    tech: ["Spotify Web API", "Apache Airflow", "Snowflake", "dbt","Docker","Python"],
    link: "https://github.com/doberoi21/spotify_elt"
  },
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