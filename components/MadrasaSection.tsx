
import React from 'react';
import { BookOpen, MapPin, Mail, MessageCircle, ChevronRight } from 'lucide-react';

const MadrasaSection: React.FC = () => {
  return (
    <div className="bg-card rounded-[40px] p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
           <BookOpen size={18} />
        </div>
        <h2 className="text-lg font-bold">Our Education Organization Details:</h2>
      </div>

      <div className="space-y-10">
        {/* English Part */}
        <div>
          <div className="inline-block bg-white text-black text-[8px] font-black px-2 py-0.5 rounded mb-4 uppercase tracking-tighter">
            English
          </div>
          <p className="text-xs font-semibold mb-2">Humble request for help</p>
          <h3 className="text-sm font-bold mb-3">Darul Ihsan Mahila Madrasa</h3>
          <div className="flex items-start gap-2 text-[11px] text-muted mb-6">
            <MapPin size={14} className="mt-0.5 flex-shrink-0" />
            <p>Address: Mr. Haji Mohammad Lal Mia Molla Bari, Uttar Kandi, Mathabhanga, Homna, Comilla.</p>
          </div>
          <p className="text-[11px] text-muted leading-relaxed mb-4">
            Our beloved institution Darul Ihsan Mahila Madrasa provides religious and general education to numerous poor, helpless and orphaned girls of the area. 70% of the students studying in this madrasa are poor and orphans, and out of the remaining 30%, about 25% of the families are unable to pay their salaries properly.
          </p>
          <p className="text-[11px] font-bold italic leading-relaxed">
            Currently, this madrasa is in extreme financial crisis. It has become very difficult for us to continue operating the madrasa without the necessary help. If the madrasa is closed, many girls in this area will be deprived of the light of education and will be deprived of a beautiful future.
          </p>
        </div>

        {/* Bangla Part Summary */}
        <div className="pt-6 border-t border-white/5">
          <div className="inline-block bg-white text-black text-[8px] font-black px-2 py-0.5 rounded mb-4 uppercase tracking-tighter">
            Bangla
          </div>
          <p className="text-[12px] font-bold mb-2">বিনীত সাহায্যের আবেদন</p>
          <p className="text-[11px] text-muted leading-relaxed">
            দারুল ইহসান মহিলা মাদ্রাসা একটি অলাভজনক প্রতিষ্ঠান যা দরিদ্র ও এতিম মেয়েদের শিক্ষার আলো ছড়িয়ে দিচ্ছে। বর্তমানে প্রতিষ্ঠানটি চরম আর্থিক সংকটে রয়েছে। আপনার ক্ষুদ্র দান হতে পারে এই এতিম শিশুদের সোনালী ভবিষ্যতের চাবিকাঠি।
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1a1f26] p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#d81b60] flex items-center justify-center font-bold text-[10px] shrink-0">bKash</div>
            <div>
              <p className="text-[8px] uppercase tracking-wider text-muted font-bold">bKash Send Money</p>
              <p className="text-sm font-mono font-bold">01775101943</p>
            </div>
          </div>
          <div className="bg-[#1a1f26] p-4 rounded-2xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#f44336] flex items-center justify-center font-bold text-[10px] shrink-0">Nagad</div>
            <div>
              <p className="text-[8px] uppercase tracking-wider text-muted font-bold">Nagad Number</p>
              <p className="text-sm font-mono font-bold">01813374719</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-3 text-[10px] text-muted">
            <Mail size={14} />
            <span>Content Email: <span className="text-white font-medium">darulihsanmahilamadrasah@gmail.com</span></span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-muted">
            <MessageCircle size={14} />
            <span>Content WhatsApp: <span className="text-white font-medium">+880 1813374719</span></span>
          </div>
        </div>

        <button className="w-full bg-white text-black font-bold text-xs py-4 rounded-2xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
          Visit <ChevronRight size={16} />
        </button>

        <p className="text-center text-[8px] uppercase tracking-[0.3em] text-muted mt-8">
          MAY ALLAH ACCEPT YOUR DONATION AND REWARD YOU WITH GOOD. AMEN.
        </p>
      </div>
    </div>
  );
};

export default MadrasaSection;
