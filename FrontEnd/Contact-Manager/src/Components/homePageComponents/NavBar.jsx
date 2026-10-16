
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-[#483AEA]/5 hover:text-[#483AEA]";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-[76px] items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5"
          >
            <img
              src="/navbar1.png"
              alt="Personify Logo"
              className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-2xl font-bold tracking-tight text-gray-900">
              Personify<span className="text-[#483AEA]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex lg:gap-4">
            <a href="#features" className={navLinkClass}>
              Features
            </a>

            <a href="#about" className={navLinkClass}>
              About
            </a>

            <a href="#contact" className={navLinkClass}>
              Contact
            </a>
          </div>

          {/* Desktop Authentication Actions */}
          <div className="hidden items-center gap-4 sm:gap-5 md:flex">
            <Link
              to="/login"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-[#483AEA]"
            >
              Login
            </Link>

            <Link
              to="/sign-up"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#483AEA] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#483AEA]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a2db8] hover:shadow-lg hover:shadow-[#483AEA]/30 focus:outline-none focus:ring-4 focus:ring-[#483AEA]/20"
            >
              Get Started

              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:border-[#483AEA]/30 hover:bg-[#483AEA]/5 hover:text-[#483AEA] focus:outline-none focus:ring-4 focus:ring-[#483AEA]/10 md:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gray-100 pb-5 pt-3 md:hidden"
          >
            <div className="flex flex-col gap-1">
              <a
                href="#features"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Features
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className={navLinkClass}
              >
                About
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Contact
              </a>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
              <Link
                to="/login"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#483AEA]/30 hover:bg-gray-50 hover:text-[#483AEA]"
              >
                Login
              </Link>

              <Link
                to="/sign-up"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#483AEA] px-3 py-3 text-sm font-semibold text-white shadow-md shadow-[#483AEA]/20 transition hover:bg-[#3a2db8] focus:outline-none focus:ring-4 focus:ring-[#483AEA]/20"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
