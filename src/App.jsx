import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Target from './components/Target';
import Projects from './components/Projects';
import Ferrari from './components/Ferrari';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Target />
        <Projects />
        <Ferrari />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
