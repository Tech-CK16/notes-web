import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-6 max-w-6xl mx-auto flex items-start">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-sm">
          <Link to="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#g)" />
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
          <div className="text-base font-semibold text-slate-800">NoteNest</div>
          <div className="text-xs text-slate-500">
            A calm place for your thoughts
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
