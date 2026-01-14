import { ArrowRight, Scale, Users, Shield } from 'lucide-react';

interface PracticeCardProps {
  title: string;
  description: string;
  icon: 'scale' | 'users' | 'shield';
  onLearnMore: () => void;
}

const iconMap = {
  scale: <Scale className="w-12 h-12" />,
  users: <Users className="w-12 h-12" />,
  shield: <Shield className="w-12 h-12" />,
};

export default function PracticeCard({
  title,
  description,
  icon,
  onLearnMore,
}: PracticeCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 overflow-hidden h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-8 flex flex-col h-full">
        <div className="mb-6 text-blue-600 transform group-hover:scale-110 transition-transform duration-500 w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
          {iconMap[icon]}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{description}</p>

        <button
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group/btn transition-all duration-300 hover:gap-3 mt-auto"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}
