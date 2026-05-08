import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
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
      <Problem />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
