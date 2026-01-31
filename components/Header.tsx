
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#06090e]/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-sm tracking-tighter">M.J.A</div>
        <div className="flex gap-6 text-[10px] font-semibold uppercase tracking-widest text-muted">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#madrasa" className="hover:text-white transition-colors">Madrasa</a>
          <a href="#foundation" className="hover:text-white transition-colors">Foundation</a>
          <a href="#links" className="hover:text-white transition-colors">Links</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
