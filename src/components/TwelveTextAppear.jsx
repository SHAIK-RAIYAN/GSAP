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

  useEffect(() => {
    // 1.Convert Text in to seperate letters adding span to each letter in h1
    breakText(h1Ref.current);

    // 2.Gsap
    const spansFirst = h1Ref.current.querySelectorAll(".f");
    const spansLast = h1Ref.current.querySelectorAll(".l");
    
    gsap.from(spansFirst, {
      y: 80,
      opacity: 0,
      delay: 0.2,
      stagger: 0.1,
      duration: 0.5,
    });
    gsap.from(spansLast, {
      y: 80,
      opacity: 0,
      delay: 0.2,
      stagger: -0.1,
      duration: 0.5,
    });
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 ref={h1Ref} className="text-8xl overflow-hidden p-5">
        Shaik Raiyan
      </h1>
    </div>
  );
}

export default TwelveTextAppear;
