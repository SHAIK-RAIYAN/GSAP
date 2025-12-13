import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

function ThreeYo_yo() {
  const square = useRef();

  useGSAP(() => {
    gsap.fromTo(
      square.current,
      { x: 100 },
      {
        rotate: 360,
        x: 500,
        duration: 2,
        repeat: -1,
        delay: 1,
        yoyo: true,
      }
    );
  });

  return (
    <img
      src="/cartoon.png"
      ref={square}
      className="size-50 flex justify-center items-center font-bold text-2xl"></img>
  );
}

export default ThreeYo_yo;
