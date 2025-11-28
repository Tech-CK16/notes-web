import { useState } from "react";
import { LogIn, Menu, X, Feather } from "lucide-react";
import { Link } from "react-router-dom";

// Responsive, light-only landing page for NoteNest
// - Tailwind classes for full responsiveness (mobile-first)
// - Mobile nav with accessible toggle
// - Glass/aesthetic look, hero, features, footer

export default function NotesLanding() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-sm">
              <Link to="/">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    fill="url(#g)"
                  />
                  <path
                    d="M6 9h12M6 13h8"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>

            <div>
              <h1 className="text-base sm:text-lg font-semibold text-slate-800">
                NoteNest
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                A calm, beautiful place for your thoughts
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              to="/signin"
              className="text-sm text-slate-700 hover:underline flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" /> Sign in
            </Link>
            <Link to="/signup" className="inline-flex items-center">
              <button className="rounded-lg px-3 py-2 bg-slate-900 text-white text-sm shadow">
                Sign up
              </button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/70 backdrop-blur-md border border-white/20"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile nav panel */}
        <div className={`${open ? "block" : "hidden"} md:hidden mt-4`}>
          <div className="rounded-xl p-4 bg-white/80 border border-white/20 shadow">
            <Link to="/signin" className="block text-sm text-slate-700 py-2">
              Sign in
            </Link>
            <Link to="/signup" className="block text-sm text-slate-700 py-2">
              Sign up
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl p-8 sm:p-10 bg-white/80 backdrop-blur-md border border-white/30 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
              Your ideas, organised with calm
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              NoteNest helps you capture thoughts quickly, organise with tags,
              and find them instantly. Lightweight, private, and designed to
              keep you focused.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#signup"
                className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 font-medium shadow"
              >
                Get started
              </a>
              <a
                href="#features"
                className="text-sm text-slate-700 hover:underline"
              >
                See features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/60 border border-white/20">
                <h4 className="text-sm font-semibold text-slate-900">
                  Quick capture
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Jot down ideas with minimal friction.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/60 border border-white/20">
                <h4 className="text-sm font-semibold text-slate-900">
                  Organised tags
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Group notes with tags for fast filtering.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/60 border border-white/20">
                <h4 className="text-sm font-semibold text-slate-900">
                  Fast search
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Find notes instantly with smart search.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/60 border border-white/20">
                <h4 className="text-sm font-semibold text-slate-900">
                  Privacy first
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your notes are private by default.
                </p>
              </div>
            </div>
          </div>

          {/* Right visual panel */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white/70 backdrop-blur-md border border-white/20 shadow-lg">
            <div className="h-44 sm:h-48 rounded-lg bg-gradient-to-br from-white to-slate-100 border border-white/30 flex items-center justify-center">
              <div className="text-center px-4">
                <Feather className="w-12 h-12 mx-auto text-slate-600" />
                <p className="mt-2 text-sm text-slate-600">
                  Minimal, distraction-free editor
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-white/60 border border-white/20 text-center">
                <p className="text-xs text-slate-600">Lightweight & fast</p>
              </div>
              <div className="p-3 rounded-lg bg-white/60 border border-white/20 text-center">
                <p className="text-xs text-slate-600">Works offline</p>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-slate-500">
              No clutter. Just your thoughts.
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-10">
          <h3 className="text-2xl font-semibold text-slate-900">Features</h3>
          <p className="text-sm text-slate-600 mt-2">
            Everything you need to capture and find ideas quickly.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-lg bg-white/80 border border-white/20">
              <h4 className="font-semibold">Rich editor</h4>
              <p className="text-xs text-slate-600 mt-1">
                Formatting for notes, code snippets, and lists.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/80 border border-white/20">
              <h4 className="font-semibold">Tags & folders</h4>
              <p className="text-xs text-slate-600 mt-1">
                Organise your work the way you think.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/80 border border-white/20">
              <h4 className="font-semibold">Search & filters</h4>
              <p className="text-xs text-slate-600 mt-1">
                Find notes instantly with smart search.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white/80 border border-white/20">
              <h4 className="font-semibold">Export & backup</h4>
              <p className="text-xs text-slate-600 mt-1">
                Export notes or keep a local backup easily.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-8">
          <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} NoteNest — Made with care
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#privacy" className="hover:underline">
                Privacy
              </a>
              <a href="#terms" className="hover:underline">
                Terms
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
