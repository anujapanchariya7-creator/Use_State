import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./login.jsx";
import Dashboard from "./Dashboard.jsx";
import ProtectRoute from "./ProtectRoute.jsx";
function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path = "/login" element={<Login/>} />
    {/* Protected Route */}
        <Route path="/dashboard" element={

    <ProtectRoute>
      <Dashboard/>
    </ProtectRoute>
        } />

  </Routes>


  </BrowserRouter>
  );
}
export default App;