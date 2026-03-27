import { Mail, Shield, Bell, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, EMAIL_CONFIG } from "@/config/site";

export const EmailNotificationsPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <Mail className="w-3 h-3 text-violet-400" />
          <span>Communications</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Email Notifications
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Learn about the emails {SITE_CONFIG.brand.name} sends to keep your account secure and informed.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overview */}
        <div className="mb-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-white font-semibold mb-2">Transactional Emails Only</h2>
              <p className="text-gray-400 text-sm">
                {SITE_CONFIG.brand.name} only sends essential transactional emails related to your account, 
                security, and billing. We do not send marketing emails or share your email with third parties 
                for promotional purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Email Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Types of Emails We Send</h2>
          
          <div className="space-y-4">
            {EMAIL_CONFIG.transactionalEmails.map((email, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{email.type}</h3>
                    <p className="text-gray-400 text-sm mb-2">{email.description}</p>
                    <p className="text-gray-500 text-xs">
                      <strong>Trigger:</strong> {email.trigger}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why These Emails */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why We Send These Emails</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Account Security</h3>
              <p className="text-gray-400 text-sm">
                Verification, password reset, and account deletion emails help protect your account from unauthorized access.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Billing Transparency</h3>
              <p className="text-gray-400 text-sm">
                Payment confirmations and renewal reminders keep you informed about your subscription status.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Service Continuity</h3>
              <p className="text-gray-400 text-sm">
                Payment failure alerts and grace period warnings help you maintain uninterrupted access.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <CheckCircle className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-white font-semibold mb-2">Account Control</h3>
              <p className="text-gray-400 text-sm">
                Deletion confirmations and recovery emails give you control over your account lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Not Receiving Emails */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Not Receiving Emails?</h2>
          
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <p className="text-gray-400 text-sm mb-4">If you're not receiving our emails:</p>
            <ul className="list-disc pl-6 text-gray-400 text-sm space-y-2">
              <li>Check your spam or junk folder</li>
              <li>Add {SITE_CONFIG.contact.supportEmail.split('@')[1]} to your contacts</li>
              <li>Verify your email address in your account settings</li>
              <li>Contact support if issues persist</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Questions About Our Emails?</h2>
          <p className="text-gray-400 mb-4">
            Contact us if you have questions about our email communications.
          </p>
          <a 
            href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
            className="text-violet-400 hover:text-violet-300 font-medium"
          >
            {SITE_CONFIG.contact.supportEmail}
          </a>
        </div>
      </section>
    </div>
  );
};

export default EmailNotificationsPage;
