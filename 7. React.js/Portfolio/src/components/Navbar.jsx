import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-pavement border-b-2 border-dashed border-line">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-extrabold text-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lane" />
          tanisha.mittal
        </a>

        <ul className="hidden md:flex gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-route transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}