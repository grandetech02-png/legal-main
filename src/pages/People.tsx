import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import { ArrowRight } from 'lucide-react';

interface PeopleProps {
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}

const teamMembers = [
  {
    id: 1,
    name: 'Chris Boscia',
    position: 'Founder',
    specialty: 'Oct 14, 2020',
    bio: 'Chris Boscia is the founder of Boscia Legal.\n\nChris believes that government should be held to the highest standard in its pursuit of justice and service to our community.  He lived that commitment during years of service as a Deputy District Attorney in Contra Costa and Santa Clara counties, as a staff attorney at the Northern California Innocence Project, and as a law clerk to a Federal judge in Sacramento.  At Boscia Legal Chris leads a team of attorneys and staff who zealously defend the accused and champion the rights of crime victims.\n\nSince leaving the public sector, Chris expanded his scope of service to civil litigation.  He represents businesses, whistleblowers, victims of harassment, and family members in their disputes with one another and their disputes with the government.  Chris draws on his Irish and Italian heritage to negotiate with a smile and tenacious attitude.  When negotiations don\'t succeed despite the best efforts of all involved, Chris draws on his experience conducting civil trials in state and federal courts to advance his clients\' interests.\n\nChris serves the legal community outside of the courtroom.  He is a Board Member of the St. Thomas More Society of Santa Clara County, a Catholic organization dedicated to enhancing the spiritual lives of judges, lawyers, law professors, and law students.  Chris is a Barrister in the William A. Ingram American Inn of Court, dedicated to civility, ethics, integrity, and professionalism in the law.\n\nChris is Jesuit-educated with bachelor\'s and master\'s degrees from Boston College and a juris doctorate from Santa Clara University School of Law.\n\nChris was born and raised in Cleveland, Ohio.  When he\'s not thinking about his clients and their cases, Chris enjoys sharing his love and heartbreak for Cleveland sports with his wife and three children.',
    image: '/c-boscia.jpg',
    modalImage: '/Per_1.png',
    education: [
      'Juris Doctorate from Santa Clara University School of Law',
      'Bachelor\'s and Master\'s degrees from Boston College',
    ],
    experience: [
      'Deputy District Attorney in Contra Costa and Santa Clara counties',
      'Staff attorney at the Northern California Innocence Project',
      'Law clerk to a Federal judge in Sacramento',
    ],
    awards: [
      'Board Member of the St. Thomas More Society of Santa Clara County',
      'Barrister in the William A. Ingram American Inn of Court',
    ],
  },
  {
    id: 2,
    name: 'Sami Khadder',
    position: 'Attorney',
    specialty: '',
    bio: 'Sami Khadder is a seasoned attorney with two decades of diverse legal experience on a wide array of subject matters, including labor and employment, commercial/ business disputes and transactions, product liability, intellectual property litigation, corporate and regulatory compliance, contracts, constitutional law, civil rights, qui tam/whistleblower actions, torts, entertainment, and personal injury. As a litigator, Sami has comprehensive litigation, trial, and appellate experience in state and federal courts, arbitration, and administrative agencies, including class actions, representative actions, administrative actions, complex litigation courts, and appeals. In addition to litigation, Sami also provides comprehensive strategic legal advice and counsel and represents clients on transactional matters.\n\nSami graduated from U.C. Davis where he received his undergraduate degrees, with honors, in philosophy and political science. He then attended George Washington University Law School in Washington, DC, where he graduated with a Juris Doctor in 2003. After law school, but before his first job as an attorney, Sami lived in Paris for several months where he studied French cuisine at the Cordon Bleu culinary school. Although he enjoys cooking for family and friends, Sami is a far better attorney than chef and is certain he chose the right career path.\n\nDuring his free time, Sami enjoys spending quality time with his wife and two young kids, and obsessing over Warriors basketball and national politics.',
    image: '/sami.jpg',
    modalImage: '/Per_3.png',
    education: [
      'Juris Doctor from George Washington University Law School (2003)',
      'Undergraduate degrees from U.C. Davis (with honors) in philosophy and political science',
      'Studied French cuisine at the Cordon Bleu culinary school in Paris',
    ],
    experience: [
      'Two decades of diverse legal experience',
      'Labor and employment, commercial disputes, product liability',
      'Intellectual property litigation, corporate compliance',
      'Class actions, representative actions, complex litigation',
    ],
    awards: [
      'Comprehensive litigation, trial, and appellate experience',
      'Strategic legal advisor and transactional counsel',
    ],
  },
  {
    id: 3,
    name: 'Leonela Pinedo Vargas',
    position: 'Paralegal',
    specialty: '',
    bio: 'Leonela Pinedo Vargas is a Paralegal. She engages in case planning, development, and management under the supervision of an attorney. She conducts legal research, gathers facts, interviews clients and witnesses, prepares legal documents, and facilitates the filing of court documents under the supervision of an attorney. Prior to joining Boscia Legal, Leonela worked for seven years at a San Jose law firm that practiced estate planning, workers\' compensation, and immigration law.\n\nLeonela was born and raised in San Jose and obtained a bachelor\'s degree from the University of California, Berkeley, in 2013. She is fluent in Spanish and is an active member of the Latina Coalition of Silicon Valley. When not in the office, Leonela enjoys spending time with her husband, daughter, and extended family.',
    image: '/leonela.jpg',
    modalImage: '/Per_2.png',
    education: [
      'Bachelor\'s degree from the University of California, Berkeley (2013)',
    ],
    experience: [
      'Case planning, development, and management',
      'Legal research and document preparation',
      'Seven years at a San Jose law firm (estate planning, workers\' compensation, immigration law)',
    ],
    awards: [
      'Fluent in Spanish',
      'Active member of the Latina Coalition of Silicon Valley',
    ],
  },
];

export default function People({ setCurrentPage }: PeopleProps) {
  return (
    <div className="animate-slideInFromRight">
      <Hero
        title="Our Team"
        subtitle="Meet the dedicated legal professionals committed to your success"
        image="/2_people.jpeg"
      />

      <section id="people" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experienced Legal Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our attorneys combine decades of experience, expertise across multiple practice areas, and a commitment to client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact any of our attorneys directly or schedule a consultation today
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-600 px-10 py-4 rounded-lg font-semibold transition-all duration-300 hover:gap-4"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
