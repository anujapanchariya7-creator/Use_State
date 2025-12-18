import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectRoute from "./ProtectRoute";
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path = "/login" element={<Login/>} />
    {/* Protected Route */}
    <ProtectRoute>
    <Route path="/dashboard" element={<Dashboard/>} />
    </ProtectRoute>

  </Routes>


  </BrowserRouter>
  );
}
export default App;