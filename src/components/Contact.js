"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 max-w-5xl mx-auto px-6 text-center"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
        <div className="w-[500px] h-[500px] bg-purple-400 rounded-full absolute left-[-200px] top-[-200px]" />
        <div className="w-[500px] h-[500px] bg-indigo-400 rounded-full absolute right-[-200px] bottom-[-200px]" />
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold mb-4">Let’s connect</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-14 max-w-xl mx-auto">
        Open to <strong>Software Engineering</strong>,{" "}
        <strong>Full-Stack</strong>, and <strong>AI/ML</strong> roles. Let’s
        build something meaningful together.
      </p>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email */}
        <a
          href="mailto:doberoi.work@gmail.com"
          className="
  flex items-center justify-center gap-3
  p-6
  rounded-xl
  bg-white/5
  border border-white/10
  shadow-sm
  hover:shadow-xl hover:-translate-y-1
  transition
  "
        >
          <FaEnvelope className="text-xl text-indigo-400" />
          <span className="font-medium">doberoi.work@gmail.com</span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/divyanshi-oberoi"
          target="_blank"
          rel="noopener noreferrer"
          className="
flex items-center justify-center gap-4
p-6
rounded-xl
bg-white/5
border border-white/10
backdrop-blur-md
shadow-sm
hover:shadow-xl hover:-translate-y-1
transition
"
        >
          <FaLinkedin className="text-xl text-blue-500" />
          <span className="font-medium">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/doberoi21"
          target="_blank"
          rel="noopener noreferrer"
          className="
flex items-center justify-center gap-4
p-6
rounded-xl
bg-white/5
border border-white/10
backdrop-blur-md
shadow-sm
hover:shadow-xl hover:-translate-y-1
transition
"
        >
          <FaGithub className="text-xl" />
          <span className="font-medium">GitHub</span>
        </a>
      </div>
    </section>
  );
}
