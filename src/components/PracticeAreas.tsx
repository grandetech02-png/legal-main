import { Briefcase, Users, Building2, FileText, Shield, Gavel } from "lucide-react";

const practiceAreas = [
  {
    icon: Gavel,
    title: "Criminal Defense",
    description: "Aggressive defense strategies for misdemeanors, felonies, DUI, and white-collar crimes.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate representation in divorce, custody, adoption, and domestic matters.",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive business counsel from formation to mergers and acquisitions.",
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Protecting your legacy with wills, trusts, and probate administration.",
  },
  {
    icon: Shield,
    title: "Personal Injury",
    description: "Fighting for maximum compensation in accident and negligence cases.",
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Defending employee rights in discrimination, harassment, and wrongful termination.",
  },
];

const PracticeAreas = () => {
  return (
    <section id="practice" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-sm font-medium uppercase tracking-wider mb-4">Our Expertise</p>
          <h2 className="heading-section text-foreground mb-6">
            Practice Areas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our diverse team of attorneys brings specialized expertise across multiple areas of law, 
            ensuring comprehensive legal solutions for every client.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-elegant group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <area.icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
