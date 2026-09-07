export default function Hero() {
  return (
    <header
      id="home"
      className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-14 items-center py-20 md:py-24"
    >
      <div id="about">
        <p className="font-mono text-xs uppercase text-route tracking-wide mb-3">
          frontend developer / MERN
        </p>
        <h1 className="font-display font-extrabold uppercase text-4xl md:text-5xl leading-tight mb-5">
          Hi, I'm
          <br />
          Tanisha
        </h1>
        <p className="text-slate max-w-md mb-8">
          I build clean, functional interfaces with React and Tailwind, and I'm
          currently learning the rest of the MERN stack.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contact"
            className="bg-lane text-lane-ink font-semibold text-sm px-6 py-3 rounded-sm"
          >
            Hire me
          </a>
          <a
            href="#projects"
            className="border border-ink font-semibold text-sm px-6 py-3 rounded-sm"
          >
            View projects
          </a>
        </div>
      </div>

      <div className="relative aspect-square bg-card border border-line flex items-center justify-center max-w-xs mx-auto md:max-w-none">
        <img
          src="public/final.jpg" 
          alt="Tanisha"
          className="w-full h-full object-cover"
        />
        <span className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-2 border-l-2 border-route" />
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-route" />
        <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-2 border-l-2 border-route" />
        <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-2 border-r-2 border-route" />
      </div>
    </header>
  );
}
