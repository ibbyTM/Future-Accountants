import PageGrain from '../components/PageGrain.jsx';
import Navbar from '../sections/Navbar.jsx';
import Hero from '../sections/Hero.jsx';
import ProofBar from '../sections/ProofBar.jsx';
import Problem from '../sections/Problem.jsx';
import OperatingSystem from '../sections/OperatingSystem.jsx';
import Offer from '../sections/Offer.jsx';
import Guarantee from '../sections/Guarantee.jsx';
import WhoItsFor from '../sections/WhoItsFor.jsx';
import System from '../sections/System.jsx';
import About from '../sections/About.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import Faq from '../sections/Faq.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';

export default function Home() {
  return (
    <>
      <PageGrain />
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Problem />
        <OperatingSystem />
        <Offer />
        <Guarantee />
        <WhoItsFor />
        <System />
        <About />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
