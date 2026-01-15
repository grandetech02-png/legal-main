import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'people' | 'practice-areas' | 'contact'>(() => {
    const saved = localStorage.getItem('currentPage');
    return (saved as 'home' | 'people' | 'practice-areas' | 'contact') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSetPage = (page: 'home' | 'people' | 'practice-areas' | 'contact') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={handleSetPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={handleSetPage} />}
        {currentPage === 'people' && <People setCurrentPage={handleSetPage} />}
        {currentPage === 'practice-areas' && <PracticeAreas setCurrentPage={handleSetPage} />}
        {currentPage === 'contact' && <Contact setCurrentPage={handleSetPage} />}
      </main>
      <Footer setCurrentPage={handleSetPage} />
    </div>
  );
}

export default App;
