import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectRoute";
import Home from "./Home";
import Login from "./login";
import Dashboard from "./Dashboard";
import {Link} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
  <nav>

  </nav>
    
    </BrowserRouter>





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
