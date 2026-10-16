
import { Link } from "react-router-dom";
import {
  FiUsers,
  FiMail,
  FiArrowUpRight,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#17132B]
      text-white">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32
        -top-32 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32
        -left-32 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5
        sm:px-8 lg:px-12">

        {/* Main footer */}
        <div className="grid gap-10 py-14 sm:py-16
          md:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center
                justify-center rounded-2xl bg-violet-600
                shadow-lg shadow-violet-900/40 transition
                group-hover:scale-105">
                <FiUsers size={25} />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Personify
                </h2>
                <p className="text-xs text-violet-300">
                  Smart Contact Manager
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7
              text-gray-400">
              Keep your contacts organized and your important
              connections always within reach. Simple contact
              management for everyday life.
            </p>

            <div className="mt-6 flex items-center gap-2
              text-sm text-gray-400">
              <FiHeart className="text-violet-400" size={16} />
              Made with care for better connections.
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex w-fit items-center gap-2
                    text-sm text-gray-400 transition
                    hover:text-violet-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full
                    bg-violet-500 opacity-0 transition
                    group-hover:opacity-100" />

                  {item.name}
                </a>
              ))}

              <Link
                to="/contact"
                className="group flex w-fit items-center gap-2
                  text-sm text-gray-400 transition
                  hover:text-violet-300"
              >
                <span className="h-1.5 w-1.5 rounded-full
                  bg-violet-500 opacity-0 transition
                  group-hover:opacity-100" />

                Contact
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-base font-semibold">
              Let's Connect
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Have a question, suggestion, or feedback?
              We'd love to hear from you.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3
                rounded-xl bg-violet-600 px-5 py-3
                text-sm font-semibold text-white
                shadow-lg shadow-violet-950/30 transition
                hover:-translate-y-0.5 hover:bg-violet-500
                focus:outline-none focus:ring-2
                focus:ring-violet-400 focus:ring-offset-2
                focus:ring-offset-[#17132B]"
            >
              <FiMail size={18} />
              Contact Us
              <FiArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3
          border-t border-white/10 py-6 text-center
          sm:flex-row sm:justify-between sm:text-left">

          <p className="text-xs leading-5 text-gray-500 sm:text-sm">
            © {currentYear} Personify. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 sm:text-sm">
            Smart Contact Manager
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
