import React from "react";
import { FiTarget, FiEye, FiZap, FiShield, FiTrendingUp } from "react-icons/fi";
import { FiNavigation, FiSmartphone, FiLayout } from "react-icons/fi";


import { HiOutlineSparkles } from "react-icons/hi2";

const About = () => {
  return (
    <main className="min-h-screen bg-(--bg-page) text-(--text-primary) transition-colors duration-300">
      <section className="relative overflow-hidden py-10 sm:py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-(--accent)/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* LEFT */}
            <div className="rounded-[32px] border border-(--border) bg-(--bg-panel) p-6 sm:p-8 shadow-lg flex flex-col">
              <span className="inline-flex w-fit rounded-full bg-(--accent)/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
                Our Story
              </span>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-(--text-primary) sm:text-5xl">
                A storefront built
                <span className="block text-(--accent)">
                  for modern shopping
                </span>
              </h1>

              <p className="mt-4 text-base leading-7 text-(--text-muted)">
                FakeStore is a modern React storefront focused on simplicity,
                performance, and an enjoyable shopping experience.
              </p>

              {/* Mission & Vision */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-(--bg-card) p-5 ring-1 ring-(--border) transition-all duration-300 hover:ring-(--accent)">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
                    <FiTarget size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-(--text-primary)">
                    Mission
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--text-muted)">
                    Make online shopping simple and enjoyable.
                  </p>
                </div>

                <div className="rounded-3xl bg-(--bg-card) p-5 ring-1 ring-(--border) transition-all duration-300 hover:ring-(--accent)">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
                    <FiEye size={20} />
                  </div>

                  <h3 className="text-lg font-semibold text-(--text-primary)">
                    Vision
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-(--text-muted)">
                    Build trust through clarity and consistency.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 overflow-hidden rounded-3xl bg-(--bg-card) ring-1 ring-(--border)">
                <div className="grid grid-cols-3">
                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold text-(--text-primary)">
                      150+
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                      Products
                    </p>
                  </div>

                  <div className="border-x border-(--border) p-4 text-center">
                    <p className="text-2xl font-bold text-(--text-primary)">
                      4.8
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                      Rating
                    </p>
                  </div>

                  <div className="p-4 text-center">
                    <p className="text-2xl font-bold text-(--text-primary)">
                      24/7
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[32px] border border-(--border) bg-(--bg-panel) p-6 sm:p-8 shadow-lg flex flex-col">
              <span className="inline-flex w-fit rounded-full bg-(--accent)/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
                Why Choose Us
              </span>

              <h2 className="mt-5 text-3xl font-bold text-(--text-primary)">
                Built for speed and simplicity
              </h2>

              <p className="mt-3 text-base text-(--text-muted)">
                Everything needed for a modern storefront experience.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <div className="rounded-3xl bg-(--bg-card) p-5 ring-1 ring-(--border) transition-all duration-300 hover:ring-(--accent)">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
                      <HiOutlineSparkles size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-(--text-primary)">
                        Modern Design
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-(--text-muted)">
                        Clean and polished UI crafted for shoppers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-(--bg-card) p-5 ring-1 ring-(--border) transition-all duration-300 hover:ring-(--accent)">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
                      <FiZap size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-(--text-primary)">
                        High Performance
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-(--text-muted)">
                        Fast loading and smooth navigation throughout.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-(--bg-card) p-5 ring-1 ring-(--border) transition-all duration-300 hover:ring-(--accent)">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
                      <FiShield size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-(--text-primary)">
                        Complete Experience
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-(--text-muted)">
                        Products, pages and navigation ready to use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Metric */}
              <div className="mt-4 rounded-3xl bg-(--accent)/5 p-5 ring-1 ring-(--accent)/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-(--accent)">
                      Satisfaction
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-(--text-primary)">
                      98%
                    </h3>
                  </div>

                  <div className="text-(--accent)">
                    <FiTrendingUp size={38} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-(--accent)/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl">
            Why We Stand Out
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-(--text-muted)">
            Built with modern tools and thoughtful design to deliver a smooth,
            responsive, and enjoyable shopping experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-(--border) bg-(--bg-panel) p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/30 hover:shadow-xl">
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-(--accent)/5 blur-3xl transition-all duration-500 group-hover:bg-(--accent)/10" />

            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--accent)/10 text-(--accent)">
                <FiNavigation size={24} />
              </div>

              <h3 className="text-xl font-semibold text-(--text-primary)">
                Simple Navigation
              </h3>

              <p className="mt-3 leading-7 text-(--text-muted)">
                Browse products and pages effortlessly with a clean structure
                powered by React Router.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-(--border) bg-(--bg-panel) p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/30 hover:shadow-xl">
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-(--accent)/5 blur-3xl transition-all duration-500 group-hover:bg-(--accent)/10" />

            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--accent)/10 text-(--accent)">
                <FiSmartphone size={24} />
              </div>

              <h3 className="text-xl font-semibold text-(--text-primary)">
                Responsive Layout
              </h3>

              <p className="mt-3 leading-7 text-(--text-muted)">
                Designed to adapt beautifully across desktops, tablets, and
                mobile devices.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-(--border) bg-(--bg-panel) p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/30 hover:shadow-xl">
            <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-(--accent)/5 blur-3xl transition-all duration-500 group-hover:bg-(--accent)/10" />

            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--accent)/10 text-(--accent)">
                <FiLayout size={24} />
              </div>

              <h3 className="text-xl font-semibold text-(--text-primary)">
                Developer Friendly
              </h3>

              <p className="mt-3 leading-7 text-(--text-muted)">
                Perfect for demos, prototypes, and storefront projects with a
                scalable component-based architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

     <section className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-16">
  {/* Header */}
  <div className="mb-10 text-center">
    <span className="inline-flex rounded-full bg-(--accent)/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-(--accent)">
      Core Values
    </span>

    <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl">
      What Drives Us Forward
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-(--text-muted)">
      Guiding principles that shape every decision, feature, and experience
      throughout FakeStore.
    </p>
  </div>

  {/* Main Card */}
  <div className="relative overflow-hidden rounded-[32px] border border-(--border) bg-(--bg-panel) p-6 sm:p-8 shadow-lg">

    {/* Accent Glow */}
    <div className="absolute right-0 top-0 h-64 w-64 translate-x-20 -translate-y-20 rounded-full bg-(--accent)/5 blur-3xl" />

    <div className="relative z-10">

      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-(--accent)">
          Our Philosophy
        </p>

        <h3 className="mt-3 text-2xl font-bold text-(--text-primary) sm:text-3xl">
          Built around simplicity, speed, and trust
        </h3>

        <p className="mt-4 leading-7 text-(--text-muted)">
          We focus on creating intuitive shopping experiences that feel
          effortless. Every layout, interaction, and feature is designed to
          help users discover products quickly and confidently.
        </p>
      </div>

      {/* Value Cards */}
      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {/* Clarity */}
        <div className="group rounded-3xl border border-(--border) bg-(--bg-card) p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/30 hover:shadow-xl">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent)/10 text-(--accent)">
            <FiEye size={22} />
          </div>

          <h4 className="text-lg font-semibold text-(--text-primary)">
            Clarity
          </h4>

          <p className="mt-3 leading-7 text-(--text-muted)">
            Clean layouts and intuitive interfaces make every page easy to
            understand and navigate.
          </p>

        </div>

        {/* Speed */}
        <div className="group rounded-3xl border border-(--border) bg-(--bg-card) p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/30 hover:shadow-xl">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent)/10 text-(--accent)">
            <FiZap size={22} />
          </div>

          <h4 className="text-lg font-semibold text-(--text-primary)">
            Speed
          </h4>

          <p className="mt-3 leading-7 text-(--text-muted)">
            Fast interactions and responsive pages keep the shopping journey
            smooth and engaging.
          </p>

        </div>

        {/* Trust */}
        <div className="group rounded-3xl border border-(--border) bg-(--bg-card) p-6 transition-all duration-300 hover:-translate-y-2 hover:border-(--accent)/30 hover:shadow-xl">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent)/10 text-(--accent)">
            <FiShield size={22} />
          </div>

          <h4 className="text-lg font-semibold text-(--text-primary)">
            Trust
          </h4>

          <p className="mt-3 leading-7 text-(--text-muted)">
            Consistent design patterns and reliable experiences build
            confidence with every interaction.
          </p>

        </div>

      </div>
    </div>
  </div>
</section>
    </main>
  );
};

export default About;
