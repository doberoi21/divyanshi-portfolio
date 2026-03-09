import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">

      <Navbar />

      <Hero />

      <Projects />

    </main>
  );
}