export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16 py-6 text-center text-sm text-gray-400">
      
      <p className="mb-2">
        © {new Date().getFullYear()} Divyanshi Oberoi
      </p>

      <div className="flex justify-center gap-6 text-sm">
        <a
          href="https://linkedin.com/in/divyanshi-oberoi"
          target="_blank"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/doberoi21"
          target="_blank"
          className="hover:text-white transition"
        >
          GitHub
        </a>
      </div>

    </footer>
  );
}