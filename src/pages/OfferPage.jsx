import Navbar from '../sections/Navbar.jsx';
import Offer from '../sections/Offer.jsx';
import WhoItsFor from '../sections/WhoItsFor.jsx';
import System from '../sections/System.jsx';
import Faq from '../sections/Faq.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import Footer from '../sections/Footer.jsx';
import StickyMobileCta from '../components/StickyMobileCta.jsx';
import { site } from '../site.config.js';

export default function OfferPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-4 pt-36 sm:pt-44">
          <p className="mb-8 inline-block border-t-2 border-ink pt-3 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
            The offer, in full
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl">
            {site.offerName}: everything it is, <em className="text-accent">nothing it isn’t.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-[1.65] sm:text-xl">
            The short version is on the home page. This is the long one.
          </p>
        </section>
        <Offer
          heading={
            <>
              What’s inside — <em className="text-accent">and how it works.</em>
            </>
          }
        />
        <WhoItsFor />
        <System />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
