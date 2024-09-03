import { useRef } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  const scrollingRef = useRef();

  return (
    <div>
      <Navbar />
      <Hero scrollingRef={scrollingRef} />
      <Quote scrollingRef={scrollingRef} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
