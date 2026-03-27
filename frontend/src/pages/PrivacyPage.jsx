import { Shield, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, PRIVACY_CONFIG } from "@/config/site";

export const PrivacyPage = () => {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <Lock className="w-3 h-3 text-violet-400" />
          <span>Legal</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-gray max-w-none">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-400 leading-relaxed">
              {SITE_CONFIG.brand.name} ("{SITE_CONFIG.brand.name}", "we", "us", or "our") is operated by {SITE_CONFIG.legal.operatorName}. 
              This Privacy Policy explains how we collect, use, and protect your information when you use our VPN service and website.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              We are committed to protecting your privacy. {PRIVACY_CONFIG.statements.minimalCollection}
            </p>
          </div>

          {/* What We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-white mb-3">Account Information</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              {PRIVACY_CONFIG.dataCollected.account.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Billing Information</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              {PRIVACY_CONFIG.dataCollected.billing.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Device Information</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              {PRIVACY_CONFIG.dataCollected.device.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Operational Data</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              {PRIVACY_CONFIG.dataCollected.operational.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Support Communications</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              {PRIVACY_CONFIG.dataCollected.support.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* What We Don't Collect */}
          <div className="mb-12 p-6 rounded-2xl bg-violet-600/10 border border-violet-500/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-violet-400" />
              Information We Do NOT Collect
            </h2>
            <p className="text-gray-400 mb-4">
              {PRIVACY_CONFIG.statements.noActivityLogging}
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              {PRIVACY_CONFIG.dataNotCollected.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Provide and maintain the {SITE_CONFIG.brand.name} service</li>
              <li>Process your subscription payments</li>
              <li>Send transactional emails (account verification, password reset, billing notifications)</li>
              <li>Respond to your support requests</li>
              <li>Improve and optimize our service</li>
              <li>Prevent fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-gray-400 mt-4">
              <strong className="text-white">{PRIVACY_CONFIG.statements.noAdTargeting}</strong>
            </p>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
            <p className="text-gray-400">
              {PRIVACY_CONFIG.statements.dataRetention}
            </p>
            <p className="text-gray-400 mt-4">
              When you delete your account, it enters a 14-day recovery period. After this period, your account 
              and associated personal data are permanently deleted from our systems. You may request immediate 
              permanent deletion by contacting {SITE_CONFIG.contact.privacyEmail}.
            </p>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-400">
              We implement appropriate technical and organizational security measures to protect your personal 
              information. Your VPN traffic is encrypted using the WireGuard protocol. Passwords are securely 
              hashed and never stored in plain text. Payment information is processed by Stripe and is not 
              stored on our servers.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Services</h2>
            <p className="text-gray-400 mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li><strong className="text-white">Stripe</strong> - For payment processing. Stripe's privacy policy applies to payment data.</li>
              <li><strong className="text-white">Email Service Provider</strong> - For sending transactional emails.</li>
            </ul>
            <p className="text-gray-400 mt-4">
              We do not sell or share your personal information with advertisers or data brokers.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            <p className="text-gray-400 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Export your account data</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="text-gray-400 mt-4">
              To exercise these rights, contact us at {SITE_CONFIG.contact.privacyEmail}.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Website Analytics</h2>
            <p className="text-gray-400">
              Our website may use essential cookies necessary for the website to function properly. 
              We do not use third-party tracking cookies for advertising purposes. If we use analytics 
              tools, they are configured to respect your privacy and do not track individual users.
            </p>
          </div>

          {/* Children */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
            <p className="text-gray-400">
              {SITE_CONFIG.brand.name} is not intended for use by children under the age of 13. We do not 
              knowingly collect personal information from children under 13. If you believe we have 
              collected information from a child under 13, please contact us immediately.
            </p>
          </div>

          {/* Changes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
            <p className="text-gray-400">
              We may update this Privacy Policy from time to time. We will notify you of any significant 
              changes by email or through the app. Your continued use of {SITE_CONFIG.brand.name} after 
              changes take effect constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, contact us at:
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Privacy Inquiries:</strong>{" "}
              <a href={`mailto:${SITE_CONFIG.contact.privacyEmail}`} className="text-violet-400 hover:text-violet-300">
                {SITE_CONFIG.contact.privacyEmail}
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              <strong className="text-white">Operator:</strong> {SITE_CONFIG.legal.operatorName}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
