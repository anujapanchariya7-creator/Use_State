import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';

function App()
{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    
    </BrowserRouter>
  )

}
export default App;