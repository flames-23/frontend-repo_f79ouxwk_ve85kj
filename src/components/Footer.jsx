export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-zinc-400 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {year} Mars Bites — Taste Beyond Earth</p>
        <div className="text-sm">Built for explorers among the stars</div>
      </div>
    </footer>
  );
}
