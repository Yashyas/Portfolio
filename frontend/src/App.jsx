import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import useTheme from "./store";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";


function App() {
  const { theme} = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/project" element={<Project/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
