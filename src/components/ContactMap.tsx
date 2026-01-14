import { MapPin } from 'lucide-react';

export default function ContactMap() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
            <MapPin className="w-5 h-5" />
          </div>
          Our Location
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          Visit our office in the heart of San Francisco's Financial District
        </p>
      </div>
      
      {/* Map Container */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100">
        <iframe
          title="Law Firm Office Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-122.41%2C37.78%2C-122.38%2C37.80&layer=mapnik&marker=37.7904%2C-122.3964"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          aria-label="Map showing office location at 123 Legal Ave, San Francisco"
        />
        
        {/* Map Overlay with Address */}
        <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-xs">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">LawFirm Headquarters</h4>
                <p className="text-gray-600 text-xs mt-1">
                  123 Legal Ave, Suite 500<br />
                  San Francisco, CA 94105
                </p>
                <a
                  href="https://www.google.com/maps/search/123+Legal+Ave+San+Francisco+CA+94105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
