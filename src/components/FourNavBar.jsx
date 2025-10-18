import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function FourNavBar() {
  const left = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(left.current, {
      y: -30,
      opacity: 0,
      duration: 0.75,
      delay: 0.5,
    });

    tl.from("h4", {
      y: -30,
      opacity: 0,
      duration: 0.75,
      stagger: 0.25,
    });
  });

  return (
    <>
      <div
        id="nav"
        className="flex items-center justify-between bg-black fixed top-0 left-0 w-full h-18 font-[600] px-10">
        <h2 ref={left} className="text-2xl">
          Shaik Raiyan
        </h2>
        <div id="right" className="flex gap-20">
          <h4 className="text-xl">Education</h4>
          <h4 className="text-xl">Skills</h4>
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contact</h4>
        </div>
      </div>

      <h1 className="text-8xl font-semibold p-50">Shaik Raiyan</h1>
    </>
  );
}

export default FourNavBar;
