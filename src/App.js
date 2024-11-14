import Header from './components/Header';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <About />
       <Skills />
       <Expertise />
       <Projects />
       <ContactMe />
       <Footer />
    </div>
  );
}

export default App;
