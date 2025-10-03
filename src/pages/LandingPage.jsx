import Features from "../components/Features.jsx";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Newsletter from "../components/Newsletter.jsx";
import ProductHighlights from "../components/ProductHighlights.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Footer from  "../components/Footer.jsx";
import Stats from "../components/Stats.jsx";

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Stats />
        <ProductHighlights />
        <Testimonials />
        <Newsletter />
    </div>
  )
}

export default LandingPage;