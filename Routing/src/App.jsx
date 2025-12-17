import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/asd" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    
    </BrowserRouter>
  )

}
export default App;