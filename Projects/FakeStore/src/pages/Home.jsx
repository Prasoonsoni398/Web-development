import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="min-h-[95vh] bg-slate-100 pb-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-700 px-6 py-16 text-white sm:px-10">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.35),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.3),_transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200 shadow-sm">
                curated for modern shopping
              </span>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
                Shop smarter with the easiest FakeStore experience.
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Browse trending products across categories, compare prices with confidence, and enjoy a polished UI designed for discovery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/product"
                  className="inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore Products
                </Link>
                <Link
                  to="/about"
                  className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] bg-white/10 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
              <div className="space-y-5">
                <div className="rounded-3xl bg-slate-950/90 p-6">
                  <h2 className="text-xl font-semibold text-white">Top categories</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Fashion, electronics, home, beauty and more — all in one place.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-800/90 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Popular</p>
                    <p className="mt-3 text-lg font-semibold text-white">New arrivals & deals</p>
                  </div>
                  <div className="rounded-3xl bg-slate-800/90 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Support</p>
                    <p className="mt-3 text-lg font-semibold text-white">Fast help anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-[32px] bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">insight</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Fast delivery</h3>
            <p className="mt-3 text-slate-600">
              Orders are prepared quickly and shipped with speed in mind, so you can start enjoying your purchases sooner.
            </p>
          </article>
          <article className="rounded-[32px] bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">insight</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Clean design</h3>
            <p className="mt-3 text-slate-600">
              A simple, polished UI makes product browsing effortless on desktop and mobile.
            </p>
          </article>
          <article className="rounded-[32px] bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">insight</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">Trusted choice</h3>
            <p className="mt-3 text-slate-600">
              Built with React Router and modern tooling to keep navigation smooth and responsive.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14 sm:px-10">
        <div className="rounded-[32px] bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Make shopping feel effortless.</h2>
              <p className="mt-5 text-slate-600 leading-8">
                FakeStore brings elegant visuals, fast navigation, and a friendly interface so your storefront demo stands out. Explore product categories, read quick details, and jump right into the shopping experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Browse categories</h3>
                <p className="mt-3 text-slate-600">Fashion, electronics, home, and more are just one click away.</p>
              </div>
              <div className="rounded-[24px] bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Find favorites</h3>
                <p className="mt-3 text-slate-600">Search and filter product options instantly for a better browsing experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
