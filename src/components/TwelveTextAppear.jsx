import gsap from "gsap";
import { useEffect, useRef } from "react";

function TwelveTextAppear() {
  const h1Ref = useRef();

  function breakText(h1) {
    const h1SplitText = h1.textContent.split(""); // ['S', 'h', 'a', 'i', 'k', ' ', 'R', 'a', 'i', 'y', 'a', 'n']
    let SeperatedText = "";

    h1SplitText.forEach((ele, idx) => {
      if (idx < h1SplitText.length / 2) {
        SeperatedText += `<span class="f" style="display:inline-block">${ele}</span>`;
      } else {
        SeperatedText += `<span class="l" style="display:inline-block">${ele}</span>`;
      }
    });

    h1.innerHTML = SeperatedText; // Each letter seperated in h1 in <span>
    console.log(h1);
  }

  /*Inline <span>s are inline by default

    y transforms in GSAP don’t apply visually to inline elements.
    
    By default, <span> is display: inline, so y won’t move it vertically. */

  useEffect(
    () => {
      // Convert Text in to seperate letters
      breakText(h1Ref.current);

      const spansFirst = h1Ref.current.querySelectorAll(".f");
      const spansLast = h1Ref.current.querySelectorAll(".l");

      gsap.from(spansFirst, {
        y: 80,
        opacity: 0,
        delay: 0.8,
        stagger: 0.1,
        duration: 0.8,
      });
      gsap.from(
        spansLast,
        {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: -0.1,
        },
        "<", // Run at start of previous animation
      );
    },
    { scope: h1Ref }, // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 ref={h1Ref} className="overflow-hidden p-5 text-8xl text-neutral-800">
        Shaik Raiyan
      </h1>
    </div>
  );
}

export default TwelveTextAppear;
