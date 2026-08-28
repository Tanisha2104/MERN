export default function Contact() {
  return (
    <section id="contact" className="bg-card border-y border-line py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl mb-2">
            Say hello
          </h2>
          <p className="text-slate mb-5">Open to internships and frontend roles.</p>
          <div className="bg-ink text-card font-mono text-lg px-6 py-5 inline-block">
            tanishamittal2104@gmail.com
          </div>
        </div>
        <div className="flex gap-4 font-mono text-sm">
          <a href="https://github.com/Tanisha2104" target="_blank" className="border-b border-line hover:text-route hover:border-route">GitHub</a>
          <a href="https://www.linkedin.com/in/tanisha-mittal-823348293/" target="_blank" className="border-b border-line hover:text-route hover:border-route">LinkedIn</a>
          <a href="#"  target="_blank" className="border-b border-line hover:text-route hover:border-route">Resume</a>
        </div>
      </div>
    </section>
  );
}