import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Godwin<span className="text-blue-500">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <li>
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              À propos
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Action Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#cv"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all"
          >
            <Download size={16} />
            <span>Mon CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-4 text-base font-medium text-slate-300">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-blue-400 transition-colors"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-blue-400 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-blue-400 transition-colors"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-blue-400 transition-colors"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-800">
            <a
              href="#cv"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-3 rounded-lg shadow-sm transition-colors"
            >
              <Download size={18} />
              <span>Mon CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}