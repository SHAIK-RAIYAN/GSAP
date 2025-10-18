import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function CircleAnimate() {
  const [distanceX, setDistanceX] = useState(0);
  const [distanceY, setDistanceY] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-500, 500, 100);

  useGSAP(() => {
    gsap.to(".circle", {
      x: distanceX,
      y: distanceY,
      duration: 0.5,
    });
  }, [distanceX,distanceY]);
  return (
    <div className="h-screen flex flex-col items-center ">
      <button
        onClick={() => {
          setDistanceX(randomX);
          setDistanceY(randomY);
        }}
        className="h-15 w-50 text-2xl border-4 border-white rounded-4xl bg-linear-to-b from-sky-400 to-sky-700 my-20 active:scale-95">
        Animate
      </button>
      <div className="circle size-50 bg-linear-to-br from-rose-400 to-rose-600 rounded-full"></div>
    </div>
  );
}

export default CircleAnimate;
