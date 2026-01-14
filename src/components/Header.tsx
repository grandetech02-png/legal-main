import { useState, useRef, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Logo from '@/assets/Logo.png';

interface HeaderProps {
  currentPage: 'home' | 'people' | 'practice-areas' | 'contact';
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}

interface SearchResult {
  label: string;
  page: 'home' | 'people' | 'practice-areas' | 'contact';
  section?: string;
  keywords: string[];
}

const searchableContent: SearchResult[] = [
  { label: 'Home', page: 'home', keywords: ['home', 'inicio', 'main', 'welcome', 'hero', 'about us', 'boscia', 'legal'] },
  { label: 'About Us', page: 'home', section: 'about', keywords: ['about', 'about us', 'who we are', 'firm', 'company', 'mission'] },
  { label: 'People', page: 'people', keywords: ['people', 'team', 'staff', 'lawyers', 'attorneys', 'partners', 'associates'] },
  { label: 'Team Members', page: 'people', section: 'team', keywords: ['team', 'members', 'profiles', 'biography', 'bio'] },
  { label: 'Practice Areas', page: 'practice-areas', keywords: ['practice', 'areas', 'services', 'specialties', 'expertise'] },
  { label: 'Corporate Law', page: 'practice-areas', section: 'corporate', keywords: ['corporate', 'business', 'company', 'commercial'] },
  { label: 'Labor Law', page: 'practice-areas', section: 'labor', keywords: ['labor', 'employment', 'work', 'employee', 'employer'] },
  { label: 'Litigation', page: 'practice-areas', section: 'litigation', keywords: ['litigation', 'dispute', 'court', 'trial', 'lawsuit'] },
  { label: 'Contact', page: 'contact', keywords: ['contact', 'email', 'phone', 'address', 'location', 'reach', 'message'] },
  { label: 'Contact Form', page: 'contact', section: 'form', keywords: ['form', 'send', 'message', 'inquiry', 'consultation'] },
  { label: 'Office Location', page: 'contact', section: 'map', keywords: ['map', 'office', 'location', 'directions', 'address'] },
];

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNavClick = (page: 'home' | 'people' | 'practice-areas' | 'contact') => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchableContent.filter(item =>
      item.label.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(keyword => keyword.includes(lowerQuery))
    );
    setSearchResults(results);
  };

  const handleResultClick = (result: SearchResult) => {
    setCurrentPage(result.page);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    
    // Scroll to section if specified
    if (result.section) {
      setTimeout(() => {
        const element = document.getElementById(result.section!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="transition-opacity hover:opacity-80"
            >
              <img src={Logo} alt="Boscia Legal" className="h-12" />
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                currentPage === 'home'
                  ? 'text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('people')}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                currentPage === 'people'
                  ? 'text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              People
            </button>
            <button
              onClick={() => handleNavClick('practice-areas')}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                currentPage === 'practice-areas'
                  ? 'text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Practice Areas
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                currentPage === 'contact'
                  ? 'text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </button>
            
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-10 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in">
                  <div className="p-3 border-b border-gray-100">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  {searchResults.length > 0 && (
                    <div className="max-h-64 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleResultClick(result)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                        >
                          <div className="text-sm font-medium text-gray-900">{result.label}</div>
                          <div className="text-xs text-gray-500 capitalize">{result.page.replace('-', ' ')}</div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-sm text-gray-500 text-center">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('people')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              People
            </button>
            <button
              onClick={() => handleNavClick('practice-areas')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Practice Areas
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}