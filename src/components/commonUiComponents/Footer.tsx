const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 px-6">
      <div className="max-w-6xl mx-auto border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
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
  );
};

export default Footer;
