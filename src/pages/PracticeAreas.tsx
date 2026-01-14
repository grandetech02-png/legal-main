import Hero from '../components/Hero';
import { PracticeAreaData } from '../components/PracticeAreaModal';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PracticeAreasProps {
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}

const practiceAreas: PracticeAreaData[] = [
  {
    title: 'Civil Litigation',
    description:
      'Do you or your company need assistance with a business or property dispute?  Has someone defamed you or breached a contract with you?  Are you a whistleblower or do you have some other complaint against your employer? We seek justice for individuals and businesses against one another and the government.\n\nAre you a victim of domestic violence, workplace violence, or violence from a stranger? We can help you get a restraining order.\n\nWhether you are a business executive, an entrepreneur, a doctor, a husband, a wife, or a student at University, we approach each case and each client in the same way—with excellence.',
    icon: 'scale' as const,
    details: [],
    extendedContent: {
      overview:
        'Do you or your company need assistance with a business or property dispute?  Has someone defamed you or breached a contract with you?  Are you a whistleblower or do you have some other complaint against your employer? We seek justice for individuals and businesses against one another and the government.\n\nAre you a victim of domestic violence, workplace violence, or violence from a stranger? We can help you get a restraining order.\n\nWhether you are a business executive, an entrepreneur, a doctor, a husband, a wife, or a student at University, we approach each case and each client in the same way—with excellence.',
      approach: [],
      whyChooseUs: [],
    },
  },
  {
    title: "Crime Victims' Rights",
    description:
      'Are you a victim of crime? Have you recently discovered that an employee has been stealing from your business? Have you been harmed by someone else\'s criminal behavior? We give crime victims a voice in criminal court. We help recover stolen funds and costs from injuries in civil court. You have rights under the Crime Victim\'s Bill of Rights of the California Constitution. We can help you understand and use those rights.',
    icon: 'users' as const,
    details: [],
    extendedContent: {
      overview:
        'Are you a victim of crime? Have you recently discovered that an employee has been stealing from your business? Have you been harmed by someone else\'s criminal behavior? We give crime victims a voice in criminal court. We help recover stolen funds and costs from injuries in civil court. You have rights under the Crime Victim\'s Bill of Rights of the California Constitution. We can help you understand and use those rights.',
      approach: [],
      whyChooseUs: [],
    },
  },
  {
    title: 'Criminal Defense',
    description:
      'Are you facing a criminal investigation or criminal charges in Silicon Valley or the San Francisco Bay area? Have you been summoned to testify before the grand jury? Do you need a trusted former prosecutor to represent you? We work to stop charges from being filed at all. When charges are filed, we know how to tear down the government\'s case against you and build up your defense. If you have been convicted, we can help you seek record clearance, post-conviction immigration relief, a certificate of rehabilitation, or even a pardon.',
    icon: 'shield' as const,
    details: [],
    extendedContent: {
      overview:
        'Are you facing a criminal investigation or criminal charges in Silicon Valley or the San Francisco Bay area? Have you been summoned to testify before the grand jury? Do you need a trusted former prosecutor to represent you? We work to stop charges from being filed at all. When charges are filed, we know how to tear down the government\'s case against you and build up your defense. If you have been convicted, we can help you seek record clearance, post-conviction immigration relief, a certificate of rehabilitation, or even a pardon.',
      approach: [],
      whyChooseUs: [],
    },
  },
];

interface PracticeAreaItemProps {
  area: PracticeAreaData;
  index: number;
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}

function PracticeAreaItem({ area, index, setCurrentPage }: PracticeAreaItemProps) {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      className={`py-20 ${index !== practiceAreas.length - 1 ? 'border-b border-gray-200' : ''}`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        <div 
          ref={textRef}
          className={`transition-all duration-700 ease-out ${index % 2 === 1 ? 'md:order-2' : ''} ${
            textVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            {area.icon === 'scale' ? 'Litigation' : area.icon === 'shield' ? 'Defense' : 'Advocacy'}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{area.title}</h3>
          <div className="text-gray-600 mb-8 text-base leading-relaxed whitespace-pre-line">
            {area.description}
          </div>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl"
          >
            Get Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div 
          ref={imageRef}
          className={`relative transition-all duration-700 ease-out ${index % 2 === 1 ? 'md:order-1' : ''} ${
            imageVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '250ms' }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={
                area.icon === 'scale'
                  ? 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800'
                  : area.icon === 'shield'
                  ? 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800'
                  : 'https://images.pexels.com/photos/7821677/pexels-photo-7821677.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
              alt={area.title}
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div 
      ref={ref}
      className={`text-center mb-20 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Legal Expertise
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        We offer specialized legal services in three core practice areas, each led by experienced attorneys dedicated to achieving the best outcomes for our clients.
      </p>
    </div>
  );
}

function CtaSection({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Need Legal Assistance?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Our attorneys are ready to help you with your legal needs. Contact us today for a consultation.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:gap-4"
        >
          Contact Us Today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default function PracticeAreas({ setCurrentPage }: PracticeAreasProps) {
  return (
    <div className="animate-slideInFromRight">
      <Hero
        title="Practice Areas"
        subtitle="Comprehensive legal services across multiple disciplines"
        image="/3_areas.jpeg"
      />

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />

          {practiceAreas.map((area, index) => (
            <PracticeAreaItem 
              key={area.title}
              area={area}
              index={index}
              setCurrentPage={setCurrentPage}
            />
          ))}
        </div>
      </section>

      <CtaSection setCurrentPage={setCurrentPage} />
    </div>
  );
}
