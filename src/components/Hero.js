"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 md:pt-24 px-6">
      {/* HERO GRADIENT */}
      {/* <div className="absolute inset-0 -z-10">

        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full left-[-150px] top-[-100px]" />

        <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full right-[-150px] top-[50px]" />

        <div className="absolute w-[400px] h-[400px] bg-violet-500/10 blur-[120px] rounded-full left-[30%] bottom-[-150px]" />

      </div> */}

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}

        <div>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Divyanshi Oberoi
          </h1>

          {/* TYPING TITLE */}

          <div className="mt-6 text-xl text-gray-700 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                "Full Stack Software Engineer",
                2000,
                "React • Node.js • AI",
                2000,
                "Building scalable web applications",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* DESCRIPTION */}

          <p className="mx-auto md:mx-0 mt-5 max-w-xl text-base sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            <p>A Software Developer based in United States 🇺🇸</p>
            <br />
            <p className="text-lg md:text-xl  w-full mb-8 leading-relaxed">
              I build scalable applications and AI-driven solutions. With a
              proven track record in full-stack development, I focus on
              delivering high-performance, seamless user experiences and robust
              system architectures.
            </p>
            <p
              className="text-lg md:text-xl font-semibold  w-full mb-16"
              style={{ marginTop: "2%" }}
            >
              Currently looking for opportunities in <br/>
              <span className="text-[#c67888]">Fullstack Development</span> ,{" "}
              <span className="text-[#c67888]">Database Engineering</span> , and{" "}
              <span className="text-[#c67888]">SDET</span>
            </p>
          </p>

          {/* BUTTONS */}

          <div className="flex items-center gap-6 mt-8">
            <a
              href="https://github.com/doberoi21"
              target="_blank"
              className="text-2xl hover:text-purple-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/divyanshi-oberoi"
              target="_blank"
              className="text-2xl hover:text-purple-500 transition"
            >
              <FaLinkedin />
            </a>

            {/* RESUME BUTTON */}

            <a
              href="https://drive.google.com/file/d/13IqJaD45utKQsseQSVientn3YhCtc50A/view?usp=sharing"
              target="_blank"
              className="
              px-5 py-2 rounded-lg
              bg-gray-900 text-white
              dark:bg-white dark:text-black
              hover:opacity-90
              transition
              "
            >
              View Resume
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE */}

        <div className="relative flex justify-center md:justify-end">
          <div
            className="absolute w-[280px] h-[280px] rounded-full
  bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
  blur-3xl opacity-30 animate-pulse"
          />

          <Image
            src="/profile.png"
            width={310}
            height={300}
            alt="Divyanshi Oberoi"
            className="relative rounded-full border border-white/10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
