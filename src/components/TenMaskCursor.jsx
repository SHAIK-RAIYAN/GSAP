import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function TenMaskCursor({ mainRef }) {
  const maskRef = useRef();
  const [hover, setHover] = useState(false);
  const size = hover ? 400 : 40;

  useEffect(() => {
    const mask = maskRef.current;
    const main = mainRef.current;

    const handleMouseMove = (event) => {
      gsap.to(mask, {
        webkitMaskPosition: `${event.clientX - size / 2}px ${
          event.clientY - size / 2
        }px`,
        // size/2 ??? --> to center mask on cursor
        webkitMaskSize: `${size}px`,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    main.addEventListener("mousemove", handleMouseMove);

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mainRef, size]);

  return (
    <div className="h-dvh">
      <div
        ref={maskRef}
        id="mask"
        className="h-full w-full flex justify-center items-center  text-4xl leading-normal cursor-default absolute mask-[url(/mask.svg)] bg-[#f1432c] mask-no-repeat text-black ">
        <p
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="w-[70%]">
          I don’t chase trends; I chase understanding. Curiosity drives me to
          break limits, master complexity, and build solutions that genuinely
          move things forward.
        </p>
      </div>
      <div
        id="body"
        className="h-full w-full flex justify-center items-center text-amber-100 text-4xl leading-normal cursor-default">
        <p className="w-[70%]">
          I don’t follow paths;{" "}
          <span className="text-[#f1432c]">I create them.</span> Logic drives me
          to dissect problems, craft innovation, and engineer ideas that truly
          make an impact.
        </p>
      </div>
    </div>
  );
}

export default TenMaskCursor;
