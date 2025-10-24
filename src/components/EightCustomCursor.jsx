import gsap from "gsap";
import { useEffect, useRef } from "react";

function EightCustomCursor({ mainRef }) {
  const cursorRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;
    const main = mainRef.current;

    // Center the cursor div on the pointer
    gsap.set(cursor, { xPercent: -50, yPercent: -40 });

    const handleMouseMove = (event) => {
      //   console.log(event.x, event.y);
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    if (main) main.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (main) main.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mainRef]);

  return (
    <div
      ref={cursorRef}
      className="size-[20px] rounded-full bg-emerald-300 fixed top-0 left-0 pointer-events-none"></div>
    //this will always be below cursor so when clicked we click this cursor
    //so we use pointer-events-none to click through
  );
}

export default EightCustomCursor;
