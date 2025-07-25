import "./App.css";
import Navbar from "./my_components/Navbar";
import About from "./my_components/About";
import Skills from "./my_components/Skills";
import Projects from "./my_components/Projects";
import Contact from "./my_components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
