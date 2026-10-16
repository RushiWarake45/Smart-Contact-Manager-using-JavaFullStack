
import {
  FiUsers,
  FiTarget,
  FiEye,
  FiHeart,
  FiShield,
  FiZap,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const values = [
  {
    icon: FiZap,
    title: "Simplicity",
    description:
      "Contact management should be effortless. We keep everything simple and easy to use.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: FiShield,
    title: "Privacy & Trust",
    description:
      "Your contacts matter. We believe in protecting personal information and building trust.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FiHeart,
    title: "People First",
    description:
      "Technology should strengthen relationships, not make managing them more complicated.",
    color: "bg-pink-100 text-pink-600",
  },
];

const features = [
  "Organize contacts in one place",
  "Save your favourite contacts",
  "Find contacts with smart search",
  "Update contact details with ease",
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-900" id="about">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-violet-50 via-white to-blue-50">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Get to know Personify
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Better contacts.
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Stronger connections.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Personify is your smart contact manager, built to help you
              organize people, remember what matters, and stay connected
              without the clutter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/sign-up" 
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                Get Started <FiArrowRight />
              </Link>

              <a
                href="#our-story"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
              >
                Discover Our Story
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-violet-600" />
                Easy to use
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-violet-600" />
                Organized contacts
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-violet-600" />
                Made for you
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-300 to-blue-300 opacity-40 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white/80 p-5 shadow-2xl shadow-violet-200/50 backdrop-blur sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm text-slate-500">
                    Your personal workspace
                  </p>
                  <h2 className="mt-1 text-xl font-bold">
                    Connections at a glance
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <FiUsers size={24} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-violet-50 p-5">
                  <FiUsers className="text-violet-600" size={23} />
                  <p className="mt-4 text-2xl font-extrabold">People</p>
                  <p className="mt-1 text-sm text-slate-500">
                    All in one place
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <FiStar className="text-blue-600" size={23} />
                  <p className="mt-4 text-2xl font-extrabold">Favourites</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Your important people
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Why Personify?</h3>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Stay organized
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    ["#8b5cf6", "Organize contacts", "Keep details together"],
                    ["#3b82f6", "Find people faster", "Search in seconds"],
                    ["#10b981", "Build relationships", "Remember what matters"],
                  ].map(([color, title, subtitle]) => (
                    <div key={title} className="flex items-center gap-3">
                      <div
                        className="h-11 w-11 shrink-0 rounded-xl"
                        style={{ backgroundColor: `${color}18`, color }}
                      >
                        <div className="flex h-full items-center justify-center">
                          <FiCheckCircle size={21} />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="text-sm text-slate-500">{subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -right-2 top-24 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block sm:-right-7">
                <FiHeart className="text-pink-500" size={24} />
                <p className="mt-2 text-sm font-bold">People matter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="our-story" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-bold text-violet-600">OUR STORY</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              A simple idea.
              <br />
              A meaningful difference.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Managing contacts shouldn't mean searching through endless
              lists, forgetting important details, or struggling to keep
              everything organized.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              That's why we created Personify: a smart, straightforward
              space where you can manage contact information, find people
              quickly, and keep the connections that matter close at hand.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white">
                <FiHeart size={23} />
              </div>
              <div>
                <h3 className="font-bold">People before paperwork</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Less time managing lists. More time building meaningful
                  relationships.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:shadow-lg sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <FiTarget size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    To make contact management simple, accessible, and
                    useful so people can focus on their relationships
                    instead of administrative tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 transition hover:shadow-lg sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <FiEye size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    To create a world where managing contacts feels
                    effortless and staying connected comes naturally
                    to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold text-violet-600">WHAT GUIDES US</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our values, our promise
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Everything we build starts with the people who use Personify.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-100/70 sm:p-8"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${value.color} transition group-hover:scale-110`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold text-violet-600">WHY PERSONIFY</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need to stay organized
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              From storing contact details to finding your favourite
              people, Personify brings the essentials together in one
              convenient workspace.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <FiCheckCircle
                    className="shrink-0 text-violet-600"
                    size={21}
                  />
                  <span className="font-medium text-slate-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/sign-up"
              
              className="mt-9 inline-flex items-center gap-2 font-bold text-violet-600 transition hover:gap-4"
            >
              Explore Personify <FiArrowRight />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 p-7 text-white shadow-xl shadow-violet-200 sm:p-10">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[30px] border-white/10" />
            <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-white/10 blur-xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <FiUsers size={29} />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
                Your contacts.
                <br />
                Your way.
              </h3>

              <p className="mt-4 max-w-md leading-7 text-violet-100">
                A cleaner workspace for your connections, with the tools
                you need to keep everything organized.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Simple contact management",
                  "Quick search",
                  "Favourite contacts",
                  "Personal dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 p-3 text-sm font-medium"
                  >
                    <FiCheckCircle className="shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-violet-600/40 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-blue-600/40 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-violet-300">
              <FiHeart size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to simplify your connections?
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Bring your contacts together and make staying organized
              feel effortless with Personify.
            </p>

            <Link to="/sign-up"
              
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-violet-700 transition hover:-translate-y-1 hover:bg-violet-50"
            >
              Get Started for Free <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
