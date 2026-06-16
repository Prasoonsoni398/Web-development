import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["Fashion", "Electronics", "Home", "Beauty", "Sport"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Fashion");

  return (
    <main className="min-h-screen bg-slate-100 pb-16">
      <section className="relative lg:h-[calc(100vh-4rem)] max-h-[44rem] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-8 text-white sm:px-8 sm:py-12">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.3),_transparent_30%)]" />
        <div className="relative mx-auto grid h-full max-w-6xl items-center">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200 shadow-sm border border-cyan-500/20">
                curated for modern shopping
              </span>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Shop smarter with a polished FakeStore experience.
              </h1>
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                Discover trending collections, fast browsing, and clear product highlights in one beautiful storefront.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/product"
                  className="inline-flex rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500/20"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">selected category</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{activeCategory}</h2>
                </div>
                <div className="rounded-3xl bg-cyan-400/10 px-3 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                  featured
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Hand-picked items and featured offers for {activeCategory.toLowerCase()}.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.35em] transition ${
                      activeCategory === category
                        ? "bg-cyan-400 text-slate-950 shadow-lg"
                        : "bg-slate-950/60 text-slate-200 hover:bg-slate-950/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">fast pickup</p>
                  <p className="mt-3 text-xl font-semibold text-white">2 day delivery</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">top rated</p>
                  <p className="mt-3 text-xl font-semibold text-white">4.9/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-4xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
              insight
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              Fast delivery
            </h3>
            <p className="mt-3 text-slate-600">
              Orders are prepared quickly and shipped with speed in mind, so you
              can start enjoying your purchases sooner.
            </p>
          </article>
          <article className="rounded-4xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
              insight
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              Clean design
            </h3>
            <p className="mt-3 text-slate-600">
              A simple, polished UI makes product browsing effortless on desktop
              and mobile.
            </p>
          </article>
          <article className="rounded-4xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">
              insight
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              Trusted choice
            </h3>
            <p className="mt-3 text-slate-600">
              Built with React Router and modern tooling to keep navigation
              smooth and responsive.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-10">
        <div className="rounded-4xl bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Make shopping feel effortless.
              </h2>
              <p className="mt-5 text-slate-600 leading-8">
                FakeStore brings elegant visuals, fast navigation, and a
                friendly interface so your storefront demo stands out. Explore
                product categories, read quick details, and jump right into the
                shopping experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Browse categories
                </h3>
                <p className="mt-3 text-slate-600">
                  Fashion, electronics, home, and more are just one click away.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Find favorites
                </h3>
                <p className="mt-3 text-slate-600">
                  Search and filter product options instantly for a better
                  browsing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
