
import React from 'react';
import { Youtube, Send, MessageCircle, ShieldCheck } from 'lucide-react';

interface ProfileCardProps {
  info: {
    name: string;
    titles: string[];
    socials: any;
  };
  onViewIdentity: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ info, onViewIdentity }) => {
  return (
    <div className="bg-card rounded-[40px] p-10 text-center shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 leading-tight">
        {info.name.split(' ').map((part, i) => (
          <span key={i} className="block">{part}</span>
        ))}
      </h1>

      {/* Simple Round Social Buttons */}
      <div className="flex justify-center gap-3 mb-10">
        {[
          { icon: <Youtube size={16} />, link: info.socials.youtube },
          { icon: <Send size={16} />, link: info.socials.telegram },
          { icon: <MessageCircle size={16} />, link: info.socials.whatsapp },
          { icon: <span className="text-[10px] font-bold">imo</span>, link: info.socials.imo }
        ].map((item, idx) => (
          <a 
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-muted mb-10 uppercase flex flex-wrap justify-center gap-2">
        {info.titles.join(' • ')}
      </div>

      <button 
        onClick={onViewIdentity}
        className="bg-white text-black font-bold text-xs px-10 py-4 rounded-full uppercase tracking-widest hover:scale-105 transition-transform active:scale-95"
      >
        Visit My Channel
      </button>

      <div className="mt-12 flex items-center justify-center gap-2 text-[8px] uppercase tracking-widest text-muted opacity-50">
        <ShieldCheck size={12} />
        Verified Official Profile — Identity Secured & Permanent
      </div>
    </div>
  );
};

export default ProfileCard;
