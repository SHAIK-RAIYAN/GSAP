import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function Stairs(props) {
  const { pathname } = useLocation(); //we can get path from here
  const pageRef = useRef(null);

  //stairs page transition
  const stairParentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set(".stair", { y: "0%", height: "100%" });
      gsap.set(stairParentRef.current, { display: "flex" });

      tl.from(".stair", {
        height: "0%",
        stagger: 0.08,
        ease: "power3.inOut",
      });

      gsap.from(pageRef.current, {
        opacity: 0,
        delay: 1,
      });

      tl.to(".stair", {
        y: "100%",
        stagger: 0.08,
        ease: "power3.inOut",
      });

      tl.set(stairParentRef.current, { display: "none" });
    },
    { scope: stairParentRef, dependencies: [pathname] },
  );
  return (
    <div>
      <div
        ref={stairParentRef}
        className="pointer-events-none fixed inset-0 z-50 flex"
      >
        <div className="stair relative top-0 h-full w-1/5 bg-black"></div>
        <div className="stair relative top-0 h-full w-1/5 bg-black"></div>
        <div className="stair relative top-0 h-full w-1/5 bg-black"></div>
        <div className="stair relative top-0 h-full w-1/5 bg-black"></div>
        <div className="stair relative top-0 h-full w-1/5 bg-black"></div>
      </div>
      <div ref={pageRef}>{props.children}</div>{" "}
      {/* props.children is <App /> element */}
    </div>
  );
}

export default Stairs;
