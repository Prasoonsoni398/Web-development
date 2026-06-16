import React from 'react'

const About = () => {
  return (
    <main className="min-h-[95vh] bg-slate-100 pb-16">
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6 rounded-[32px] bg-white p-10 shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">
              our story
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Built for a clean and confident shopping experience.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              FakeStore is a polished storefront demo built with modern React, thoughtful UI, and sample product data. Every page is designed to feel inviting, fast, and accessible.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
                <p className="mt-3 text-slate-600">
                  Make online shopping simple and enjoyable with crisp product discovery.
                </p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-semibold text-slate-900">Vision</h2>
                <p className="mt-3 text-slate-600">
                  Inspire confidence in every visitor through thoughtful design and fast navigation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-cyan-500 to-blue-600 p-10 text-white shadow-[0_40px_80px_rgba(15,23,42,0.12)]">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/80">Fast facts</p>
            <h2 className="mt-5 text-3xl font-semibold">Why choose FakeStore?</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">Design</p>
                <p className="mt-2 text-lg font-semibold">Modern interface for everyone.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">Performance</p>
                <p className="mt-2 text-lg font-semibold">Smooth navigation across pages.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 shadow-inner">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100/90">Coverage</p>
                <p className="mt-2 text-lg font-semibold">Product, home, about, and contact ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">Simple navigation</h3>
            <p className="mt-3 text-slate-600 leading-7">
              Switching between pages is fast and intuitive thanks to React Router.
            </p>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">Responsive layout</h3>
            <p className="mt-3 text-slate-600 leading-7">
              The UI adapts cleanly across desktop and mobile screen sizes.
            </p>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">Demo-friendly</h3>
            <p className="mt-3 text-slate-600 leading-7">
              Easy to use for prototypes, demos, or building a storefront concept.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-12 sm:px-10">
        <div className="rounded-[32px] bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <h2 className="text-3xl font-bold text-slate-900">Our values</h2>
          <p className="mt-4 text-slate-600 leading-8">
            FakeStore is built around clarity, speed, and trust. We focus on helping users explore products without distractions and with a friendly UI.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Clarity</h3>
              <p className="mt-3 text-slate-600">Readable layouts and intuitive sections make every page easy to scan.</p>
            </div>
            <div className="rounded-[28px] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Speed</h3>
              <p className="mt-3 text-slate-600">Fast page transitions and product discovery help keep users engaged.</p>
            </div>
            <div className="rounded-[28px] bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Trust</h3>
              <p className="mt-3 text-slate-600">A modern store feel built with quality UI details and consistent layout.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
