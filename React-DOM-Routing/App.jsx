import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import PostDetails from "./src/pages/PostDetails";
import About from "./src/pages/About";
import Login from "./src/pages/Login";
import Dashboard from "./src/pages/Dashboard";
import ProtectedRoute from "./src/components/ProtectedRoute";
import Navbar from "./src/components/Navbar";
import NotFound from "./src/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
