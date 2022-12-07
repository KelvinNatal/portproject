import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer  from './components/Footer';

import './App.css';
import Projects from './components/Project/Projects';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
