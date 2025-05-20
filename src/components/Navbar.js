import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-600 p-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and name */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold bg-white/20 px-3 py-1 rounded-lg">
              Gk
            </span>
            <span className="hidden md:block text-lg font-semibold">
              ganesh
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-200 px-3 py-2 text-sm font-medium rounded-md"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-teal-200 px-3 py-2 text-sm font-medium rounded-md"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#tracer"
                  className="hover:text-teal-200 px-3 py-2 text-sm font-medium rounded-md"
                >
                  Tracer
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-teal-200 px-3 py-2 text-sm font-medium rounded-md"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="hover:text-teal-200 px-3 py-2 text-sm font-medium rounded-md"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white hover:text-teal-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 hover:text-teal-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block px-4 py-2 hover:text-teal-200"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="block px-4 py-2 hover:text-teal-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="block px-4 py-2 hover:text-teal-200"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
