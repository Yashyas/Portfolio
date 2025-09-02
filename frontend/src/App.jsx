import { useEffect } from "react";
import Navbar from "./components/Navbar";
import useTheme from "./store";
import Card from "./components/Card";
import ContentCard from "./components/ContentCard";
import ProjectAccordian from "./components/ProjectAccordian";
import SocialCard from "./components/SocialCard";
import Footer from "./components/Footer";
import FrontendCards from "./components/FrontendCards";
import BackendCards from "./components/BackendCards";

function App() {
  const { theme} = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around items-center p-4 gap-6">
              {/* left side */}
              <div className="flex flex-2/3 flex-col justify-around items-center flex-wrap gap-4">
                <div className="mt-4 w-full"><Card/></div>
                <div className="flex flex-col w-full sm:flex-row justify-around items-center flex-wrap gap-4">
                  <div className="flex-1"><ContentCard/></div>
                  <div className="flex-1"><ContentCard/></div>
                </div>
              </div>
              {/* right side  */}
              <div className="flex flex-1/3 flex-col justify-between items-center flex-wrap gap-4">
                <div className="w-full"><ProjectAccordian/></div>
                <div className="w-full ">
                  <SocialCard/>
                </div>
              </div>
      </div>
      <FrontendCards/>
      <BackendCards/>
      
      <Footer/>
    </>
  );
}

export default App;
