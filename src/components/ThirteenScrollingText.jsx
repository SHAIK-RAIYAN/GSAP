import gsap from "gsap";
import { useEffect, useRef } from "react";

function ThirteenScrollingText() {
  const marqueeContainerRef = useRef();

  useEffect(() => {
    const marquee = marqueeContainerRef.current.children;

    const marqueeTween = gsap
      .to(marquee, {
        xPercent: -100,
        repeat: -1,
        duration: 2,
        ease: "none",
      })
      .totalProgress(0.5)
      .timeScale(0);

    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        gsap.to(marqueeTween, { timeScale: -0.2, duration: 0.5 });
        gsap.to(".img", {
          rotate: 0,
        });
      } else {
        gsap.to(marqueeTween, { timeScale: 0.2, duration: 0.5 });
        gsap.to(".img", {
          rotate: 180,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      marqueeTween.kill(); // prevents memory leak
    };
  }, []);

  const MarqueePart = () => (
    <div className="flex shrink-0 items-center gap-5 pr-5">
      <div className="flex shrink-0 items-center gap-5">
        <h1 className="text-5xl font-medium">THRIVE BEYOND LIMITS</h1>
        <img src="/arrow-br.svg" alt="arrow" className="img h-10" />
      </div>
      <div className="flex shrink-0 items-center gap-5">
        <h1 className="text-5xl font-medium">THRIVE BEYOND LIMITS</h1>
        <img src="/arrow-br.svg" alt="arrow" className="img h-10" />
      </div>
      <div className="flex shrink-0 items-center gap-5">
        <h1 className="text-5xl font-medium">THRIVE BEYOND LIMITS</h1>
        <img src="/arrow-br.svg" alt="arrow" className="img h-10" />
      </div>
      <div className="flex shrink-0 items-center gap-5">
        <h1 className="text-5xl font-medium">THRIVE BEYOND LIMITS</h1>
        <img src="/arrow-br.svg" alt="arrow" className="img h-10" />
      </div>
    </div>
  );

  return (
    <div className="bg-neutral-900">
      <div id="page1" className="min-h-screen"></div>
      <div id="page2" className="min-h-screen overflow-hidden">
        <div
          ref={marqueeContainerRef}
          id="marquee-container"
          className="flex w-max bg-[#d9ff06] px-5 py-7 font-serif text-black"
        >
          <MarqueePart />
          <MarqueePart />
        </div>
      </div>
      <div id="page3" className="min-h-screen"></div>
    </div>
  );
}

export default ThirteenScrollingText;
