import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";


export default function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/posts/:id" element={<PostDetails />} />
<Route path="/about" element={<About />} />
<Route path="/login" element={<Login />} />


{/* Protected Route */}
<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>


<Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
);
}


// components/Navbar.jsx
import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav style={{ display: "flex", gap: "20px" }}>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/login">Login</Link>
</nav>
);
}


// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children }) {
const isAuth = localStorage.getItem("isAuth");
return isAuth ? children : <Navigate to="/login" />;
}