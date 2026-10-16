
import { FaArrowRight, FaCheckCircle, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-[#483AEA]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-12">

        {/* Left: Hero Content */}
        <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">

          {/* Announcement Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#483AEA]/15 bg-[#483AEA]/5 px-4 py-2 text-xs font-semibold text-[#483AEA] sm:text-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#483AEA]" />
            YOUR CONTACTS, ALL IN ONE PLACE
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Your Contacts,
            <span className="mt-1 block text-[#483AEA]">
              Beautifully
            </span>
            <span className="block">Organized.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 lg:mx-0">
            Meet Personify — your smarter way to manage contacts. Keep
            your people organized, their details up to date, and every
            important connection just a click away.
          </p>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
            <Link
              to="/sign-up"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#483AEA] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#483AEA]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#3a2db8] hover:shadow-xl hover:shadow-[#483AEA]/30 focus:outline-none focus:ring-4 focus:ring-[#483AEA]/20"
            >
              Get Started Free
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-[#483AEA]/30 hover:bg-[#483AEA]/5 hover:text-[#483AEA]"
            >
              Explore Features
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-gray-500 lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#483AEA]" />
              Easy to use
            </span>

            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#483AEA]" />
              Stay organized
            </span>

            <span className="inline-flex items-center gap-2">
              <FaCheckCircle className="text-[#483AEA]" />
              Quick access
            </span>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

          {/* Decorative Backdrop */}
          <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-[#483AEA]/10 via-purple-100/60 to-indigo-100/70 blur-2xl sm:inset-8" />

          <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-[#F5F3FF] via-white to-[#EEF2FF] p-3 shadow-[0_25px_80px_rgba(72,58,234,0.12)] sm:p-5">

            {/* Image Header */}
            <div className="mb-2 flex items-center justify-between px-2 pt-1 sm:px-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#483AEA]">
                  Meet your contact hub
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-800 sm:text-base">
                  Everything in one place
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#483AEA] shadow-sm sm:h-12 sm:w-12">
                <FaUsers className="text-xl sm:text-2xl" />
              </div>
            </div>

            {/* Existing Hero Asset */}
            <img
              src="/hero.png"
              alt="Personify contact management dashboard illustration"
              className="relative z-10 mx-auto h-auto w-full rounded-2xl object-contain"
              fetchPriority="high"
            />

            {/* Bottom Feature Card */}
            <div className="relative z-20 mx-1 mt-3 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/95 p-3 shadow-lg shadow-indigo-900/5 sm:mx-2 sm:p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#483AEA]/10 text-[#483AEA]">
                <FaShieldAlt className="text-lg" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Your connections, organized
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  Keep important contact information easy to find.
                </p>
              </div>

              <FaCheckCircle className="shrink-0 text-lg text-[#483AEA]" />
            </div>
          </div>

          {/* Decorative Floating Circle */}
          <div className="pointer-events-none absolute -right-3 top-12 -z-10 h-16 w-16 rounded-2xl border border-[#483AEA]/15 sm:-right-5 sm:h-24 sm:w-24" />
        </div>
      </div>
    </section>
  );
};
