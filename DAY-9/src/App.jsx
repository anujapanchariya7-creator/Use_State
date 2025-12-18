import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";  
function App() {
  return (
  <BrowserRouter>
  <nav> 
     <link to ="/home"> Home</link>
     <link to ="/dashboard"> Dashboard</link>
  </nav>


  </BrowserRouter>
  );
}
export default App;