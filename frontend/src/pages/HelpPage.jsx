import { Link } from "react-router-dom";
import { 
  HelpCircle, User, CreditCard, Key, Trash2, RotateCcw, Mail, Shield, AlertCircle, ChevronRight 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, ACCOUNT_CONFIG, PRICING_CONFIG, EMAIL_CONFIG } from "@/config/site";

const HelpCard = ({ icon: Icon, title, description, href }) => (
  <Link 
    to={href} 
    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors group"
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-violet-400" />
      </div>
      <div className="flex-grow">
        <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
          {title}
          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-violet-400 transition-colors" />
        </h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

export const HelpPage = () => {
  const helpTopics = [
    {
      icon: User,
      title: "Account & Profile",
      description: "Manage your account settings, password, and profile",
      href: "/help/account-billing"
    },
    {
      icon: CreditCard,
      title: "Billing & Subscriptions",
      description: "Payment, renewal, cancellation, and refund questions",
      href: "/help/account-billing"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Learn about our privacy practices and data protection",
      href: "/privacy"
    },
    {
      icon: HelpCircle,
      title: "Frequently Asked Questions",
      description: "Find answers to common questions",
      href: "/faq"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <Badge className="section-badge mb-6">
          <HelpCircle className="w-3 h-3 text-violet-400" />
          <span>Help Center</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How Can We Help?
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Find answers, manage your account, and get support for {SITE_CONFIG.brand.name}.
        </p>
      </section>

      {/* Help Topics */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {helpTopics.map((topic, index) => (
            <HelpCard key={index} {...topic} />
          ))}
        </div>
      </section>

      {/* Quick Answers */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Quick Answers</h2>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">How do I reset my password?</h3>
            <p className="text-gray-400 text-sm">
              Tap "Forgot Password" on the login screen, enter your email, and we'll send you a secure link to reset your password.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">How do I cancel my subscription?</h3>
            <p className="text-gray-400 text-sm">
              Go to Account Settings in the app and select "Manage Subscription", or contact {SITE_CONFIG.contact.supportEmail}. 
              {PRICING_CONFIG.billing.cancellationNote}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">How do I delete my account?</h3>
            <p className="text-gray-400 text-sm">
              Go to Account Settings and select "Delete Account", or contact support. {ACCOUNT_CONFIG.deletion.note}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
          <Mail className="w-12 h-12 text-violet-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Still Need Help?</h2>
          <p className="text-gray-400 mb-4">
            Our support team is here to assist you.
          </p>
          <a 
            href={`mailto:${SITE_CONFIG.contact.supportEmail}`}
            className="text-violet-400 hover:text-violet-300 font-medium text-lg"
          >
            {SITE_CONFIG.contact.supportEmail}
          </a>
          <p className="text-gray-500 text-sm mt-4">
            {SITE_CONFIG.contact.supportHours}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
