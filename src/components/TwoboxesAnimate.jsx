import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function TwoboxesAnimate() {
  const box1Ref = useRef();
  const box2Ref = useRef();

  // Time-line (animation one after other)
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(box1Ref.current, {
      //box1
      x: -500,
      rotateZ: -720,
      duration: 2,
      delay: 1,
    })
    tl.to(box2Ref.current, {
      //box2
      x: 200,
      rotateZ: 90,
      duration: 1.5,
      delay: -0.3,
    });
  });

  return (
    <div className=" h-screen w-full flex items-center justify-center ">
      <div
        ref={box1Ref}
        className="h-30 w-30 border-4 border-white bg-linear-to-br from-rose-400 to-rose-600 rounded-2xl flex justify-center items-center">
        <h1>Hello</h1>
      </div>
      <div
        ref={box2Ref}
        className="h-30 w-30 border-4 border-white bg-linear-to-br from-rose-400 to-rose-600 rounded-2xl flex justify-center items-center">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default TwoboxesAnimate;
