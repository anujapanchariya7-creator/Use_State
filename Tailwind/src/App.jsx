function App() {
  return (
    <div className="bg-sky-300 min-h-screen w-screen">
      
      {/* Navbar */}
      <div className="bg-sky-400 px-6 py-4 text-white flex justify-between">
        <h1 className="text-2xl font-mono tracking-tight">
          My webpage
        </h1>

        <nav className="flex gap-5">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      {/* Main Content */}
      <div>
        
        {/* Hero Section */}
        <section className="text-center py-10">
          <h2 className="mb-4 text-xl font-semibold text-red-500">
            Welcome to website
          </h2>
          <p>This is hero section</p>
        </section>

        {/* Features Section */}
        <section className="text-center py-10">
          <h2 className="mb-6 text-xl font-semibold">
            Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-6">
            <div className="bg-sky-600 p-4 rounded text-white">Feature 1</div>
            <div className="bg-sky-600 p-4 rounded text-white">Feature 2</div>
            <div className="bg-sky-600 p-4 rounded text-white">Feature 3</div>
            <div className="bg-sky-600 p-4 rounded text-white">Feature 4</div>
            <div className="bg-sky-600 p-4 rounded text-white">Feature 5</div>
            <div className="bg-sky-600 p-4 rounded text-white">Feature 6</div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="text-center py-4 bg-sky-400 text-white">
        Footer
      </div>

    </div>
  );
}

export default App;