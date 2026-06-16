import React, { useState } from "react";
import { IoClose, IoMenu, IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500 text-2xl shadow-lg shadow-cyan-500/20">
            <IoStorefrontSharp />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">FakeStore</p>
            <h1 className="text-xl font-semibold text-white">Your store</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 text-sm font-medium text-slate-100 md:flex">
          <Link to="/" className="rounded-full px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-300">
            Home
          </Link>
          <Link to="/about" className="rounded-full px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-300">
            About
          </Link>
          <Link to="/product" className="rounded-full px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-300">
            Product
          </Link>
          <Link to="/contact" className="rounded-full px-3 py-2 transition hover:bg-slate-900 hover:text-cyan-300">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/product"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400"
          >
            Shop now
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-white transition hover:border-cyan-500 md:hidden"
        >
          {menuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden bg-slate-950 text-slate-100 transition-[max-height] duration-300 ease-in-out ${menuOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"}`}>
        <nav className="space-y-3 border-t border-slate-800 px-4 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block rounded-3xl px-5 py-3 transition hover:bg-slate-900 hover:text-cyan-300">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block rounded-3xl px-5 py-3 transition hover:bg-slate-900 hover:text-cyan-300">
            About
          </Link>
          <Link to="/product" onClick={() => setMenuOpen(false)} className="block rounded-3xl px-5 py-3 transition hover:bg-slate-900 hover:text-cyan-300">
            Product
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block rounded-3xl px-5 py-3 transition hover:bg-slate-900 hover:text-cyan-300">
            Contact
          </Link>
        </nav>
        <div className="border-t border-slate-800 px-4 py-4">
          <Link
            to="/product"
            onClick={() => setMenuOpen(false)}
            className="block rounded-full bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Shop now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
