function App() {
  return (
    <div className="bg-sky-200 min-h-screen w-screen text-gray-800">

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-sky-500 px-8 py-4 text-white flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-mono tracking-tight">
          MyWebpage
        </h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:text-yellow-300 transition">Blog</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main>

        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-sky-300">
          <h2 className="mb-4 text-3xl font-bold text-red-500">
            Welcome to Our Website
          </h2>
          <p className="max-w-xl mx-auto text-gray-700 text-lg">
            This is the hero section where you highlight your product, service, or idea in one clear statement.
          </p>
        </section>

        {/* Features Section */}
        <section className="text-center py-16 px-6 bg-sky-200">
          <h2 className="mb-10 text-2xl font-semibold">
            Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
                >
                  <h3 className="text-lg font-semibold mb-2 text-sky-600">
                    {feature}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Short description of {feature.toLowerCase()} goes here.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-sky-500 text-white text-sm">
        &copy; 2025 MyWebpage. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
