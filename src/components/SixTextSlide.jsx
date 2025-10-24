import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function SixTextSlide() {
  const text = useRef();

  useGSAP(() => {
    gsap.to(text.current, {
      translate: "-160%",
      scrollTrigger: {
        trigger: "#page2", //when pin is used always trigger should be the parent ele
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        markers: true,
        pin: true,
      },
    });
  });

  return (
    <div>
      <div id="page1" className="h-screen w-full bg-zinc-800"></div>
      <div
        id="page2"
        className="h-screen content bg-zinc-900 text-[40vw] uppercase ">
        <h1 ref={text} className="pr-50">
          Experiences
        </h1>
      </div>
      <div id="page3" className="h-screen w-full bg-zinc-700"></div>
    </div>
  );
}

export default SixTextSlide;
