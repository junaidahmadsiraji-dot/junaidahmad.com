
import React from 'react';
import { Youtube, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

interface SocialGridProps {
  socials: {
    tiktok: string;
    telegram: string;
    youtube: string;
    whatsapp: string;
    imo: string;
  }
}

const SocialGrid: React.FC<SocialGridProps> = ({ socials }) => {
  const links = [
    { name: "YOUTUBE", icon: <Youtube size={24} />, url: socials.youtube },
    { name: "TIKTOK", icon: <span className="text-2xl font-black">d</span>, url: socials.tiktok }, // Custom 'd' for TikTok vibe
    { name: "FACEBOOK", icon: <Facebook size={24} />, url: "#" },
    { name: "WHATSAPP", icon: <MessageCircle size={24} />, url: socials.whatsapp },
    { name: "IMO", icon: <span className="text-sm font-black">imo</span>, url: socials.imo },
    { name: "TELEGRAM", icon: <Send size={24} />, url: socials.telegram },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {links.map((link, idx) => (
        <a 
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card hover:bg-white/5 transition-all p-8 rounded-3xl flex flex-col items-center justify-center gap-4 text-center border border-white/5"
        >
          <div className="opacity-80">{link.icon}</div>
          <span className="text-[10px] font-black tracking-widest">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialGrid;
