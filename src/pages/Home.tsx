import Hero from '../components/Hero';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="animate-slideInFromRight">
      <Hero
        title="We Help You Navigate Uneven Terrain"
        subtitle="Expert legal counsel for civil litigation, criminal defense, and crime victims' rights"
        image="/1_home.jpeg"
        fullHeight
        cta={{
          text: 'Get Started',
          onClick: () => setCurrentPage('contact'),
        }}
      />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-teal-500"></div>
              <span className="text-teal-500 uppercase tracking-wider text-sm font-semibold">WHAT WE DO</span>
              <div className="h-px w-12 bg-teal-500"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Practice Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our firm specializes in key areas of law, providing expert guidance and representation to clients facing challenging legal situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Civil Litigation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Skilled representation in complex civil disputes, including business litigation, contract disputes, and personal injury claims.
              </p>
              <button
                onClick={() => setCurrentPage('practice-areas')}
                className="text-teal-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-yellow-500 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Crime Victims' Rights</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dedicated advocacy for victims of crime, ensuring their voices are heard and their rights are protected throughout the legal process.
              </p>
              <button
                onClick={() => setCurrentPage('practice-areas')}
                className="text-yellow-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-blue-900 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Criminal Defense</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aggressive defense strategies for those facing criminal charges, protecting your freedom and future with experienced counsel.
              </p>
              <button
                onClick={() => setCurrentPage('practice-areas')}
                className="text-blue-900 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('practice-areas')}
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              View All Practice Areas <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Expert Legal Counsel?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your case with one of our experienced attorneys
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
