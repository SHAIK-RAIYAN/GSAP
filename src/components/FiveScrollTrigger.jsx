import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function FiveScrollTrigger() {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();

  useGSAP(() => {
    gsap.fromTo(
      box1.current,
      {
        scale: 0,
        opacity: 0.5,
      },
      { scale: 1, opacity: 1, rotate: 360, duration: 2 }
    );
    gsap.fromTo(
      box2.current,
      {
        scale: 0,
        opacity: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 360,
        duration: 2,
        scrollTrigger: {
          trigger: box2.current,
          scroller: "body",
          markers: true,

          start: "top 70%",
          end: "top 10%",
          scrub: 2, // animation when scrolled
          pin: true,
        },
      }
    );
    gsap.fromTo(
      box3.current,
      {
        opacity: 0.5,
        x: -500,
      },
      {
        scale: 1,
        opacity: 1,
        x: 500,
        delay: 0.5,
        duration: 2,
        scrollTrigger: {
          trigger: box3.current,
          scroller: "body",
          markers: true,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div>
      <div
        id="page1"
        className="h-screen w-screen bg-zinc-500 flex items-center justify-center">
        <div
          ref={box1}
          className="size-50 bg-linear-to-br from-rose-300 to-sky-300"></div>
      </div>
      <div
        id="page3"
        className="h-screen w-screen bg-zinc-900 flex items-center justify-center">
          <p>Scroll Trigger</p>
        <div
          ref={box2}
          className="size-50 text-2xl flex justify-center items-center bg-linear-to-br from-rose-300 to-sky-300"> scrub pin </div>
      </div>
      <div
        id="page2"
        className="h-screen w-screen bg-zinc-700 flex items-center justify-center">
        <div
          ref={box3}
          className="size-50 bg-linear-to-br from-rose-300 to-sky-300"></div>
      </div>
    </div>
  );
}

export default FiveScrollTrigger;
