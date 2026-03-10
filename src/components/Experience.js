export default function Experience() {

  const experience = [
    {
      role: "Associate Software Engineer",
      company: "Edgio Uplynk",
      location: "Chicago, IL",
      duration: "Jun 2025 – Nov 2025",
      points: [
        "Architected and optimized React and TypeScript frontend serving 50K+ monthly users, reducing page load times by 35% and improving Core Web Vitals.",
        "Developed backend services using Node.js and Python for system monitoring and operational data processing.",
        "Migrated legacy modules from Python 2 to Python 3, improving runtime stability and maintainability.",
        "Designed Node.js microservices containerized with Docker and orchestrated using Kubernetes.",
        "Implemented CI/CD pipelines automating build, test and deployment workflows, reducing manual release effort by 60%.",
        "Wrote unit and integration tests using Jest and Playwright to improve deployment reliability."
      ]
    },

    {
      role: "Associate Software Developer",
      company: "Evolphin Software",
      location: "India",
      duration: "Feb 2023 – May 2024",
      points: [
        "Developed frontend features using React, Electron.js and TypeScript integrated with Node.js APIs.",
        "Built a dynamic in-app help system that reduced user support queries by 45%.",
        "Created secure Adobe Premiere integrations using TypeScript and ExtendScript.",
        "Collaborated with QA teams using automated testing and Jira tracking to improve release stability."
      ]
    },

    {
      role: "Software Developer",
      company: "Collaberus Technologies",
      location: "India",
      duration: "Aug 2022 – Dec 2022",
      points: [
        "Built responsive web applications using React.js and JavaScript for real-time video interaction.",
        "Improved video playback performance using WebRTC and CSS optimizations.",
        "Developed REST APIs using Node.js and Express.js integrated with PostgreSQL and MongoDB.",
        "Improved data reliability and reduced client-side errors across applications."
      ]
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold mb-12 text-center">
        Work Experience
      </h2>

      <div className="space-y-12">

        {experience.map((job, index) => (

          <div
            key={index}
            className="border-l-4 pl-6 dark:border-gray-700"
          >

            <h3 className="text-xl font-semibold">
              {job.role}
            </h3>

            <p className="text-sm text-gray-450 mb-2">
              {job.company} • {job.location} • {job.duration}
            </p>

            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">

              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}