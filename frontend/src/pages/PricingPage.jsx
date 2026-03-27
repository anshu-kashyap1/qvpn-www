import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle, CreditCard, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { SITE_CONFIG, PRICING_CONFIG } from "@/config/site";

export const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { free, premium } = PRICING_CONFIG.plans;

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Badge className="section-badge mb-6">
          <CreditCard className="w-3 h-3 text-violet-400" />
          <span>Pricing</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Choose the plan that works for you. Start free or unlock unlimited access with Premium.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} data-testid="billing-toggle" />
          <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>
            Yearly <span className="text-xs text-emerald-400 font-medium">Save 50%</span>
          </span>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col" data-testid="pricing-card-free">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{free.name}</h2>
              <p className="text-gray-400 text-sm">{free.description}</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">{PRICING_CONFIG.currencySymbol}0</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {free.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
              {free.limitations?.map((limitation, i) => (
                <li key={`limit-${i}`} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-600/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-gray-500" />
                  </div>
                  <span className="text-gray-500 text-sm">{limitation}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full btn-secondary" data-testid="pricing-cta-free">
              {free.cta} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="relative p-8 rounded-3xl pricing-premium bg-white/[0.05] glow-purple flex flex-col" data-testid="pricing-card-premium">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium">
                {premium.badge}
              </span>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">{premium.name}</h2>
              <p className="text-gray-400 text-sm">{premium.description}</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">
                {PRICING_CONFIG.currencySymbol}{isYearly ? premium.yearlyMonthlyEquivalent : premium.price.monthly}
              </span>
              <span className="text-gray-500">/month</span>
              {isYearly && (
                <div className="text-sm text-gray-500 mt-1">
                  Billed annually ({PRICING_CONFIG.currencySymbol}{premium.price.yearly}/year)
                </div>
              )}
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {premium.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full btn-gradient" data-testid="pricing-cta-premium">
              {premium.cta} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-gray-400 font-medium">Free</th>
                <th className="text-center py-4 px-4 text-violet-400 font-medium">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "VPN Access", free: "Limited daily usage", premium: "Unlimited" },
                { feature: "Server Locations", free: "10+", premium: "50+" },
                { feature: "Connection Speed", free: "Standard", premium: "High-speed" },
                { feature: "Device Connections", free: "1", premium: "5" },
                { feature: "Kill Switch", free: false, premium: true },
                { feature: "Auto-Connect", free: false, premium: true },
                { feature: "Ads", free: "Yes", premium: "No ads" },
                { feature: "Support", free: "Basic", premium: "Priority 24/7" }
              ].map((row, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="py-4 px-4 text-gray-300">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.free === "boolean" ? (
                      row.free ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />
                    ) : (
                      <span className="text-gray-400">{row.free}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.premium === "boolean" ? (
                      row.premium ? <Check className="w-5 h-5 text-emerald-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />
                    ) : (
                      <span className="text-white">{row.premium}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Billing Questions</h2>
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">How does billing work?</h3>
            <p className="text-gray-400 text-sm">
              Premium subscriptions are billed {isYearly ? "annually" : "monthly"}. {PRICING_CONFIG.billing.renewalNote}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-gray-400 text-sm">
              {PRICING_CONFIG.billing.cancellationNote}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">What if my payment fails?</h3>
            <p className="text-gray-400 text-sm">
              {PRICING_CONFIG.billing.gracePeriodNote}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">What happens when my subscription expires?</h3>
            <p className="text-gray-400 text-sm">
              When your Premium subscription ends, your account automatically reverts to the Free plan. You can continue using {SITE_CONFIG.brand.name} with Free plan limitations or resubscribe at any time.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <h3 className="text-white font-semibold mb-2">Can I get a refund?</h3>
            <p className="text-gray-400 text-sm">
              {PRICING_CONFIG.refund.note}
            </p>
          </div>
        </div>
      </section>

      {/* Payment Security */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
          <Shield className="w-12 h-12 text-violet-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Secure Payments</h3>
          <p className="text-gray-400 text-sm mb-4">
            {PRICING_CONFIG.billing.securityNote}
          </p>
          <p className="text-gray-500 text-xs">
            Your payment appears as "{PRICING_CONFIG.billing.statementDescriptor}" on your statement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
