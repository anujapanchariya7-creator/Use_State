import { useRef } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useScrollReveal } from "./hooks/useScrollReveal";
import FeatureCard from "./components/FeatureCard";
import {
  FaRocket,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaCogs,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function AppContent() {
  const { darkMode, setDarkMode } = useTheme();
  const sectionsRef = useRef([]);

  useScrollReveal(sectionsRef);

  const features = [
    { title: "Fast Performance", icon: <FaRocket />, desc: "Optimized rendering and minimal reflows." },
    { title: "Clean Code", icon: <FaCode />, desc: "Maintainable and scalable architecture." },
    { title: "Responsive UI", icon: <FaMobileAlt />, desc: "Mobile-first and adaptive layouts." },
    { title: "Cloud Ready", icon: <FaCloud />, desc: "Deployment-ready structure." },
    { title: "Secure", icon: <FaLock />, desc: "Best practices baked in." },
    { title: "Customizable", icon: <FaCogs />, desc: "Easily extendable components." },
  ];

  return (
    <div className="min-h-screen bg-sky-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-sky-500 dark:bg-gray-800 px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-mono text-white">MyWebpage</h1>

        <button
          onClick={() => setDarkMode(d => !d)}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* Hero */}
      <section
        ref={el => (sectionsRef.current[0] = el)}
        className="opacity-0 translate-y-10 transition-all duration-700 text-center py-24 px-4"
      >
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          Modern React UI
        </h2>
        <p className="max-w-xl mx-auto text-lg">
          Engineered for performance, accessibility, and scalability.
        </p>
      </section>

      {/* Features */}
      <section
        ref={el => (sectionsRef.current[1] = el)}
        className="opacity-0 translate-y-10 transition-all duration-700 py-20 px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.desc}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
