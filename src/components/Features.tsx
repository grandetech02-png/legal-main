import { Zap, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance out of the box with modern tooling.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built with security best practices from the ground up.",
  },
  {
    icon: Layers,
    title: "Scalable",
    description: "Grows with your needs from prototype to production.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Why choose us
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
