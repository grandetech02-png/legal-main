import { useState } from 'react';
import Hero from '../components/Hero';
import ContactMap from '../components/ContactMap';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import ContactImage from '@/assets/4_Contactos.jpeg';
import emailjs from '@emailjs/browser';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ContactProps {
  setCurrentPage: (page: 'home' | 'people' | 'practice-areas' | 'contact') => void;
}

export default function Contact({ setCurrentPage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Por favor completa todos los campos obligatorios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        subject: formData.subject || 'No especificado',
        message: formData.message,
        to_email: 'info@grandesv.com',
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

        setTimeout(() => {
          setSubmitStatus('idle');
        }, 8000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage(
        'Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente a info@grandesv.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-slideInFromRight">
      <Hero
        title="Get In Touch"
        subtitle="Contact our legal team for a consultation"
        image={ContactImage}
      />

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 font-medium">(408) 753-6224</p>
                    <p className="text-sm text-gray-500 mt-1">Available for consultations</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 font-medium">info@grandesv.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600">1960 The Alameda, Suite 185</p>
                    <p className="text-gray-600">San Jose, CA 95126</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Emergency</h4>
                    <p className="text-gray-600">Available 24/7 for urgent matters</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg mb-6 animate-fadeIn flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">Mensaje enviado exitosamente</h4>
                    <p className="text-sm">Gracias por contactarnos. Uno de nuestros profesionales legales te responderá pronto.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg mb-6 animate-fadeIn flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">Error al enviar mensaje</h4>
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Área de Interés</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="civil">Litigio Civil</option>
                      <option value="criminal">Defensa Criminal</option>
                      <option value="victims">Derechos de Víctimas de Crimen</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="¿Cómo podemos ayudarte?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Los campos marcados con <span className="text-red-500">*</span> son obligatorios
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactMap />
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions about our legal services</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5 hover:no-underline">
                What should I bring to my first consultation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Bring any relevant documents related to your case, such as contracts, court documents, correspondence, or incident reports. Also bring a list of questions you want to discuss.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5 hover:no-underline">
                How are fees structured?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We offer various fee arrangements including hourly rates, flat fees, and contingency arrangements depending on the type of case. We discuss fees transparently during your consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5 hover:no-underline">
                How long does a typical case take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Case duration varies significantly based on complexity. Simple matters might resolve in weeks, while complex litigation can take years. We provide realistic timelines during your consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5 hover:no-underline">
                Can I reach you outside business hours?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes, we have emergency services available 24/7 for urgent matters. Call our main number and press the emergency option to reach an attorney on duty.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
