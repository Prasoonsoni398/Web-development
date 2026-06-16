import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-[90vh] bg-slate-100 pb-16">
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
          <div className="rounded-4xl bg-slate-950 px-8 py-10 text-white shadow-[0_30px_60px_rgba(15,23,42,0.18)]">
            <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200">
              get in touch
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              We’re here to help.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Questions about product features, store setup, or using the demo? Send a message and our team will respond quickly.
            </p>
            <div className="mt-10 grid gap-5 rounded-[28px] bg-white/5 p-6 ring-1 ring-white/10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">support@fakestore.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">123 Market Street, Demo City</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Availability</p>
                <p className="mt-2 text-lg font-semibold text-white">Mon - Fri, 9am - 6pm</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-3xl font-bold text-slate-900">Send a message</h2>
            <p className="mt-3 text-slate-600">
              Use the form below and we’ll reach out shortly.
            </p>
            <form className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Subject
                <input
                  type="text"
                  placeholder="Message subject"
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  rows="6"
                  placeholder="How can we help you?"
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <button
                type="submit"
                className="rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 rounded-[28px] bg-slate-50 p-6 text-slate-700 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Need fast support?</p>
              <p className="mt-3 text-base leading-7">
                You can also reach us by email or visit our office. We’ll respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
