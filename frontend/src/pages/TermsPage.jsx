import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, PRICING_CONFIG } from "@/config/site";

export const TermsPage = () => {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <FileText className="w-3 h-3 text-violet-400" />
          <span>Legal</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Terms of Service
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
              These Terms of Service ("Terms") govern your use of {SITE_CONFIG.brand.name} (the "Service"), 
              operated by {SITE_CONFIG.legal.operatorName} ("we", "us", or "our"). By using {SITE_CONFIG.brand.name}, 
              you agree to these Terms. If you do not agree, please do not use the Service.
            </p>
          </div>

          {/* Service Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">1. Service Description</h2>
            <p className="text-gray-400">
              {SITE_CONFIG.brand.name} is a Virtual Private Network (VPN) service that encrypts your internet 
              connection and routes your traffic through our servers. The Service is designed to enhance 
              your online privacy and security. The Service is provided "as is" and we do not guarantee 
              that it will meet all your specific requirements or that it will be uninterrupted or error-free.
            </p>
          </div>

          {/* Account Eligibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">2. Account Eligibility</h2>
            <p className="text-gray-400 mb-4">To use {SITE_CONFIG.brand.name}, you must:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Be at least 13 years of age (or the minimum age in your jurisdiction)</li>
              <li>Provide accurate account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
            <p className="text-gray-400 mt-4">
              You are responsible for maintaining the confidentiality of your account password. 
              Notify us immediately if you believe your account has been compromised.
            </p>
          </div>

          {/* Acceptable Use */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">3. Acceptable Use</h2>
            <p className="text-gray-400 mb-4">You agree NOT to use {SITE_CONFIG.brand.name} to:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Engage in illegal activities including but not limited to fraud, hacking, or distribution of malware</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute spam, malware, or other harmful content</li>
              <li>Harass, abuse, or harm others</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Share your account credentials with others</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
            <p className="text-gray-400 mt-4">
              We reserve the right to terminate accounts that violate these terms without refund.
            </p>
          </div>

          {/* Subscriptions and Billing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">4. Subscriptions and Billing</h2>
            
            <h3 className="text-lg font-semibold text-white mb-3">Free Plan</h3>
            <p className="text-gray-400 mb-4">
              The Free plan provides limited access to the Service with certain restrictions. 
              Free plans may include advertisements.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Premium Subscriptions</h3>
            <p className="text-gray-400 mb-4">
              Premium subscriptions are billed in advance on a monthly or yearly basis depending on your selection. 
              {PRICING_CONFIG.billing.renewalNote}
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Payment</h3>
            <p className="text-gray-400 mb-4">
              {PRICING_CONFIG.billing.securityNote} By subscribing, you authorize us to charge your payment 
              method for the subscription fees. You are responsible for keeping your payment information current.
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">Price Changes</h3>
            <p className="text-gray-400">
              We may change subscription prices from time to time. Price changes will be communicated 
              in advance and will apply to the next billing cycle.
            </p>
          </div>

          {/* Cancellation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">5. Cancellation</h2>
            <p className="text-gray-400 mb-4">
              {PRICING_CONFIG.billing.cancellationNote}
            </p>
            <p className="text-gray-400">
              To cancel your subscription, use the account settings in the app or contact our support team. 
              When your subscription ends, your account will revert to the Free plan.
            </p>
          </div>

          {/* Refunds */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">6. Refunds</h2>
            <p className="text-gray-400">
              {PRICING_CONFIG.refund.note} Refunds are issued at our discretion and are not guaranteed. 
              Accounts terminated for Terms of Service violations are not eligible for refunds.
            </p>
          </div>

          {/* Account Termination */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">7. Account Termination</h2>
            <p className="text-gray-400 mb-4">
              <strong className="text-white">By You:</strong> You may delete your account at any time through 
              the app or by contacting support. Deleted accounts enter a 14-day recovery period before permanent deletion.
            </p>
            <p className="text-gray-400">
              <strong className="text-white">By Us:</strong> We reserve the right to suspend or terminate 
              your account if you violate these Terms, engage in illegal activities, or abuse the Service. 
              We may also terminate accounts for prolonged inactivity.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">8. Disclaimers</h2>
            <p className="text-gray-400 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, 
              ERROR-FREE, OR COMPLETELY SECURE.
            </p>
            <p className="text-gray-400">
              While {SITE_CONFIG.brand.name} enhances your online privacy, no VPN can guarantee complete 
              anonymity or protection against all threats. You are responsible for your own online security practices.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">9. Limitation of Liability</h2>
            <p className="text-gray-400">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE_CONFIG.legal.operatorName} SHALL NOT BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
              LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE. 
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12) 
              MONTHS PRECEDING THE CLAIM.
            </p>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">10. Indemnification</h2>
            <p className="text-gray-400">
              You agree to indemnify and hold harmless {SITE_CONFIG.legal.operatorName}, its officers, 
              directors, employees, and agents from any claims, damages, losses, or expenses arising 
              from your use of the Service or violation of these Terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">11. Governing Law</h2>
            <p className="text-gray-400">
              {SITE_CONFIG.legal.governingLaw}
            </p>
          </div>

          {/* Changes */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">12. Changes to Terms</h2>
            <p className="text-gray-400">
              We may update these Terms from time to time. We will notify you of material changes via 
              email or through the app. Your continued use of {SITE_CONFIG.brand.name} after changes 
              take effect constitutes acceptance of the updated Terms.
            </p>
          </div>

          {/* Severability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">13. Severability</h2>
            <p className="text-gray-400">
              If any provision of these Terms is found to be unenforceable, the remaining provisions 
              will continue in full force and effect.
            </p>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              If you have questions about these Terms of Service, contact us at:
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Email:</strong>{" "}
              <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">
                {SITE_CONFIG.contact.supportEmail}
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

export default TermsPage;
