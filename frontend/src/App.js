import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skill from "./components/skills/skills";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
