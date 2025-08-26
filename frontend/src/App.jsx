import { useEffect } from "react";
import Navbar from "./components/Navbar";
import useTheme from "./store";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
