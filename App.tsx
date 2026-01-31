
import React, { useState } from 'react';
import { 
  Youtube, 
  Send, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Heart,
  BookOpen,
  X
} from 'lucide-react';

// Components
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import IdentityCard from './components/IdentityCard';
import MadrasaSection from './components/MadrasaSection';
import FoundationSection from './components/FoundationSection';
import SocialGrid from './components/SocialGrid';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';

const App: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const personalInfo = {
    name: "MOHAMMAD JUNAID AHMAD",
    titles: ["SOFTWARE DEVELOPER", "VIDEO EDITOR", "DIGITAL MARKETER"],
    email: "junaid0668478@gmail.com",
    socials: {
      tiktok: "https://www.tiktok.com/@junaid.ahmad_07",
      telegram: "https://t.me/junaid06684",
      youtube: "https://www.youtube.com/@Caption_Galary",
      whatsapp: "https://whatsapp.com/channel/0029VbBZUMb7YSd58Z5E0J1F",
      imo: "https://s.channelcom.tech/10oixT?from=copy_link"
    }
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-blue-500/30">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 pt-10 space-y-12">
        {/* Hero Profile Card */}
        <section id="home">
          <ProfileCard 
            info={personalInfo} 
            onViewIdentity={() => setIsAboutOpen(true)}
          />
        </section>

        {/* Identity Details Card */}
        <section id="identity">
          <IdentityCard name={personalInfo.name} />
        </section>

        {/* Madrasa Appeal Section */}
        <section id="madrasa">
          <MadrasaSection />
        </section>

        {/* Foundation Section */}
        <section id="foundation">
          <FoundationSection />
        </section>

        {/* Digital Presence Grid */}
        <section id="links">
          <h2 className="text-center text-xl font-bold mb-6 tracking-wide">Digital Presence</h2>
          <SocialGrid socials={personalInfo.socials} />
        </section>
      </main>

      <Footer email={personalInfo.email} />

      {/* About Modal */}
      {isAboutOpen && (
        <AboutModal 
          isOpen={isAboutOpen} 
          onClose={() => setIsAboutOpen(false)} 
          whatsappUrl={personalInfo.socials.whatsapp}
        />
      )}
    </div>
  );
};

export default App;
