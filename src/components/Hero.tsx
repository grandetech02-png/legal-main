import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  cta?: {
    text: string;
    onClick: () => void;
  };
  fullHeight?: boolean;
}

export default function Hero({ title, subtitle, image, cta, fullHeight = false }: HeroProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${fullHeight ? 'h-96 md:h-screen' : 'h-48 md:h-[50vh]'}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeInUp leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fadeInUp animation-delay-200">
            {subtitle}
          </p>
        )}
        {cta && (
          <button
            onClick={cta.onClick}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:gap-3 animate-fadeInUp animation-delay-400 shadow-lg hover:shadow-xl"
          >
            {cta.text}
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
