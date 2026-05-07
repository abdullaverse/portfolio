import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 relative">
      <ParticleBackground />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
