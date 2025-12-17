import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";
import About from "./About";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";
import NotFound from "./NotFound";

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
