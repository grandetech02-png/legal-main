import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import People from './pages/People';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'people' | 'practice-areas' | 'contact'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'people' && <People setCurrentPage={setCurrentPage} />}
        {currentPage === 'practice-areas' && <PracticeAreas setCurrentPage={setCurrentPage} />}
        {currentPage === 'contact' && <Contact setCurrentPage={setCurrentPage} />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
