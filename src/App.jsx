import "./App.css";
import Navbar from "./my_components/Navbar";
import About from "./my_components/About";
import Skills from "./my_components/Skills";
import Projects from "./my_components/Projects";
import Contact from "./my_components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
