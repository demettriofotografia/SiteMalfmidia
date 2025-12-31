
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsCarousel from './components/BrandsCarousel';
import TeamEquity from './components/TeamEquity';
import WorksCarousel from './components/WorksCarousel';
import BehindTheScenes from './components/BehindTheScenes';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import BackgroundTexture from './components/BackgroundTexture';
import EntryPage from './components/EntryPage';
import VideoSection from './components/VideoSection';

const App: React.FC = () => {
  // Inicializa como falso a menos que já tenha validado na sessão atual
  const [isAuthorized, setIsAuthorized] = useState(() => {
    return sessionStorage.getItem('malf_authorized') === 'true';
  });

  const [content] = useState({
    images: {},
    texts: {},
    videos: {}
  });

  const [activeTabs, setActiveTabs] = useState<Record<string, boolean>>({
    team: false,
    works: false,
    about: false,
    backstage: false,
    quote: false,
    faq: false,
  });

  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthorized) return;

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const handleScroll = () => {
      const trigger = 120; 
      const sections = ['team', 'works', 'about', 'backstage', 'quote', 'faq'];
      const newState: Record<string, boolean> = {};
      let lastActive = null;
      
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          newState[id] = rect.top <= window.innerHeight * 0.8;
          if (rect.top <= trigger + 50) {
            lastActive = id;
          }
        }
      });
      
      setCurrentSection(lastActive);
      setActiveTabs(prev => {
        const hasChanged = sections.some(id => prev[id] !== newState[id]);
        return hasChanged ? { ...prev, ...newState } : prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAuthorized]);

  const handleTabClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, []);

  const handleUnlock = () => {
    setIsAuthorized(true);
    sessionStorage.setItem('malf_authorized', 'true');
    window.scrollTo(0, 0);
  };

  const tabs = useMemo(() => [
    { id: 'team', label: 'SOBRE NÓS' },
    { id: 'works', label: 'NOSSO MÉTODO' },
    { id: 'about', label: 'APRESENTAÇÃO' },
    { id: 'backstage', label: 'BACKSTAGE' },
    { id: 'quote', label: 'ORÇAMENTO' },
    { id: 'faq', label: 'FAQ' },
  ], []);

  // Se não estiver autorizado, renderiza APENAS a EntryPage (Portaria)
  if (!isAuthorized) {
    return <EntryPage onUnlock={handleUnlock} content={content} />;
  }

  return (
    <main className="relative min-h-screen">
      <BackgroundTexture />
      <Navbar 
        tabs={tabs} 
        activeTabs={activeTabs} 
        currentSection={currentSection} 
        onTabClick={handleTabClick} 
      />
      <div className="relative z-10">
        <Hero content={content} />
        <BrandsCarousel />
        <div className="flex flex-col relative bg-transparent">
          <section id="team"><TeamEquity content={content} /></section>
          <section id="works"><WorksCarousel content={content} /></section>
          <VideoSection 
            subtitle="Demo Reel"
            title="Produção de Elite"
            videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
          />
          <section id="about"><AboutUs content={content} /></section>
          <section id="backstage"><BehindTheScenes /></section>
          <section id="quote"><QuoteForm /></section>
          <section id="faq"><FAQ /><Footer /></section>
        </div>
      </div>
    </main>
  );
};

export default App;
