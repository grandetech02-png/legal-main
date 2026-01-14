import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from '@/assets/Logo.png';
interface FooterProps {
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}
export default function Footer({
  setCurrentPage
}: FooterProps) {
  return <footer className="bg-[#1e3a5f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src={Logo} alt="Boscia Legal" className="h-12 brightness-0 invert" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Expert legal counsel for civil litigation, criminal defense, and crime victims' rights.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => {
                setCurrentPage('home');
                window.scrollTo(0, 0);
              }} className="text-gray-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('people')} className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('practice-areas')} className="text-gray-300 hover:text-white transition-colors">
                  Practice Areas
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Practice Areas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => setCurrentPage('practice-areas')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Civil Litigation
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('practice-areas')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Criminal Defense
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('practice-areas')} className="text-gray-300 hover:text-white transition-colors text-left">
                  Crime Victims' Rights
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2a4f7c] rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">1960 The Alameda, Suite 185</div>
                  <div>San Jose, CA 95126</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2a4f7c] rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-gray-300">
                  <a href="tel:+14087536224" className="hover:text-white transition-colors">
                    (408) 753-6224
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2a4f7c] rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-gray-300">
                  <a href="mailto:info@grandesv.com" className="hover:text-white transition-colors">info@grandesv.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#2a4f7c] rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-gray-300">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 10:00 AM - 2:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a4f7c] mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Boscia Legal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}