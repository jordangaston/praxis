import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Plan from './components/Plan';
import Features from './components/Features';
import Authority from './components/Authority';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: 0 }}>
      <Nav />
      <Hero />
      {/* Each section is wrapped as a floating white card on the gradient */}
      <div style={{ paddingTop: 24 }}>
        <Problem />
        <Plan />
        <Features />
        <Authority />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
