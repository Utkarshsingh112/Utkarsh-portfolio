import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="space-y-24">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home; 