import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-(--footer-bg) text-(--text-primary) border-t border-(--border)">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--accent) text-2xl text-slate-950 shadow-lg shadow-[var(--accent)]/20">
              F
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-(--accent)">FakeStore</p>
              <p className="text-lg font-semibold text-(--text-primary)">Your store</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-(--text-muted)">
            A modern demo storefront built for clean shopping experiences, fast navigation, and beautiful responsive UI.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-(--text-muted)">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-(--text-primary)">
              <li>
                <Link to="/" className="transition hover:text-(--accent)">Home</Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-(--accent)">About</Link>
              </li>
              <li>
                <Link to="/product" className="transition hover:text-(--accent)">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-(--accent)">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-(--text-muted)">Support</h2>
            <ul className="mt-5 space-y-3 text-sm text-(--text-primary)">
              <li className="transition hover:text-(--accent)">help@fakestore.com</li>
              <li className="transition hover:text-(--accent)">+1 (555) 987-6543</li>
              <li className="transition hover:text-(--accent)">123 Market Street</li>
              <li className="transition hover:text-(--accent)">Demo City, USA</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-(--text-muted)">About</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-(--text-muted)">
              FakeStore is a sleek demo storefront for product browsing, built using React and Tailwind CSS with a focus on speed and clarity.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-(--border) px-6 py-6 text-center text-sm text-(--text-muted) sm:px-8 lg:px-10">
        © 2026 FakeStore. Built as a polished shopping experience demo.
      </div>
    </footer>
  )
}

export default Footer