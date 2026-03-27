import { RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, PRICING_CONFIG } from "@/config/site";

export const RefundPolicyPage = () => {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <RotateCcw className="w-3 h-3 text-violet-400" />
          <span>Policy</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-gray-400">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert prose-gray max-w-none">
          
          {/* Intro */}
          <div className="mb-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <p className="text-gray-400">
              This policy explains how subscription cancellations and refunds work for {SITE_CONFIG.brand.name}. 
              Please read this carefully before subscribing.
            </p>
          </div>

          {/* Subscription Cancellation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Subscription Cancellation</h2>
            
            <h3 className="text-lg font-semibold text-white mb-3">How to Cancel</h3>
            <p className="text-gray-400 mb-4">
              You can cancel your Premium subscription at any time:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              <li>Through the {SITE_CONFIG.brand.name} app settings</li>
              <li>By contacting our support team at {SITE_CONFIG.contact.supportEmail}</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">What Happens After Cancellation</h3>
            <p className="text-gray-400 mb-4">
              {PRICING_CONFIG.billing.cancellationNote}
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Your Premium features remain active until the end of your current billing period</li>
              <li>No further charges will be made after you cancel</li>
              <li>When your billing period ends, your account automatically reverts to the Free plan</li>
              <li>You can continue using {SITE_CONFIG.brand.name} with Free plan features</li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Refund Policy</h2>
            
            <div className="p-6 rounded-2xl bg-violet-600/10 border border-violet-500/20 mb-6">
              <p className="text-gray-300">
                <strong className="text-white">Refund Window:</strong> {PRICING_CONFIG.refund.windowDays} days from purchase
              </p>
            </div>

            <p className="text-gray-400 mb-4">
              {PRICING_CONFIG.refund.note}
            </p>

            <h3 className="text-lg font-semibold text-white mb-3">To Request a Refund</h3>
            <ol className="list-decimal pl-6 text-gray-400 space-y-2 mb-6">
              <li>Email {SITE_CONFIG.contact.supportEmail} with your refund request</li>
              <li>Include your account email and reason for the refund</li>
              <li>We will review your request and respond within 3-5 business days</li>
            </ol>

            <h3 className="text-lg font-semibold text-white mb-3">Refund Eligibility</h3>
            <p className="text-gray-400 mb-4">Refunds may be considered for:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              <li>Requests made within {PRICING_CONFIG.refund.windowDays} days of purchase</li>
              <li>Technical issues preventing use of the Service</li>
              <li>Duplicate or accidental purchases</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">Non-Refundable Situations</h3>
            <p className="text-gray-400 mb-4">Refunds are generally not provided for:</p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Requests made after the {PRICING_CONFIG.refund.windowDays}-day window</li>
              <li>Accounts terminated for Terms of Service violations</li>
              <li>Partial month refunds for mid-cycle cancellations</li>
              <li>Change of mind after significant use of the Service</li>
            </ul>
          </div>

          {/* Payment Failures */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Failures & Grace Period</h2>
            
            <p className="text-gray-400 mb-4">
              If a payment fails (e.g., expired card, insufficient funds):
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {PRICING_CONFIG.billing.gracePeriodDays}-Day Grace Period
              </h3>
              <p className="text-gray-400">
                {PRICING_CONFIG.billing.gracePeriodNote}
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">What We'll Do</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              <li>Send you an email notification about the failed payment</li>
              <li>Retry the payment after a few days</li>
              <li>Send reminder emails during the grace period</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">What You Should Do</h3>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
              <li>Update your payment method in the app or contact support</li>
              <li>Ensure your card has sufficient funds and is not expired</li>
              <li>Respond to payment failure notifications promptly</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mb-3">After the Grace Period</h3>
            <p className="text-gray-400">
              If payment is not resolved within {PRICING_CONFIG.billing.gracePeriodDays} days, your account 
              will automatically revert to the Free plan. You can resubscribe at any time.
            </p>
          </div>

          {/* Free vs Premium */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Free Plan Access</h2>
            <p className="text-gray-400 mb-4">
              The Free plan is always available at no cost. When your Premium subscription ends:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Your account automatically switches to the Free plan</li>
              <li>You retain access to basic VPN features with limitations</li>
              <li>Your account and settings are preserved</li>
              <li>You can upgrade back to Premium at any time</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Billing Support</h2>
            <p className="text-gray-400 mb-4">
              For billing questions, refund requests, or payment issues, contact us at:
            </p>
            <p className="text-gray-400">
              <strong className="text-white">Email:</strong>{" "}
              <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">
                {SITE_CONFIG.contact.supportEmail}
              </a>
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              Please include your account email and a description of your issue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
