import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ResourcesPage from './components/ResourcesPage';
import ResourceDetailPage from './components/ResourceDetailPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [pageToRender, setPageToRender] = useState('home');

  // Handle page changes with animation
  const changePage = (newPage) => {
    // Only change if it's a different page
    if (newPage !== currentPage) {
      // Start fade out animation (very subtle)
      setIsPageVisible(false);

      // After animation completes, change the page content
      setTimeout(() => {
        // Scroll to top
        window.scrollTo(0, 0);
        // Update page
        setPageToRender(newPage);
        setCurrentPage(newPage);
        // Start fade in animation
        setTimeout(() => {
          setIsPageVisible(true);
        }, 50); // Small delay before fade in for smoother transition
      }, 200); // Shorter duration for subtlety
    }
  };

  // Handle initial load
  useEffect(() => {
    // Set initial page to visible (for first load)
    setIsPageVisible(true);
  }, []);

  // Close mobile menu if it's open when navigating
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch(pageToRender) {
      case 'home':
        return <HomePage setCurrentPage={changePage} />;
      case 'resources':
        return <ResourcesPage setCurrentPage={changePage} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'resource-detail':
        return <ResourceDetailPage />;
      default:
        return <HomePage setCurrentPage={changePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={changePage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div
      >
        {renderPage()}
      </div>
      <Footer setCurrentPage={changePage} />
    </div>
  );
};

export default App;