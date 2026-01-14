import { useEffect, useCallback } from 'react';
import { X, CheckCircle, Scale, Shield, Users, ArrowRight } from 'lucide-react';

export interface PracticeAreaData {
  title: string;
  description: string;
  icon: 'scale' | 'users' | 'shield';
  details: string[];
  extendedContent?: {
    overview: string;
    approach: string[];
    whyChooseUs: string[];
  };
}

interface PracticeAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
  practiceArea: PracticeAreaData | null;
  onContactClick?: () => void;
}

const iconMap = {
  scale: <Scale className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
};

const emojiMap = {
  scale: '⚖️',
  users: '👥',
  shield: '🛡️',
};

export default function PracticeAreaModal({
  isOpen,
  onClose,
  practiceArea,
  onContactClick,
}: PracticeAreaModalProps) {
  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !practiceArea) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              {iconMap[practiceArea.icon]}
            </div>
            <div>
              <h2 id="modal-title" className="text-2xl md:text-3xl font-bold">
                {practiceArea.title}
              </h2>
              <p className="text-blue-100 text-sm mt-1">Legal Practice Area</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">{emojiMap[practiceArea.icon]}</span>
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {practiceArea.extendedContent?.overview || practiceArea.description}
            </p>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">📋</span>
              Services We Provide
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {practiceArea.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Approach */}
          {practiceArea.extendedContent?.approach && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Our Approach
              </h3>
              <ul className="space-y-3">
                {practiceArea.extendedContent.approach.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Why Choose Us */}
          {practiceArea.extendedContent?.whyChooseUs && (
            <div className="mb-6 bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                Why Choose Us
              </h3>
              <ul className="space-y-2">
                {practiceArea.extendedContent.whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
          <p className="text-sm text-gray-500">
            Ready to discuss your case with our experts?
          </p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Close
            </button>
            {onContactClick && (
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Get Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
