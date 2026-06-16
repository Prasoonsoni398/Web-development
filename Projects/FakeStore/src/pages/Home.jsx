import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["Fashion", "Electronics", "Home", "Beauty", "Sport"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Fashion");

  return (
    <main className="min-h-screen bg-(--bg-page) pb-16 text-(--text-primary) transition-colors duration-300">
      <section className="relative lg:h-[calc(--100vh-4rem)] max-h-176 overflow-hidden px-6 py-8 sm:px-8 sm:py-12">
        <div className="absolute left-[-10%] top-6 h-72 w-72 rounded-full bg-(--accent)/15 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-(--accent)/10 blur-3xl" />
        <div className="relative mx-auto grid h-full max-w-6xl items-center">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
            <div className="space-y-6 max-w-2xl">
              <span className="inline-flex rounded-full bg-(--accent)/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-(--accent) shadow-sm ring-1 ring-(--accent)/15">
                curated for modern shopping
              </span>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Shop smarter with a polished FakeStore experience.
              </h1>
              <p className="text-base leading-8 text-(--text-muted) sm:text-lg">
                Discover trending collections, fast browsing, and clear product highlights in one beautiful storefront.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/product"
                  className="inline-flex rounded-full bg-(--accent) px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Explore Products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex rounded-full border border-(--accent)/30 bg-(--accent)/10 px-7 py-3 text-sm font-semibold text-(--accent) transition hover:bg-(--accent)/20"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="rounded-4xl border border-(--border) bg-(--bg-panel) p-6 shadow-2xl ring-1 ring-(--border)/70 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">selected category</p>
                  <h2 className="mt-3 text-3xl font-semibold text-(--text-primary)">{activeCategory}</h2>
                </div>
                <div className="rounded-3xl bg-(--accent)/10 px-3 py-2 text-xs uppercase tracking-[0.35em] text-(--accent)">
                  featured
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-(--text-muted)">
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
                        ? "bg-(--accent) text-slate-950 shadow-lg"
                        : "bg-(--bg-card) text-(--text-primary) hover:bg-(--bg-panel-soft)"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-(--bg-card) p-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">fast pickup</p>
                  <p className="mt-3 text-xl font-semibold text-(--text-primary)">2 day delivery</p>
                </div>
                <div className="rounded-3xl bg-(--bg-card) p-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">top rated</p>
                  <p className="mt-3 text-xl font-semibold text-(--text-primary)">4.9/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-4xl bg-(--bg-panel) p-8 shadow-lg ring-1 ring-(--border) transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">insight</p>
            <h3 className="mt-4 text-2xl font-semibold text-(--text-primary)">Fast delivery</h3>
            <p className="mt-3 text-(--text-muted)">
              Orders are prepared quickly and shipped with speed in mind, so you can start enjoying your purchases sooner.
            </p>
          </article>
          <article className="rounded-4xl bg-(--bg-panel) p-8 shadow-lg ring-1 ring-(--border) transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">insight</p>
            <h3 className="mt-4 text-2xl font-semibold text-(--text-primary)">Clean design</h3>
            <p className="mt-3 text-(--text-muted)">
              A simple, polished UI makes product browsing effortless on desktop and mobile.
            </p>
          </article>
          <article className="rounded-4xl bg-(--bg-panel) p-8 shadow-lg ring-1 ring-(--border) transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">insight</p>
            <h3 className="mt-4 text-2xl font-semibold text-(--text-primary)">Trusted choice</h3>
            <p className="mt-3 text-(--text-muted)">
              Built with React Router and modern tooling to keep navigation smooth and responsive.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-10 pb-16">
        <div className="rounded-4xl bg-(--bg-panel) p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-(--border)">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-(--text-primary)">Make shopping feel effortless.</h2>
              <p className="mt-5 text-(--text-muted) leading-8">
                FakeStore brings elegant visuals, fast navigation, and a friendly interface so your storefront demo stands out. Explore product categories, read quick details, and jump right into the shopping experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-(--bg-card) p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-(--text-primary)">Browse categories</h3>
                <p className="mt-3 text-(--text-muted)">
                  Fashion, electronics, home, and more are just one click away.
                </p>
              </div>
              <div className="rounded-3xl bg-(--bg-card) p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-(--text-primary)">Find favorites</h3>
                <p className="mt-3 text-(--text-muted)">
                  Search and filter product options instantly for a better browsing experience.
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
