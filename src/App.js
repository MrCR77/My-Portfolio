import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
