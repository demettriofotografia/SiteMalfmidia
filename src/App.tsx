import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const tabs = [
    { id: 'hero', label: 'INÍCIO' },
    { id: 'video', label: 'DEMO' },
  ];

  return (
    <main style={{ fontFamily: 'sans-serif' }}>
      <Navbar tabs={tabs} />
      <section id="hero">
        <Hero />
      </section>
      <section id="video">
        <VideoSection
          title="Demo Reel"
          subtitle="Produção de Elite"
          videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
      </section>
      <Footer />
    </main>
  );
};

export default App;
