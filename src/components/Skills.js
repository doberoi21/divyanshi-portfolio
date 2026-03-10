"use client";

const skillData = [
  {
    title: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "HTML5",
      "CSS3",
      "Go",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Spring Boot",
      "Hibernate",
      "Angular",
      "Express.js",
      "Redux",
      "React Context API",
    ],
  },
  {
    title: "Databases & APIs",
    skills: [
      "MongoDB",
      "SQL",
      "NoSQL",
      "REST APIs",
      "Cassandra",
      "AWS DynamoDB",
    ],
  },
  {
    title: "AI & Data",
    skills: [
      "Applied Machine Learning",
      "OpenAI APIs",
      "Data Processing",
      "Analytics",
    ],
  },
  {
    title: "Testing & Automation",
    skills: [
      "Playwright",
      "Selenium",
      "Jest",
      "BrowserStack",
      "UI Automation Testing",
      "SDET",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "Google Cloud Platform",
      "Docker",
      "CI/CD",
      "Snowflake",
      "Firebase",
      "Figma",
      "Jira",
      "DevOps",
      "MySQL",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillData.map((category) => (
          <div
            key={category.title}
            className="
            p-8 rounded-2xl
            bg-white/80 dark:bg-neutral-900/70
            backdrop-blur
            border border-gray-200 dark:border-neutral-800
            shadow-sm hover:shadow-xl
            transition
            "
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">
              {category.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              {category.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
