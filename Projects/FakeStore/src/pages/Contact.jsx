import React from 'react'

const Contact = () => {
  return (
    <main className="min-h-screen bg-(--bg-page) text-(--text-primary) pb-16 transition-colors duration-300">
      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8 rounded-[36px] bg-(--bg-panel) p-10 shadow-2xl ring-1 ring-(--border)">
            <span className="inline-flex rounded-full bg-(--accent)/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-(--accent)">
              contact us
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-(--text-primary) sm:text-5xl">
                We’re ready to support your next project.
              </h1>
              <p className="max-w-3xl text-base leading-8 text-(--text-muted) sm:text-lg">
                Whether you're asking about the store layout, product ideas, or the demo itself, send us a quick note and we'll respond promptly.
              </p>
            </div>
            <div className="grid gap-5 rounded-[28px] bg-(--bg-card) p-7 ring-1 ring-(--border)">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-(--accent)/90">Email</p>
                <p className="mt-2 text-xl font-semibold text-(--text-primary)">support@fakestore.com</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-(--accent)/90">Visit</p>
                <p className="mt-2 text-xl font-semibold text-(--text-primary)">123 Market Street, Demo City</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-(--accent)/90">Hours</p>
                <p className="mt-2 text-xl font-semibold text-(--text-primary)">Mon - Fri · 9am - 6pm</p>
              </div>
            </div>
            <div className="rounded-[28px] bg-(--bg-card) p-6 ring-1 ring-(--border)">
              <p className="text-sm uppercase tracking-[0.35em] text-(--accent)/80">Need faster help?</p>
              <p className="mt-3 text-(--text-muted) leading-7">
                Reach out with a short summary and we aim to respond within one business day.
              </p>
            </div>
          </div>

          <div className="rounded-[36px] bg-(--bg-panel) p-10 shadow-2xl ring-1 ring-(--border)">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-(--accent)/80">Send a message</p>
                <h2 className="mt-3 text-3xl font-bold text-(--text-primary)">Start a conversation</h2>
              </div>
              <div className="rounded-full bg-(--accent)/15 px-4 py-2 text-sm font-semibold text-(--accent)">
                Response in 24h
              </div>
            </div>
            <p className="mt-4 text-(--text-muted)">
              Fill out the details below and our team will be in touch with the next steps.
            </p>

            <form className="mt-8 grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-(--text-primary)">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-3xl border border-(--border) bg-(--bg-card) px-4 py-3 text-(--text-primary) outline-none transition focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-(--text-primary)">
                Email
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="rounded-3xl border border-(--border) bg-(--bg-card) px-4 py-3 text-(--text-primary) outline-none transition focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-(--text-primary)">
                Subject
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="rounded-3xl border border-(--border) bg-(--bg-card) px-4 py-3 text-(--text-primary) outline-none transition focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-(--text-primary)">
                Message
                <textarea
                  rows="5"
                  placeholder="Share the details of your request"
                  className="rounded-3xl border border-(--border) bg-(--bg-card) px-4 py-3 text-(--text-primary) outline-none transition focus:border-(--accent) focus:ring-4 focus:ring-(--accent)/10"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-(--accent) px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
