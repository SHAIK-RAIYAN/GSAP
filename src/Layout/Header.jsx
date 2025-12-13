import { ArrowDown } from "@mynaui/icons-react";

function Header() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative z-10  ">
      <h1 className="text-9xl p-4 font-bold text-neutral-800 text-center">
        My{" "}
        <span className="underline decoration-wavy decoration-neutral-600">
          GSAP
        </span>{" "}
        <span className="italic font-serif bg-clip-border ">Learnings</span>
      </h1>
      <p className="mt-6 text-neutral-500 max-w-lg text-center font-mono">
        A collection of animations and effects built with GSAP and React. Select
        an example to see it in action.
      </p>
      <div className="absolute bottom-10 flex flex-col justify-center items-center text-neutral-600">
        <p className="mb-1 font-mono">Scroll</p>
        <ArrowDown className="animate-bounce" />
        <span className="h-[1px] bg-black w-40" />
      </div>
    </div>
  );
}

export default Header;
