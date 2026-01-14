import { CheckCircle2, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Recognized by Super Lawyers and Martindale-Hubbell for legal excellence.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "We understand emergencies don't wait. Reach us anytime, day or night.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Every case receives individual attention from our dedicated attorneys.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-4">Why Choose Us</p>
            <h2 className="heading-section text-foreground mb-6">
              A Legacy of Legal Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Morrison & Associates, we combine decades of legal expertise with a client-first 
              philosophy. Our attorneys are not just legal professionals—they are advocates dedicated 
              to protecting your interests and achieving results.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "No fees unless we win your case",
                "Free initial consultation",
                "Millions recovered for clients",
                "Top-rated attorneys in the region",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-background border border-border p-6 flex gap-5 hover:border-gold transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
