
import React from 'react';
import { ShieldCheck, MapPin, Heart, MessageCircle, Phone } from 'lucide-react';

const FoundationSection: React.FC = () => {
  const members = [
    { name: "Md Alamgir Hossain", role: "CHAIRMAN", location: "Member Bari, Joydebpur, Mathabhanga, Homna, Comilla", phone: "01918026334" },
    { name: "Md Yeasin", role: "VICE CHAIRMAN", location: "Member Bari, Joydebpur, Mathabhanga, Homna, Comilla", phone: "01911053863" },
    { name: "Md Kamruzzaman", role: "GENERAL SECRETARY", location: "Kanu Doctor Bari, Joydebpur, Mathabhanga, Homna, Comilla", phone: "01775101943" },
    { name: "Nazmul Hoque", role: "JOINT SECRETARY", location: "Doctor Bari, Majidpur, Titas, Comilla", phone: "01879060952" },
    { name: "Md Eman Hossain", role: "TREASURER", location: "Bhuiyan Bari, Keshabpur, Jagatpur, Batakandi, Titas, Comilla", phone: "01903368213" },
  ];

  return (
    <div className="bg-card rounded-[40px] p-8 md:p-10 border border-white/5 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheck className="text-blue-500" size={24} />
        <h2 className="text-sm font-black tracking-widest uppercase">HUMAN AID ORGANIZATION</h2>
      </div>

      <h3 className="text-xl font-black mb-4 uppercase tracking-tight">VP IBRAHIM FOUNDATION</h3>
      
      <div className="flex items-start gap-2 text-[10px] text-muted mb-6">
        <MapPin size={12} className="mt-0.5 flex-shrink-0" />
        <p>Office: Joydebpur Saddam Bazar, Mathabhanga, Homna, Comilla, Bangladesh.</p>
      </div>

      <div className="p-6 bg-white/5 rounded-3xl mb-10 italic">
        <p className="text-xs text-muted leading-relaxed">
          "A humanitarian non-profit organization dedicated to helping the poor and helpless. Founded on February 1, 2025, with a mission to serve the community through social welfare and educational support."
        </p>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] flex-grow bg-white/10"></div>
          <span className="text-[8px] font-bold tracking-[0.3em] text-muted uppercase">Executive Committee Members</span>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="space-y-4">
          {members.map((member, i) => (
            <div key={i} className="bg-white/5 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-xs opacity-50"><ShieldCheck size={16} /></span>
                </div>
                <div>
                  <h4 className="text-sm font-bold">{member.name}</h4>
                  <p className="text-[8px] font-black tracking-widest text-muted">{member.role}</p>
                </div>
              </div>
              
              <div className="md:text-right space-y-2">
                <div className="text-[9px] text-muted flex md:justify-end items-center gap-1">
                  <MapPin size={10} /> {member.location.split(',')[0]}...
                </div>
                <div className="flex md:justify-end gap-2">
                  <button className="flex items-center gap-1 bg-[#128c7e]/20 text-[#25d366] text-[8px] font-bold px-2 py-1 rounded-md border border-[#25d366]/20">
                    <MessageCircle size={10} /> WHATSAPP
                  </button>
                  <button className="flex items-center gap-1 bg-white/10 text-white text-[8px] font-bold px-2 py-1 rounded-md border border-white/20">
                    <Phone size={10} /> CALL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-[#121821] p-8 rounded-[35px] relative overflow-hidden">
        {/* Subtle Crown Watermark */}
        <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
          <ShieldCheck size={80} />
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 text-black border-4 border-white/10">
            <span className="font-black text-[10px]">FOUNDER</span>
          </div>
          <p className="text-[8px] font-black tracking-[0.3em] text-muted uppercase mb-1">Organization Founder</p>
          <h4 className="text-2xl font-black tracking-tight mb-2">VP IBRAHIM</h4>
          
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-white/10 text-[9px] font-bold px-3 py-1 rounded-full border border-white/5">Italy Expatriate 🇮🇹</span>
            <span className="text-[10px] font-mono font-bold text-muted flex items-center gap-1">
              <MessageCircle size={12} className="text-green-500" /> +39 389 887 5685
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full">
            <button className="flex-1 bg-[#25d366] text-black font-black text-[10px] py-4 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </button>
            <button className="flex-1 bg-white text-black font-black text-[10px] py-4 rounded-xl uppercase tracking-widest flex items-center justify-center gap-2">
              <Phone size={16} /> Call Founder
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-[8px] uppercase tracking-[0.3em] text-muted mt-10">
        WORKING TOGETHER FOR HUMANITY • VP IBRAHIM FOUNDATION
      </p>
    </div>
  );
};

export default FoundationSection;
