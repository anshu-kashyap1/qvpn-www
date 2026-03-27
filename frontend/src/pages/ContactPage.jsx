import { useState } from "react";
import { Mail, MessageSquare, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONFIG } from "@/config/site";

// =============================================================================
// TODO: CONTACT FORM BACKEND INTEGRATION
// =============================================================================
// This contact form currently uses a mailto fallback.
// To integrate with a backend API:
// 
// 1. Create a backend endpoint (e.g., POST /api/contact)
// 2. Update handleSubmit to call the API instead of mailto
// 3. Handle success/error states appropriately
// 4. Consider adding rate limiting and spam protection (reCAPTCHA)
//
// Example API integration:
// const response = await fetch('/api/contact', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(formState)
// });
// =============================================================================

export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // TODO: Replace with backend API call when available
    // For now, open mailto as fallback
    const mailtoLink = `mailto:${SITE_CONFIG.contact.supportEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field, value) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
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
            
            {/* Primary Support Notice */}
            <div className="p-6 rounded-2xl bg-violet-600/10 border border-violet-500/20 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Need Help?</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    For support, billing, or account help, email:
                  </p>
                  <a 
                    href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
                    className="text-violet-400 hover:text-violet-300 font-medium text-lg"
                  >
                    {SITE_CONFIG.contact.supportEmail}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
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
                Business address: {SITE_CONFIG.legal.businessAddress}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {/* Form Notice */}
            <div className="p-4 rounded-xl bg-amber-600/10 border border-amber-500/20 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  This form will open your email client. You can also email us directly at{" "}
                  <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">
                    {SITE_CONFIG.contact.supportEmail}
                  </a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`bg-white/5 border-white/10 text-white placeholder:text-gray-500 ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Please describe your question or issue..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full btn-gradient">
                <Mail className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
