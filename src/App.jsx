import Nav from './components/Nav';
import Hero from './components/Hero';
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
    <div style={{ minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <Plan />
      <Features />
      <Authority />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
