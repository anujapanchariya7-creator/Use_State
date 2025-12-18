import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import Login from "./login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
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
  );
}

export default App;
