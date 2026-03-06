import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutTeam from '../components/AboutTeam';
import Branches from '../components/Branches';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-12 pb-4 lg:pt-16 lg:pb-6">
        <AboutHero />
        <AboutStory />
        <AboutTeam />
        <Branches />
      </div>
    </main>
  );
}
