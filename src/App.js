import Home from "./pages/Home";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Galerie" element={<Galerie />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
