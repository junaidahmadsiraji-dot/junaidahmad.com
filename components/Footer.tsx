
import React from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Footer: React.FC<{ email: string }> = ({ email }) => {
  return (
    <footer className="mt-20 border-t border-white/5 pt-20 pb-10 text-center px-4">
      <p className="text-[8px] font-black tracking-[0.4em] text-muted uppercase mb-8">Get In Touch</p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <a href={`mailto:${email}`} className="bg-card px-6 py-3 rounded-full flex items-center gap-2 text-[10px] font-bold tracking-wider hover:bg-white hover:text-black transition-all">
          <Mail size={14} /> Email Content
        </a>
        <button className="bg-card px-6 py-3 rounded-full flex items-center gap-2 text-[10px] font-bold tracking-wider hover:bg-white hover:text-black transition-all">
          <MessageCircle size={14} /> WhatsApp
        </button>
        <button className="bg-card px-6 py-3 rounded-full flex items-center gap-2 text-[10px] font-bold tracking-wider hover:bg-white hover:text-black transition-all">
          <Send size={14} /> Telegram
        </button>
      </div>

      <div className="max-w-xs mx-auto h-[1px] bg-white/5 mb-8"></div>

      <p className="text-[8px] text-muted leading-relaxed uppercase tracking-[0.2em] opacity-50">
        © 2025 MOHAMMAD JUNAID AHMAD • ALL RIGHTS RESERVED<br/>
        DEDICATED TO SOCIAL SERVICE & MODERN EDUCATION
      </p>

      {/* Floating Chat Trigger Mock */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
           <MessageCircle size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
