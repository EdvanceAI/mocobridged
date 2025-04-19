import React from 'react';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import EventsSection from './EventsSection';
import MissionSection from './MissionSection';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div>
      <HeroSection setCurrentPage={setCurrentPage} />
      <MissionSection />
      <EventsSection />
      <CategorySection setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default HomePage;