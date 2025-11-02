import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

function ThreeYo_yo() {
  const square = useRef();

  useGSAP(() => {
    gsap.fromTo(
      square.current,
      { x: 100 },
      {
        rotate: 360,
        x: 500,
        backgroundColor: "#38bdf8", //if want to change color then it should not be any tailwind
        // use inline or normal css
        duration: 2,
        repeat: -1,
        delay: 1,
        yoyo: true,
      }
    );
  });

  return (
    <div
      ref={square}
      className="size-50 flex justify-center items-center font-bold text-2xl"
      style={{ backgroundColor: "#fb7185" }}>
      square
    </div>
  );
}

export default ThreeYo_yo;
