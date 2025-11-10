import { useEffect, useState } from 'react';
import { Rocket, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled
    ? 'bg-zinc-900/70 backdrop-blur-md border-zinc-800'
    : 'bg-transparent border-transparent';

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${navClass}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          className="flex items-center gap-2 text-white"
          onClick={() => handleNav('hero')}
          aria-label="Go to top"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/20">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-wide">Mars Bites</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-200">
          <button className="hover:text-white transition" onClick={() => handleNav('menu')}>Menu</button>
          <button className="hover:text-white transition" onClick={() => handleNav('experience')}>Experience</button>
          <a
            href="#reservation"
            onClick={(e) => { e.preventDefault(); handleNav('experience'); }}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10 transition"
          >
            Reserve
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-2 text-zinc-200">
            <button className="py-2 text-left" onClick={() => handleNav('menu')}>Menu</button>
            <button className="py-2 text-left" onClick={() => handleNav('experience')}>Experience</button>
            <button className="py-2 text-left" onClick={() => handleNav('experience')}>Reserve</button>
          </div>
        </div>
      )}
    </header>
  );
}
