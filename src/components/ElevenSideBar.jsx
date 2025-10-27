import { Menu, X } from "@mynaui/icons-react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function ElevenSideBar() {
  const sideBarRef = useRef();
  const [sideBarButton, setSideBarButton] = useState(false);

  useEffect(() => {
    const links = sideBarRef.current.querySelectorAll("h4");
    if (sideBarButton) {
      gsap.to(sideBarRef.current, {
        right: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });

      gsap.from(links, {
        x: 100,
        duration: 1,
        stagger: 0.1,
        opacity: 0,
        ease: "power2.out",
        delay: 0.2,
      });
    } else {
      gsap.to(sideBarRef.current, {
        right: "-30rem",
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [sideBarButton]);

  return (
    // make body in index.html - overflow-x-hidden
    <div className="h-screen bg-[url(/bg-image.jpg)] bg-cover bg-center text-2xl">
      <div
        id="nav-bar"
        className="h-fit border-b backdrop-blur-sm w-full flex justify-between items-center p-5 ">
        <h1>ShaikRaiyan</h1>
        <Menu
          className="cursor-pointer"
          onClick={() => setSideBarButton(!sideBarButton)}
        />
      </div>
      <div
        ref={sideBarRef}
        className="h-full w-[25rem] flex flex-col gap-4 text-white pt-20 pl-10 absolute top-0 right-[-30rem] backdrop-blur-lg border-l bg-[#0000004a] leading-normal">
        <h4 className="cursor-pointer hover:text-white/60">Home</h4>
        <h4 className="cursor-pointer hover:text-white/60">Work</h4>
        <h4 className="cursor-pointer hover:text-white/60">About</h4>
        <h4 className="cursor-pointer hover:text-white/60">Education</h4>
        <h4 className="cursor-pointer hover:text-white/60">Contact</h4>
        <h4 className="cursor-pointer hover:text-white/60">Profile</h4>
        <X
          className="absolute top-7 right-7 text-2xl cursor-pointer"
          onClick={() => setSideBarButton(!sideBarButton)}
        />
      </div>
    </div>
  );
}

export default ElevenSideBar;
