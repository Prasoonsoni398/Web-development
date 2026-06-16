import React from 'react'

const About = () => {
  return (
    <main className="min-h-screen bg-(--bg-page) text-(--text-primary) transition-colors duration-300">
      <section className="bg-gradient-to-br from-(--accent)/5 via-transparent to-transparent py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-8 rounded-[36px] bg-(--bg-panel) p-10 shadow-2xl ring-1 ring-(--border)">
              <span className="inline-flex rounded-full bg-(--accent)/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-(--accent)">
                our story
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-(--text-primary) sm:text-5xl">
                A storefront built to feel modern, friendly, and fast.
              </h1>
            <p className="max-w-3xl text-base leading-8 text-(--text-muted) sm:text-lg">
              FakeStore is a demo storefront built with React, clean layout patterns, and thoughtful page design. Every section is crafted to feel clear and inviting.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] bg-(--bg-card) p-6 ring-1 ring-(--border)">
                <h2 className="text-xl font-semibold text-(--text-primary)">Mission</h2>
                <p className="mt-3 text-(--text-muted)">
                  Make product browsing simple and enjoyable with a polished storefront experience.
                </p>
              </div>
              <div className="rounded-[28px] bg-(--bg-card) p-6 ring-1 ring-(--border)">
                <h2 className="text-xl font-semibold text-(--text-primary)">Vision</h2>
                <p className="mt-3 text-(--text-muted)">
                  Inspire trust through clarity, speed, and a consistent interface.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[28px] bg-(--bg-card) p-6 text-center ring-1 ring-(--border)">
                <p className="text-3xl font-bold text-(--text-primary)">150+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-(--text-muted)">Products</p>
              </div>
              <div className="rounded-[28px] bg-(--bg-card) p-6 text-center ring-1 ring-(--border)">
                <p className="text-3xl font-bold text-(--text-primary)">4.8</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-(--text-muted)">Avg rating</p>
              </div>
              <div className="rounded-[28px] bg-(--bg-card) p-6 text-center ring-1 ring-(--border)">
                <p className="text-3xl font-bold text-(--text-primary)">24/7</p>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-(--text-muted)">Support</p>
              </div>
            </div>
          </div>

            <div className="rounded-[36px] bg-gradient-to-br from-(--accent) to-(--accent)/80 p-10 text-slate-950 shadow-2xl ring-1 ring-(--accent)/30 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-900/70 font-semibold">Fast facts</p>
                <h2 className="mt-5 text-3xl font-bold text-slate-950">Why choose FakeStore?</h2>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl bg-white/95 p-5 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-900/70 font-semibold">✨ Design</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">A polished interface for any shopper.</p>
                  </div>
                  <div className="rounded-3xl bg-white/95 p-5 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-900/70 font-semibold">⚡ Performance</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">Fast browsing across every page.</p>
                  </div>
                  <div className="rounded-3xl bg-white/95 p-5 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-900/70 font-semibold">📦 Coverage</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">Home, products, about, and contact ready.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="group rounded-[28px] bg-(--bg-panel) p-8 shadow-2xl ring-1 ring-(--border) hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-(--accent)/5 group-hover:bg-(--accent)/10 blur-2xl transition" />
            <div className="relative z-10">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="text-lg font-semibold text-(--text-primary)">Simple navigation</h3>
              <p className="mt-3 text-(--text-muted) leading-7">
                Switching between pages is fast and intuitive thanks to React Router.
              </p>
            </div>
          </div>
          <div className="group rounded-[28px] bg-(--bg-panel) p-8 shadow-2xl ring-1 ring-(--border) hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-(--accent)/5 group-hover:bg-(--accent)/10 blur-2xl transition" />
            <div className="relative z-10">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-(--text-primary)">Responsive layout</h3>
              <p className="mt-3 text-(--text-muted) leading-7">
                The UI adapts beautifully across desktop and mobile screen sizes.
              </p>
            </div>
          </div>
          <div className="group rounded-[28px] bg-(--bg-panel) p-8 shadow-2xl ring-1 ring-(--border) hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-(--accent)/5 group-hover:bg-(--accent)/10 blur-2xl transition" />
            <div className="relative z-10">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-lg font-semibold text-(--text-primary)">Demo-friendly</h3>
              <p className="mt-3 text-(--text-muted) leading-7">
                Easy to use for prototypes, demos, or building a storefront concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-12 sm:px-10 pb-16">
        <div className="rounded-[28px] bg-(--bg-panel) p-10 shadow-2xl ring-1 ring-(--border) relative overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-(--accent)/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-(--text-primary)">Our values</h2>
            <p className="mt-4 text-(--text-muted) leading-8">
              FakeStore focuses on clarity, speed, and trust. We help users explore products without distraction and with a friendly layout.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="group rounded-[28px] bg-(--bg-card) p-6 ring-1 ring-(--border) hover:ring-2 hover:ring-(--accent) transition duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-lg font-semibold text-(--text-primary)">Clarity</h3>
                <p className="mt-3 text-(--text-muted)">Readable layouts and intuitive sections make every page easy to scan.</p>
              </div>
              <div className="group rounded-[28px] bg-(--bg-card) p-6 ring-1 ring-(--border) hover:ring-2 hover:ring-(--accent) transition duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-(--text-primary)">Speed</h3>
                <p className="mt-3 text-(--text-muted)">Fast page transitions and product discovery keep users engaged.</p>
              </div>
              <div className="group rounded-[28px] bg-(--bg-card) p-6 ring-1 ring-(--border) hover:ring-2 hover:ring-(--accent) transition duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-3">🔐</div>
                <h3 className="text-lg font-semibold text-(--text-primary)">Trust</h3>
                <p className="mt-3 text-(--text-muted)">A consistent store feel built with strong UI detail and layout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
