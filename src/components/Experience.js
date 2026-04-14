export default function Experience() {

  const experience = [
    {
      role: "Associate Software Engineer",
      company: "Edgio Uplynk",
      location: "Chicago, IL",
      duration: "Jun 2025 – Nov 2025",
      points: [
        "Contributed to design and deployment of 3 Node.js microservices for the Uplynk ad delivery platform on AWS ECS, defining API contracts, data models, and service boundaries, enabling auto-scaling under peak advertiser traffic with zero downtime at launch.",
        "Instrumented the Uplynk service fleet with AWS CloudWatch metrics, structured logging, and alerting pipelines; built real-time ops dashboards that surfaced root cause signals for latency spikes and error rate anomalies, reducing incident detection and resolution time by 40%.",
        "Refactored and modernized the Uplynk React , TypeScript frontend, eliminating unnecessary re-renders, implementing lazy loading, and reducing bundle size, improving page load time by 35% and Core Web Vitals scores across the production dashboard.",
        "Designed Node.js microservices containerized with Docker and orchestrated using Kubernetes.",
        "Built and maintained CI/CD deployment pipelines with GitHub Actions, integrating automated test gates, versioned rollouts, and rollback strategies to ensure operational readiness across 3 microservices, reducing manual release effort by 60%.",
        "Authored unit and integration test suites with Jest and Playwright covering the ad delivery API flows and player UI components, enforcing code quality standards through peer review and catching regressions pre-deploy across 3 browser environments"
      ]
    },

    {
      role: "Associate Software Developer",
      company: "Evolphin Software",
      location: "India",
      duration: "Feb 2023 – May 2024",
      points: [
        "Designed and shipped Node.js REST APIs and TypeScript/React components powering Evolphin's in app contextual help system, collaborating cross-functionally with product and support teams to reduce user support queries by 45%.",
        "Built a secure Adobe Premiere plugin integration using ExtendScript and TypeScript, automating the media ingest pipeline end-to-end, eliminating manual handoffs and improving processing reliability and turnaround time for the video asset team.",
        "Implemented Playwright-based end to end test suites covering critical release flows; partnered with QA to triage and resolve pre-release defects tracked in JIRA, measurably reducing post-release defect rates across quarterly deploys.",
      ]
    },

    {
      role: "Software Developer",
      company: "Collaberus Technologies",
      location: "India",
      duration: "Aug 2022 – Dec 2022",
      points: [
        "Built responsive web applications with React.js and JavaScript for real-time video interactions using WebRTC, delivering smoother playback experiences to thousands of concurrent users.",
        "Developed REST APIs with Node.js and Express.js connecting to PostgreSQL and MongoDB, enabling reliable data exchange and reducing client-side errors.",
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