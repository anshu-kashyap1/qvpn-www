import { useState } from "react";
import { Mail, MessageSquare, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/config/site";

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, this opens the default email client as fallback
    // In production, this would connect to a backend endpoint
    const mailtoLink = `mailto:${SITE_CONFIG.contact.supportEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Badge className="section-badge mb-6">
          <MessageSquare className="w-3 h-3 text-violet-400" />
          <span>Contact</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Have a question or need help? We're here to assist you.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Support Email</h3>
                    <a 
                      href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
                      className="text-violet-400 hover:text-violet-300"
                    >
                      {SITE_CONFIG.contact.supportEmail}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      For technical support, account issues, and billing questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Inquiries</h3>
                    <a 
                      href={`mailto:${SITE_CONFIG.contact.businessEmail}`}
                      className="text-violet-400 hover:text-violet-300"
                    >
                      {SITE_CONFIG.contact.businessEmail}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      For partnerships and business-related questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Support Hours</h3>
                    <p className="text-gray-400">{SITE_CONFIG.contact.supportHours}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      We typically respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="mt-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">Company Information</h3>
              <p className="text-gray-400 text-sm">
                {SITE_CONFIG.legal.operatorDisclosure}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {SITE_CONFIG.legal.businessAddress}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Message Prepared</h3>
                <p className="text-gray-400">
                  Your email client should open with your message. If it doesn't, please email us directly at{" "}
                  <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">
                    {SITE_CONFIG.contact.supportEmail}
                  </a>
                </p>
                <Button 
                  className="mt-6 btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    placeholder="Please describe your question or issue..."
                  />
                </div>

                <Button type="submit" className="w-full btn-gradient">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-gray-500 text-xs text-center">
                  This will open your email client. You can also email us directly at{" "}
                  <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">
                    {SITE_CONFIG.contact.supportEmail}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
