import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import Home from "./Home";
import Login from "./login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
