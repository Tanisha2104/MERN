const skillGroups = [
  { label: "core", skills: ["HTML", "CSS", "JavaScript"] },
  { label: "frameworks & tools", skills: ["React", "Tailwind CSS", "Git"] },
  { label: "currently learning", skills: ["Node.js", "Express", "MongoDB"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-card border-y border-line py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl mb-2">Skills</h2>
        <p className="text-slate mb-10">Tools I use, grouped by what they're for.</p>

        <div className="flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-wide text-slate mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="font-mono text-sm px-3.5 py-2 rounded-full border border-line bg-pavement flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-route" />
                    {skill}
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