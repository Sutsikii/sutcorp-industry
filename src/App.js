import Home from "./pages/Home";
import Error from "./pages/Error";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
