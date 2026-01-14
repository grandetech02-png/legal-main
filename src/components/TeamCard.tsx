import { Mail, Linkedin, Calendar, X, GraduationCap, Building2, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  specialty: string;
  bio: string;
  image: string;
  modalImage?: string;
  education: string[];
  experience: string[];
  awards: string[];
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [showModal, setShowModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <div className="group cursor-pointer">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-[420px] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Blue opacity overlay that fades in on hover */}
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-500 ease-out flex items-center justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 transform opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
              >
                View Profile
              </button>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <a
                href="mailto:info@grandesv.com"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Mail className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="#"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>
          <div className="bg-white px-4 py-4">
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.position}</p>
          </div>
        </div>
      </div>

      {showModal && createPortal(
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full overflow-hidden max-h-[90vh] relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 h-full max-h-[90vh]">
              {/* Left side - Photo (2 columns) - zoomed in on upper body */}
              <div className="relative h-80 md:h-auto md:col-span-2 bg-gradient-to-b from-slate-700 to-slate-900 flex items-end justify-center overflow-hidden">
                <img
                  src={member.modalImage || member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_15%] scale-125"
                />
              </div>

              {/* Right side - Content (3 columns) */}
              <div className="relative flex flex-col md:col-span-3 max-h-[60vh] md:max-h-[90vh]">
                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-red-100 hover:bg-gray-200 rounded-full text-red-500 hover:text-gray-500 z-10 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <ScrollArea className="flex-1 h-full">
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Header Section */}
                    <div className="pr-8">
                      <div className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md mb-3">
                        {member.position}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h2>
                      {member.specialty && (
                        <p className="text-teal-600 font-medium text-sm">{member.specialty}</p>
                      )}
                    </div>

                    {/* Bio Section */}
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                        <div className="w-6 h-6 bg-teal-100 rounded-md flex items-center justify-center">
                          <Building2 className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        About
                      </h4>
                      <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                        {member.bio.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {/* Education Box */}
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center">
                            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                          </div>
                          Education
                        </h4>
                        <ul className="space-y-2">
                          {member.education.map((edu, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Experience Box */}
                      <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                        <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-amber-100 rounded-md flex items-center justify-center">
                            <Building2 className="w-3.5 h-3.5 text-amber-600" />
                          </div>
                          Experience
                        </h4>
                        <ul className="space-y-2">
                          {member.experience.map((exp, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0" />
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Awards Box */}
                      <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                        <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                          <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center">
                            <Award className="w-3.5 h-3.5 text-purple-600" />
                          </div>
                          Awards & Recognition
                        </h4>
                        <ul className="space-y-2">
                          {member.awards.map((award, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                      <a
                        href="mailto:info@grandesv.com"
                        className="bg-teal-500 hover:bg-teal-600 text-white py-2.5 px-5 rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                      <a
                        href="#"
                        className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5 px-5 rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <button
                        className="border border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5 px-5 rounded-lg font-medium transition-colors text-sm flex items-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        Schedule Meeting
                      </button>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}