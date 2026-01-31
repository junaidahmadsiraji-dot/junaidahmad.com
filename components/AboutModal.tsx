
import React from 'react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, whatsappUrl }) => {
  if (!isOpen) return null;

  const expertises = [
    "App Development", "Website Development", "Video Editing", 
    "Photo Editing", "Digital Marketing", "Content Creation"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="bg-[#0f172a] w-full max-w-md rounded-[40px] p-8 md:p-10 relative border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-muted hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-xl font-bold mb-8 pr-10">About MOHAMMAD JUNAID AHMAD</h3>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed mb-10">
          <p>
            Mohammad Junaid Ahmad is a dedicated student of Bangladesh Qawmi Education Board and Alia Madrasah, currently continuing his academic journey while actively building a professional career in the digital world.
          </p>
          <p>
            He has developed strong technical and creative skills including Video Editing, Photo Editing, App Development, Website Development, Digital Marketing, and content creation for online platforms. His long-term vision is to combine traditional education with modern innovation, support communities through technology, and inspire young learners.
          </p>
        </div>

        <div className="mb-10">
          <p className="text-[10px] font-black tracking-widest text-muted uppercase mb-4">Core Expertise</p>
          <div className="flex flex-wrap gap-2">
            {expertises.map((skill, i) => (
              <span key={i} className="bg-white/10 text-[9px] font-bold px-3 py-1.5 rounded-full border border-white/5">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white text-black text-center font-bold text-xs py-4 rounded-2xl uppercase tracking-widest hover:bg-slate-200 transition-all"
        >
          Visit My WhatsApp Channel
        </a>
      </div>
    </div>
  );
};

export default AboutModal;
