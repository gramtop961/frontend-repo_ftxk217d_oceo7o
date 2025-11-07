import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CharacterShowcase from './components/CharacterShowcase';
import MapPreview from './components/MapPreview';
import CountdownFooter from './components/CountdownFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroSection />
      <AboutSection />
      <CharacterShowcase />
      <MapPreview />
      <CountdownFooter />
    </div>
  );
}

export default App;
