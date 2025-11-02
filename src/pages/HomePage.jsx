import { Link } from "react-router-dom";

const animations = [
  {
    name: "Two Boxes Animate",
    path: "/two-boxes",
    desc: "Simple state-based box animation.",
  },
  {
    name: "Circle Animate",
    path: "/circle-animate",
    desc: "Basic GSAP timeline animation.",
  },
  {
    name: "Three",
    path: "/three",
    desc: "Exploring 3D transforms and effects.",
  },
  {
    name: "Four Nav Bar",
    path: "/four-nav-bar",
    desc: "A responsive, animated navigation menu.",
  },
  {
    name: "Five Scroll Trigger",
    path: "/five-scroll-trigger",
    desc: "Animating elements on scroll position.",
  },
  {
    name: "Six Text Slide",
    path: "/six-text-slide",
    desc: "Creative text sliding and masking effects.",
  },
  {
    name: "Seven String",
    path: "/seven-string",
    desc: "SVG string and path animations.",
  },
  {
    name: "Eight Custom Cursor",
    path: "/eight-custom-cursor",
    desc: "A custom cursor that interacts with elements.",
  },
  {
    name: "Nine Cursor Change",
    path: "/nine-cursor-change",
    desc: "Changing cursor style on hover.",
  },
  {
    name: "Ten Mask Cursor",
    path: "/ten-mask-cursor",
    desc: "Using the cursor to reveal content.",
  },
  {
    name: "Eleven Side Bar",
    path: "/eleven-side-bar",
    desc: "A modern, animated slide-out sidebar.",
  },
  {
    name: "Twelve Text Appear",
    path: "/twelve-text-appear",
    desc: "Staggered text character appearance.",
  },
];

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-10 ">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-400 to-neutral-800">
          GSAP Animations
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-6 mb-16">
          A collection of animations and effects built with GSAP and React.
          Select an example to see it in action.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {animations.map((anim) => (
          <Link
            to={anim.path}
            key={anim.path}
            className="block p-6 border border-zinc-700/50 bg-zinc-900/50 rounded-lg shadow-lg 
                       hover:bg-zinc-800/60 hover:border-neutral-50/50 hover:scale-[1.02]
                       transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-neutral-200 mb-2">
              {anim.name}
            </h3>
            <p className="text-gray-400">{anim.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
