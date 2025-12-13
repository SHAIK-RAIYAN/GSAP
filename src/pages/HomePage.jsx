import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import cards from "../data/cards";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

gsap.registerPlugin(ScrollTrigger);
const HomePage = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      //Calculate how far we need to scroll. width of cards + width of screen (to push it fully off-screen)
      const totalScroll = wrapper.scrollWidth + window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", //Start this animation when the TOP of the container hits the TOP of the viewport
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true, //If the browser resizes (refreshes), run my functional values again from scratch
        },
      });

      gsap.set(wrapper, { x: window.innerWidth }); // initial position- outside screen width

      tl.to(wrapper, {
        x: -totalScroll,
        ease: "none",
        // The Arc Logic
        onUpdate: () => {
          //onUpdate runs on every single frame
          const centerX = window.innerWidth / 2;
          cardsRef.current.forEach((card) => {
            if (!card) return;

            const rect = card.getBoundingClientRect(); // we get card exact position x,y, top,left...
            const cardCenterX = rect.left + rect.width / 2; // Finds the exact horizontal center of the card in pixels

            const cardDistanceFromScreenCenter = cardCenterX - centerX;
            const abstractX =
              cardDistanceFromScreenCenter / (window.innerWidth / 2);
            /*
            If the card is dead center: abstractX is 0.
            If the card is on the far right edge: abstractX is 1.
            If the card is on the far left edge: abstractX is -1.
             */

            const yPos = Math.pow(abstractX, 2) * 400; //card postion up/down by 400 px
            // y = x^2 (A Parabola Eqn).
            const rotation = abstractX * 25;

            gsap.set(card, {
              y: yPos,
              rotation: rotation,
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-300 text-white">
      <Header />
      <div
        ref={containerRef}
        className="relative flex h-screen w-full flex-col justify-center overflow-hidden bg-neutral-300"
      >
        <div className="pointer-events-none absolute inset-0" />

        <div className="absolute top-30 z-0 w-full text-center select-none">
          <h2 className="font-serif text-7xl leading-none font-bold tracking-tighter text-neutral-600 md:text-[14rem]">
            GALLERY
          </h2>
        </div>

        <div
          ref={wrapperRef}
          className="flex w-max items-center gap-20 px-10 will-change-transform"
        >
          {cards.map((card, i) => (
            <Link
              to={card.path}
              key={i}
              ref={(el) => (cardsRef.current[i] = el)} // Push every DOM node into our cardRref array
              className="relative block h-[400px] w-[350px] flex-shrink-0 rounded-3xl border border-neutral-500"
            >
              <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-neutral-900/50 shadow-lg transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[12rem] font-bold text-white/40 transition-all duration-500 select-none group-hover:scale-90">
                    {card.name.charAt(0)}
                  </span>
                </div>

                <div className="absolute bottom-4 left-0 flex w-full translate-y-2 transform flex-col justify-end p-6 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <div className="flex items-center">
                    <h2 className="mb-2 text-3xl font-bold text-white">
                      {card.name}{" "}
                    </h2>
                  </div>
                  <p className="line-clamp-3 text-sm font-medium text-pretty text-neutral-600">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
