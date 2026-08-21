import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import ProofBar from './sections/ProofBar.jsx';
import Problem from './sections/Problem.jsx';
import Offer from './sections/Offer.jsx';
import System from './sections/System.jsx';
import About from './sections/About.jsx';
import Testimonials from './sections/Testimonials.jsx';
import FinalCta from './sections/FinalCta.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Problem />
        <Offer />
        <System />
        <About />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
