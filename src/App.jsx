import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for in-page navigation
    if ('scrollBehavior' in document.documentElement.style) return;
    const handler = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar />
      <main className="[scrollbar-width:thin]">
        <Hero />
        <MenuShowcase />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
