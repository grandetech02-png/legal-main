import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Legal Avenue, Suite 500\nNew York, NY 10001",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123-4567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@morrisonlaw.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8AM - 6PM\nEmergencies: 24/7",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      subject: "Formulario de contacto",
      message: formData.message,
    };

    const { error } = await supabase.functions.invoke("send-contact-email", {
      body: payload,
    });

    if (error) throw error;

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error("Error sending message:", error);
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-gold text-sm font-medium uppercase tracking-wider mb-4">Get In Touch</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-background mb-6">
              Schedule Your Free Consultation
            </h2>
            <p className="text-background/70 text-lg leading-relaxed mb-10">
              Take the first step toward resolving your legal matter. Contact us today for a 
              confidential, no-obligation consultation with one of our experienced attorneys.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold text-xs font-medium uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-background/80 text-sm whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-background/5 border border-background/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-background/80 text-sm mb-2 block">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John" 
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-background/80 text-sm mb-2 block">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe" 
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-gold"
                  />
                </div>
              </div>
              <div>
                <label className="text-background/80 text-sm mb-2 block">Email</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-gold"
                />
              </div>
              <div>
                <label className="text-background/80 text-sm mb-2 block">Phone</label>
                <Input 
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-gold"
                />
              </div>
              <div>
                <label className="text-background/80 text-sm mb-2 block">How can we help?</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your legal matter..." 
                  rows={4}
                  required
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus:border-gold resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-light text-foreground font-medium h-14"
              >
                {isSubmitting ? "Sending..." : "Request Free Consultation"}
              </Button>
              <p className="text-background/50 text-xs text-center">
                All consultations are confidential. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
