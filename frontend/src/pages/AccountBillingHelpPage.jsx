import { 
  User, CreditCard, Key, Trash2, RotateCcw, AlertCircle, Mail, RefreshCw, Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, ACCOUNT_CONFIG, PRICING_CONFIG, EMAIL_CONFIG } from "@/config/site";

export const AccountBillingHelpPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <User className="w-3 h-3 text-violet-400" />
          <span>Help</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Account & Billing Help
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Manage your account, subscriptions, and billing settings.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Password Management */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <Key className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Password Management</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">Reset Your Password</h3>
              <ol className="list-decimal pl-6 text-gray-400 text-sm space-y-2">
                <li>On the login screen, tap "Forgot Password"</li>
                <li>Enter your account email address</li>
                <li>Check your email for a password reset link</li>
                <li>Click the link and create a new password</li>
              </ol>
              <p className="text-gray-500 text-xs mt-4">
                Reset links expire after 24 hours. If you don't receive the email, check your spam folder.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">Change Your Password</h3>
              <ol className="list-decimal pl-6 text-gray-400 text-sm space-y-2">
                <li>Open the {SITE_CONFIG.brand.name} app</li>
                <li>Go to Account Settings</li>
                <li>Select "Change Password"</li>
                <li>Enter your current password and new password</li>
                <li>Confirm your new password</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Account Deletion */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <Trash2 className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Account Deletion</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">How to Delete Your Account</h3>
              <ol className="list-decimal pl-6 text-gray-400 text-sm space-y-2">
                <li>Open the {SITE_CONFIG.brand.name} app</li>
                <li>Go to Account Settings</li>
                <li>Select "Delete Account"</li>
                <li>Confirm your decision</li>
              </ol>
              <p className="text-gray-400 text-sm mt-4">
                Or contact {SITE_CONFIG.contact.supportEmail} to request account deletion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-600/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">14-Day Recovery Period</h3>
                  <p className="text-gray-400 text-sm">
                    {ACCOUNT_CONFIG.deletion.note}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">Immediate Permanent Deletion</h3>
              <p className="text-gray-400 text-sm">
                {ACCOUNT_CONFIG.deletion.forceDeleteNote}
              </p>
            </div>
          </div>
        </div>

        {/* Account Recovery */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Account Recovery</h2>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">Recover a Deleted Account</h3>
            <p className="text-gray-400 text-sm mb-4">
              {ACCOUNT_CONFIG.recovery.note}
            </p>
            <ol className="list-decimal pl-6 text-gray-400 text-sm space-y-2">
              <li>Open the {SITE_CONFIG.brand.name} app</li>
              <li>Try to log in with your previous credentials</li>
              <li>You'll see an option to restore your account</li>
              <li>Confirm to restore your account and data</li>
            </ol>
            <p className="text-gray-500 text-xs mt-4">
              After 14 days, accounts are permanently deleted and cannot be recovered.
            </p>
          </div>
        </div>

        {/* Subscription Management */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Subscription & Billing</h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">Subscription Renewal</h3>
              <p className="text-gray-400 text-sm">
                {PRICING_CONFIG.billing.renewalNote} You'll receive a reminder email before each renewal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">Update Payment Method</h3>
              <ol className="list-decimal pl-6 text-gray-400 text-sm space-y-2">
                <li>Open the {SITE_CONFIG.brand.name} app</li>
                <li>Go to Account Settings → Subscription</li>
                <li>Select "Update Payment Method"</li>
                <li>Enter your new payment details</li>
              </ol>
            </div>

            <div className="p-6 rounded-2xl bg-amber-600/10 border border-amber-500/20">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Payment Failed? Grace Period</h3>
                  <p className="text-gray-400 text-sm">
                    {PRICING_CONFIG.billing.gracePeriodNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">What Happens When My Subscription Expires?</h3>
              <p className="text-gray-400 text-sm">
                {ACCOUNT_CONFIG.subscription.expiryBehavior}
              </p>
            </div>
          </div>
        </div>

        {/* Email Notifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-violet-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Email Notifications</h2>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              {SITE_CONFIG.brand.name} sends the following transactional emails to keep you informed:
            </p>
            <ul className="space-y-3">
              {EMAIL_CONFIG.transactionalEmails.map((email, index) => (
                <li key={index} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                  <div className="text-white font-medium text-sm">{email.type}</div>
                  <div className="text-gray-500 text-xs">{email.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Support */}
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need More Help?</h2>
          <p className="text-gray-400 mb-4">
            Our support team is ready to assist with account and billing questions.
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

export default AccountBillingHelpPage;
