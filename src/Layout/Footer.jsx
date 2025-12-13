function Footer() {
  return (
    <div className="h-screen  bg-neutral-300 flex justify-center items-center">
      <div className="h-screen bg-neutral-300 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="z-10 text-center space-y-8 px-4">
          <div className="inline-block bg-neutral-200 px-4 py-1 rounded-full border border-neutral-400">
            <p className="font-mono text-neutral-600 text-sm">
              // System Status: Render Complete
            </p>
          </div>

          <h2 className="text-5xl md:text-8xl font-bold text-neutral-900 tracking-tighter">
            You have reached <br />
            the{" "}
            <span className="underline decoration-wavy decoration-neutral-400">
              Void
            </span>
            .
          </h2>

          <p className="text-neutral-600 max-w-xl mx-auto text-xl font-medium">
            There are no more pixels down here. <br />
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-neutral-900 font-mono rounded-full  hover:scale-105 active:scale-95">
            <span>sudo reboot_scroll </span>
          </button>
        </div>

        <div className="absolute bottom-6 text-neutral-500 font-mono text-xs">
          © {new Date().getFullYear()} Localhost. All errors reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
