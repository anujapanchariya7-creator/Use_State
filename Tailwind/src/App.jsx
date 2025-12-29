import { useEffect, useState, useRef } from "react";
import { FaRocket, FaCode, FaMobileAlt, FaCloud, FaLock, FaCogs } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const sectionsRef = useRef([]);

  /* Scroll Animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: "Fast Performance", icon: <FaRocket /> },
    { title: "Clean Code", icon: <FaCode /> },
    { title: "Responsive UI", icon: <FaMobileAlt /> },
    { title: "Cloud Ready", icon: <FaCloud /> },
    { title: "Secure", icon: <FaLock /> },
    { title: "Highly Customizable", icon: <FaCogs /> },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-sky-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition">

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-sky-500 dark:bg-gray-800 px-8 py-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-mono text-white">MyWebpage</h1>

          <div className="flex items-center gap-6">
            <nav className="flex gap-5 text-white text-sm">
              <a className="hover:text-yellow-300">Home</a>
              <a className="hover:text-yellow-300">Blog</a>
              <a className="hover:text-yellow-300">Contact</a>
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded text-xs"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section
          ref={el => (sectionsRef.current[0] = el)}
          className="opacity-0 translate-y-10 transition-all duration-700 text-center py-20 px-4"
        >
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Welcome to Our Website
          </h2>
          <p className="max-w-xl mx-auto text-lg">
            A modern React + Tailwind UI with dark mode and animations.
          </p>
        </section>

        {/* Features Section */}
        <section
          ref={el => (sectionsRef.current[1] = el)}
          className="opacity-0 translate-y-10 transition-all duration-700 py-16 px-6"
        >
          <h2 className="text-center text-2xl font-semibold mb-10">
            Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                <div className="text-sky-500 text-3xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Professional-grade feature description goes here.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 bg-sky-500 dark:bg-gray-800 text-white text-sm">
          &copy; 2025 MyWebpage. All rights reserved.
        </footer>

      </div>
    </div>
  );
}

export default App;
