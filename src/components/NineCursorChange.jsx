import gsap from "gsap";
import { useEffect, useRef } from "react";

function NineCursorChange({ mainRef }) {
  const cursorRef = useRef();
  const imgRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;
    const main = mainRef.current;
    const img = imgRef.current;
    const text = textRef.current;

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

    const handleMouseEnter = () => {
      text.innerText = "view more";
      gsap.to(cursor, {
        scale: 3,
        opacity: 0.75,
        backgroundColor: "white",
      });
      gsap.to(text, {
        scale: 0.3,
      });
    };
    const handleMouseLeave = () => {
      text.innerText = "";
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        backgroundColor: "#6EE7B7",
      });
    };

    if (main) main.addEventListener("mousemove", handleMouseMove);
    if (img) {
      img.addEventListener("mouseenter", handleMouseEnter);
      img.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (main) main.removeEventListener("mousemove", handleMouseMove);
      if (img) {
        img.removeEventListener("mouseenter", handleMouseEnter);
        img.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mainRef, imgRef]);

  return (
    <>
      <div
        ref={cursorRef}
        className="size-[20px] rounded-full bg-emerald-300 fixed top-0 left-0 pointer-events-none text-black flex justify-center items-center">
        <span ref={textRef} className=""></span>
      </div>
      {/* this will always be below cursor so when clicked we click this cursor so we use pointer-events-none to click through */}
      <div className="h-screen flex justify-center items-center">
        <img
          ref={imgRef}
          src="https://wallpaperaccess.com/full/8296876.png"
          alt="Jin-woo"
          className="h-[20rem]"
        />
      </div>
    </>
  );
}

export default NineCursorChange;
