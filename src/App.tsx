import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/aboutus';
import Testimonials from './components/testimonial';
import QuoteForm from './components/getQuote';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </>
  );
}

export default App;