import {
  FaGlobe,
  FaBolt,
  FaTags,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Access from Anywhere",
      description:
        "Access your contacts whenever you need them. Stay connected across devices and keep important information within reach.",
      icon: <FaGlobe />,
      label: "Always connected",
      number: "01",
    },
    {
      id: 2,
      title: "Instant Search",
      description:
        "Find the right person in seconds. Spend less time scrolling through lists and more time building meaningful connections.",
      icon: <FaBolt />,
      label: "Find contacts faster",
      number: "02",
    },
    {
      id: 3,
      title: "Smart Tagging",
      description:
        "Group contacts using meaningful tags. Keep friends, colleagues, clients, and important connections neatly organized.",
      icon: <FaTags />,
      label: "Stay organized",
      number: "03",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF9FF] to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#483AEA]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#483AEA]/15 bg-[#483AEA]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#483AEA] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#483AEA]" />
            Made for your connections
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="mt-1 block text-[#483AEA]">
              stay connected.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            Keep your people organized, find anyone in seconds, and manage
            your connections effortlessly with Personify.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgba(17,24,39,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#483AEA]/20 hover:shadow-[0_20px_50px_rgba(72,58,234,0.12)] sm:p-8"
            >
              {/* Decorative corner */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#483AEA]/[0.04] transition-transform duration-500 group-hover:scale-150 group-hover:bg-[#483AEA]/[0.08]" />

              <div className="relative flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#483AEA]/10 text-2xl text-[#483AEA] transition-all duration-300 group-hover:bg-[#483AEA] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#483AEA]/25">
                  {feature.icon}
                </div>

                <span className="text-sm font-bold tracking-widest text-gray-300 transition-colors group-hover:text-[#483AEA]/50">
                  {feature.number}
                </span>
              </div>

              <div className="relative mt-7 flex flex-1 flex-col">
                <span className="mb-3 w-fit rounded-full bg-gray-50 px-3 py-1.5 text-xs font-semibold text-gray-500 transition-colors group-hover:bg-[#483AEA]/5 group-hover:text-[#483AEA]">
                  {feature.label}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-500 sm:text-base">
                  {feature.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-[#483AEA]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#483AEA]" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom call to action */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#483AEA]/10 bg-gradient-to-r from-[#483AEA]/[0.06] via-white to-purple-100/40 p-6 text-center sm:mt-14 sm:flex-row sm:p-8 sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Ready to organize your world?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Bring all your important connections together with Personify.
            </p>
          </div>

          <Link
            to="/sign-up"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#483AEA] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#483AEA]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3a2db8] sm:w-auto"
          >
            Get Started
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feature;