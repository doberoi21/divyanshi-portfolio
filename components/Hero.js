export default function Hero() {
  return (
    <section className="text-center py-32">

      <h1 className="text-5xl font-bold">
        Hi, I'm Divyanshi
      </h1>

      <p className="mt-6 text-lg max-w-xl mx-auto">
        Full Stack Software Engineer building scalable web applications
        using React, TypeScript, Node.js and Cloud technologies.
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-lg dark:bg-white dark:text-black"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          className="px-6 py-3 border rounded-lg"
        >
          Resume
        </a>
      </div>
    </section>
  );
}