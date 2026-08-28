const projects = [
  {
    tag: "calculator.js",
    title: "Calculator Using DOM",
    description: "A working calculator built with vanilla JS and full DOM manipulation.",
    stack: ["JavaScript", "DOM"],
  },
  {
    tag: "dashboard.js",
    title: "Dashboard Highlight Button",
    description: "An interactive dashboard with dynamic highlight and button-state handling.",
    stack: ["JavaScript", "CSS"],
  },
  {
    tag: "todo.js",
    title: "Dynamic TODO",
    description: "A to-do list with filtering, checkbox toggling and Enter-key support.",
    stack: ["JavaScript"],
  },
  {
    tag: "keyboard.js",
    title: "Keyboard Detector",
    description: "Detects and displays live keypress events using the Keyboard API.",
    stack: ["JavaScript", "DOM"],
  },
  {
    tag: "colorpicker.js",
    title: "Color Picker",
    description: "A colour picker with RGB sliders, hex conversion and a dark mode toggle.",
    stack: ["JavaScript", "CSS"],
  },
  {
    tag: "portal.html",
    title: "Employee Registration Portal",
    description: "A registration form UI for adding and managing employee entries.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl mb-2">
          Featured projects
        </h2>
        <p className="text-slate mb-10">Hover a card to see the detection frame.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group relative bg-pavement border border-line hover:border-route transition-colors p-5">
              <span className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-2 border-l-2 border-route opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-route opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-2 border-l-2 border-route opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-2 border-r-2 border-route opacity-0 group-hover:opacity-100 transition-opacity" />

              <p className="font-mono text-xs text-route mb-3.5">{project.tag}</p>
              <div
                className="h-24 border border-line mb-4"
                style={{ backgroundImage: "repeating-linear-gradient(135deg, var(--color-line) 0, var(--color-line) 1px, transparent 1px, transparent 14px)" }}
              />
              <h3 className="font-display font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-sm text-slate mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-slate border border-line rounded-full px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}