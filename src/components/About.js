import Container from "./Container";

export default function About() {

  return (
    <section id="about" className="py-24">

      <Container>

        <h2 className="text-3xl font-semibold mb-10">
          About
        </h2>

        <div className="max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed">

          <p>

            I am a Full Stack Software Engineer with experience
            building scalable web applications and data-driven
            platforms.

          </p>

          <p className="mt-4">

            My work focuses on building efficient systems,
            improving developer workflows, and creating
            intuitive user experiences.

          </p>

          <p className="mt-4">

            I enjoy working across the stack and exploring
            machine learning and AI applications.

          </p>

        </div>

      </Container>

    </section>
  );
}