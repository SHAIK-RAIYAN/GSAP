import gsap from "gsap";
import { useEffect, useRef } from "react";

function SevenString() {
  const svgRef = useRef();
  const pathRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    const handleMouseMove = (event) => {
      const svgPos = svg.getBoundingClientRect(); // gives the position and size of an element
      const newXvalue = event.clientX - svgPos.left; // mouseX relative to SVG = mouseX in window - SVG's left position
      const newYvalue = event.clientY - svgPos.top;

      const newPathDvalue = `M 0 150 Q ${newXvalue} ${newYvalue} 1400 150`;

      console.log(newPathDvalue);

      gsap.to(path, {
        attr: { d: newPathDvalue },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: "M 0 150 Q 700 150 1400 150" },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    svg.addEventListener("mousemove", handleMouseMove); //when mouse is moved inside svg container
    svg.addEventListener("mouseleave", handleMouseLeave); // when mouse leaves the svg container
    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-screen bg-[#111] flex justify-center items-center">
      <svg ref={svgRef} width="1400" height="300">
        <path
          ref={pathRef}
          d="M 0 150 Q 700 150 1400 150"
          stroke="white"
          fill="transparent"
        />
      </svg>
    </div>
  );
}

export default SevenString;
