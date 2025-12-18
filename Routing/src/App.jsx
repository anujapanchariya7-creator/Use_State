import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
