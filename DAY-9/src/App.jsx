import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";  
function App() {
  return (
  <BrowserRouter>
  <nav> 
     <link to ="/home"></link>
     <link to ="/dashboard"></link>

  </nav>


  </BrowerRouter>
  );
}
export default App;