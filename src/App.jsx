import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function App() {
  return (
    <>
      <main>
        <Hero>
          <Navigation />
        </Hero>
        <Certifications />
        <HowItWorks />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
