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

function App() {
  const mainRef = useRef();

  return (
    <main ref={mainRef} className=" bg-[#111] text-white h-screen">
      {/* <TwoboxesAnimate /> */}
      {/* <CircleAnimate /> */}
      {/* <Three/> */}
      {/* <FourNavBar /> */}
      {/* <FiveScrollTrigger /> */}
      {/* <SixTextSlide /> */}
      {/* <SevenString /> */}
      {/* <EightCustomCursor mainRef={mainRef} /> */}
      {/* <NineCursorChange mainRef={mainRef} /> */}
      {/* <TenMaskCursor mainRef={mainRef} /> */}
      {/* <ElevenSideBar /> */}
      <TwelveTextAppear />
    </main>
  );
}

export default App;
