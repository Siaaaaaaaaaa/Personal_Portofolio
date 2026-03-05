import styles from './App.module.css';
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from './components/hero/hero.jsx';
import {About} from './components/About/about.jsx';
import {Experience} from './components/Experience/Experience.jsx';
import{Projects} from './components/Projects/projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';
function App() {
  
  return (
  
  <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
  );
}

export default App
