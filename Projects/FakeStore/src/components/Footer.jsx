import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-8 lg:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500 text-2xl text-slate-950 shadow-lg shadow-cyan-500/20">
              F
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">FakeStore</p>
              <p className="text-lg font-semibold text-white">Your store</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            A modern demo storefront built for clean shopping experiences, fast navigation, and beautiful responsive UI.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="transition hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/product" className="transition hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">Support</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="transition hover:text-white">help@fakestore.com</li>
              <li className="transition hover:text-white">+1 (555) 987-6543</li>
              <li className="transition hover:text-white">123 Market Street</li>
              <li className="transition hover:text-white">Demo City, USA</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">About</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              FakeStore is a sleek demo storefront for product browsing, built using React and Tailwind CSS with a focus on speed and clarity.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500 sm:px-8 lg:px-10">
        © 2026 FakeStore. Built as a polished shopping experience demo.
      </div>
    </footer>
  )
}

export default Footer