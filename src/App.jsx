import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Technology from "./sections/Technology";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";
import ScrollToHash from "./components/ScrollToHash"; 

const Home = () => (
  <>
    <Hero />
    <Showcase />
    <Technology />
    <Contact />
  </>
);

const App = () => (
  <>
    <Navbar />
    <ScrollToHash /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
    <Footer />
  </>
);

export default App;
