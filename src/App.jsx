import { useRef } from "react";
import CircleAnimate from "./components/CircleAnimate";
import EightCustomCursor from "./components/EightCustomCursor";
import FiveScrollTrigger from "./components/FiveScrollTrigger";
import FourNavBar from "./components/FourNavBar";
import SevenString from "./components/SevenString";
import SixTextSlide from "./components/SixTextSlide";
import Three from "./components/Three";
import TwoboxesAnimate from "./components/TwoboxesAnimate";
import NineCursorChange from "./components/NineCursorChange";
import TenMaskCursor from "./components/TenMaskCursor";
import ElevenSideBar from "./components/ElevenSideBar";
import TwelveTextAppear from "./components/TwelveTextAppear";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const mainRef = useRef();

  return (
    <main ref={mainRef} className=" bg-[#111] text-white min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/two-boxes" element={<TwoboxesAnimate />} />
        <Route path="/circle-animate" element={<CircleAnimate />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four-nav-bar" element={<FourNavBar />} />
        <Route path="/five-scroll-trigger" element={<FiveScrollTrigger />} />
        <Route path="/six-text-slide" element={<SixTextSlide />} />
        <Route path="/seven-string" element={<SevenString />} />
        <Route
          path="/eight-custom-cursor"
          element={<EightCustomCursor mainRef={mainRef} />}
        />
        <Route
          path="/nine-cursor-change"
          element={<NineCursorChange mainRef={mainRef} />}
        />
        <Route
          path="/ten-mask-cursor"
          element={<TenMaskCursor mainRef={mainRef} />}
        />
        <Route path="/eleven-side-bar" element={<ElevenSideBar />} />
        <Route path="/twelve-text-appear" element={<TwelveTextAppear />} />
      </Routes>
    </main>
  );
}

export default App;
