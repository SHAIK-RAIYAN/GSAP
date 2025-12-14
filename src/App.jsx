import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import CircleAnimate from "./components/CircleAnimate";
import EightCustomCursor from "./components/EightCustomCursor";
import ElevenSideBar from "./components/ElevenSideBar";
import FiveScrollTrigger from "./components/FiveScrollTrigger";
import FourNavBar from "./components/FourNavBar";
import NineCursorChange from "./components/NineCursorChange";
import SevenString from "./components/SevenString";
import SixTextSlide from "./components/SixTextSlide";
import TenMaskCursor from "./components/TenMaskCursor";
import ThirteenScrollingText from "./components/ThirteenScrollingText";
import ThreeYo_yo from "./components/ThreeYo_yo";
import TwelveTextAppear from "./components/TwelveTextAppear";
import TwoboxesAnimate from "./components/TwoboxesAnimate";
import HomePage from "./pages/HomePage";

function App() {
  const mainRef = useRef();

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return (
    <main ref={mainRef} className="min-h-screen text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/two-boxes" element={<TwoboxesAnimate />} />
        <Route path="/circle-animate" element={<CircleAnimate />} />
        <Route path="/yoyo" element={<ThreeYo_yo />} />
        <Route path="/nav-bar" element={<FourNavBar />} />
        <Route path="/scroll-trigger" element={<FiveScrollTrigger />} />
        <Route path="/text-slide" element={<SixTextSlide />} />
        <Route path="/string" element={<SevenString />} />
        <Route
          path="/custom-cursor"
          element={<EightCustomCursor mainRef={mainRef} />}
        />
        <Route
          path="/cursor-change"
          element={<NineCursorChange mainRef={mainRef} />}
        />
        <Route
          path="/mask-cursor"
          element={<TenMaskCursor mainRef={mainRef} />}
        />
        <Route path="/side-bar" element={<ElevenSideBar />} />
        <Route path="/text-appear" element={<TwelveTextAppear />} />
        <Route path="/scrolling-text" element={<ThirteenScrollingText />} />
      </Routes>
    </main>
  );
}

export default App;
