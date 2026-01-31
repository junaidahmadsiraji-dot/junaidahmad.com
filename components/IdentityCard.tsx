
import React from 'react';

const IdentityCard: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="bg-card rounded-[40px] p-8 text-center flex flex-col items-center">
      <div className="w-24 h-24 rounded-full border-4 border-white/5 bg-white mb-6 overflow-hidden flex items-center justify-center">
        {/* Placeholder for the logo from the image */}
        <div className="text-black flex flex-col items-center scale-75">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <span className="text-[8px] font-black tracking-tighter -mt-1 uppercase">EduLogo</span>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4 tracking-wide uppercase">{name}</h2>
      
      <p className="text-xs text-muted leading-relaxed max-w-xs italic mb-8">
        "Student of Bangladesh Qawmi Education Board and International Digital Marketer, Video Editor, App & Website Developer."
      </p>

      <div className="w-12 h-[2px] bg-white/10 mb-8"></div>

      <button className="text-[10px] font-bold tracking-[0.2em] uppercase border border-white/10 px-6 py-3 rounded-full text-muted hover:border-white/40 hover:text-white transition-all">
        View Full Identity
      </button>
    </div>
  );
};

export default IdentityCard;
