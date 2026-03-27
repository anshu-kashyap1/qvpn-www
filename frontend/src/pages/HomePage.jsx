import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Shield, Zap, Globe, Eye, Power, Wifi, ChevronRight, Check, Star,
  Download, Smartphone, Lock, Server, Users, Activity, Clock, ArrowRight, Play, Apple,
  HelpCircle, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { SITE_CONFIG, PRICING_CONFIG, FAQ_DATA, PRIVACY_CONFIG } from "@/config/site";

// Star Field Background Component
const StarField = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    size: Math.random() * 2 + 1
  }));

  return (
    <div className="star-field">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.animationDelay
          }}
        />
      ))}
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-gradient" data-testid="hero-section">
      <StarField />
      
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[600px] h-[600px] -top-40 -left-40 absolute" />
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] top-1/2 right-0 absolute" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <Badge className="section-badge">
              <Shield className="w-3 h-3 text-violet-400" />
              <span>Privacy-First VPN</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Fast, Secure &</span>
            <br />
            <span className="gradient-text">Privacy-First</span>
            <br />
            <span className="text-white">VPN</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Protect your privacy on public Wi-Fi, while traveling, and online. 
            Built on WireGuard for fast, secure connections you can trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button className="btn-primary flex items-center gap-2 w-full sm:w-auto" data-testid="hero-get-started-btn">
              Get Started Free
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Link to="/pricing">
              <Button className="btn-secondary flex items-center gap-2 w-full sm:w-auto" data-testid="hero-pricing-btn">
                View Pricing
              </Button>
            </Link>
          </div>

          {/* App Store Badges */}
          <div id="download" className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {SITE_CONFIG.appLinks.googlePlay.available ? (
              <a 
                href={SITE_CONFIG.appLinks.googlePlay.url}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                data-testid="google-play-link"
              >
                <Play className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400">GET IT ON</div>
                  <div className="text-sm font-medium text-white">Google Play</div>
                </div>
              </a>
            ) : (
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 opacity-60 cursor-not-allowed"
                data-testid="google-play-link"
              >
                <Play className="w-5 h-5 text-gray-400" />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-400">{SITE_CONFIG.appLinks.googlePlay.label}</div>
                </div>
              </div>
            )}
            {SITE_CONFIG.appLinks.appStore.available ? (
              <a 
                href={SITE_CONFIG.appLinks.appStore.url}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
                data-testid="app-store-link"
              >
                <Apple className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400">Download on the</div>
                  <div className="text-sm font-medium text-white">App Store</div>
                </div>
              </a>
            ) : (
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 opacity-60 cursor-not-allowed"
                data-testid="app-store-link"
              >
                <Apple className="w-5 h-5 text-gray-400" />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-400">{SITE_CONFIG.appLinks.appStore.label}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
};

// What is QVPN Section
const WhatIsSection = () => {
  return (
    <section className="relative py-20 bg-white/[0.02]" data-testid="what-is-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="section-badge mb-6">
            <HelpCircle className="w-3 h-3 text-violet-400" />
            <span>What is QVPN?</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Privacy, Protected
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            QVPN is a privacy-first VPN service that encrypts your internet connection, 
            keeping your online activities private and secure. We use the modern WireGuard protocol 
            for fast, reliable connections without compromising on security.
          </p>
          
          {/* Privacy Statement */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-violet-400" />
              Our Privacy Commitment
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{PRIVACY_CONFIG.statements.noActivityLogging}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{PRIVACY_CONFIG.statements.noAdTargeting}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{PRIVACY_CONFIG.statements.minimalCollection}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Use Cases Section
const UseCasesSection = () => {
  const useCases = [
    {
      icon: Wifi,
      title: "Public Wi-Fi Protection",
      description: "Stay secure on coffee shop, airport, and hotel networks. Your data is encrypted and protected from snoopers."
    },
    {
      icon: Globe,
      title: "Safer Browsing",
      description: "Add an extra layer of privacy to your everyday browsing. Keep your online activities private."
    },
    {
      icon: Smartphone,
      title: "Travel Security",
      description: "Access your accounts securely while traveling. Connect with confidence from anywhere in the world."
    },
    {
      icon: Shield,
      title: "Secure Connections",
      description: "Encrypted connections using the modern WireGuard protocol for speed and reliability."
    }
  ];

  return (
    <section className="relative py-20" data-testid="use-cases-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            When to Use QVPN
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Protect yourself in everyday situations where your privacy matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <div className="icon-container mb-4">
                <useCase.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400 text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "WireGuard Protocol",
      description: "Built on modern WireGuard technology for fast, secure connections with minimal overhead."
    },
    {
      icon: Globe,
      title: "Global Server Network",
      description: "Connect to servers around the world for reliable access wherever you are."
    },
    {
      icon: Eye,
      title: "Privacy-First Design",
      description: "We don't log your browsing activity or use your data for advertising. Your privacy comes first."
    },
    {
      icon: Power,
      title: "Kill Switch",
      description: "Automatic protection that blocks internet traffic if your VPN connection drops unexpectedly."
    },
    {
      icon: Wifi,
      title: "Auto-Connect",
      description: "Automatically connect to VPN when joining untrusted networks like public Wi-Fi."
    },
    {
      icon: Smartphone,
      title: "Simple Apps",
      description: "Easy-to-use apps for Android, iOS, Windows, and macOS. Connect with one tap."
    }
  ];

  return (
    <section id="features" className="relative py-24 md:py-32" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <Shield className="w-3 h-3 text-violet-400" />
            <span>Features</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Simple, powerful VPN features designed with your privacy in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden"
              data-testid={`feature-card-${index}`}
            >
              <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="glow-orb glow-orb-purple w-[300px] h-[300px] top-1/4 -left-32 absolute" />
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download the App",
      description: "Get QVPN from the Google Play Store or Apple App Store. Available for all major platforms."
    },
    {
      number: "02",
      icon: Shield,
      title: "Connect with One Tap",
      description: "Open the app and tap connect. We'll automatically select the fastest server for you."
    },
    {
      number: "03",
      icon: Lock,
      title: "Browse Privately",
      description: "Your connection is now encrypted. Browse, stream, and work with peace of mind."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <Clock className="w-3 h-3 text-violet-400" />
            <span>How It Works</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Started in Minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-px">
            <div className="connection-line w-full" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center p-8" data-testid={`step-${index + 1}`}>
              <div className="step-number">{step.number}</div>
              <div className="relative z-10 mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="relative z-10 text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="relative z-10 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Preview Section
const PricingPreviewSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { free, premium } = PRICING_CONFIG.plans;

  return (
    <section id="pricing-preview" className="relative py-24 md:py-32 bg-white/[0.02]" data-testid="pricing-preview-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <CreditCard className="w-3 h-3 text-violet-400" />
            <span>Pricing</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8">
            Start free or go Premium for unlimited access. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} data-testid="billing-toggle" />
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Yearly <span className="text-xs text-emerald-400 font-medium">Save 50%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col" data-testid="pricing-card-free">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{free.name}</h3>
              <p className="text-gray-400 text-sm">{free.description}</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">${PRICING_CONFIG.currencySymbol}0</span>
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
              <h3 className="text-2xl font-bold text-white mb-2">{premium.name}</h3>
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

        {/* Billing Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            {PRICING_CONFIG.billing.securityNote} {PRICING_CONFIG.billing.cancellationNote}
          </p>
          <Link to="/pricing" className="text-violet-400 hover:text-violet-300 text-sm mt-2 inline-block">
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
};

// FAQ Preview Section
const FAQPreviewSection = () => {
  const previewFAQs = FAQ_DATA.slice(0, 2).flatMap(cat => cat.questions.slice(0, 2));

  return (
    <section className="relative py-20" data-testid="faq-preview-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="section-badge mb-6">
            <HelpCircle className="w-3 h-3 text-violet-400" />
            <span>FAQ</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {previewFAQs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/faq">
            <Button className="btn-secondary">
              View All FAQs <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 cta-gradient" data-testid="cta-section">
      <StarField />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center animate-pulse-glow">
          <Shield className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10">
          Download QVPN today and take control of your online privacy. 
          Start with our free plan or go Premium for unlimited access.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="btn-gradient flex items-center gap-2 h-14 px-10" data-testid="cta-download-btn">
            <Download className="w-5 h-5" />
            Download Now
          </Button>
          <Link to="/contact">
            <Button className="btn-secondary flex items-center gap-2 h-14 px-10" data-testid="cta-contact-btn">
              Contact Support
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] -bottom-64 left-1/2 -translate-x-1/2 absolute" />
    </section>
  );
};

// Trust Section
const TrustSection = () => {
  const trustItems = [
    { icon: Lock, text: "Encrypted Connections" },
    { icon: Eye, text: "No Activity Logging" },
    { icon: CreditCard, text: "Secure Payments" },
    { icon: Users, text: "Responsive Support" }
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="icon-container">
                  <item.icon className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <div className="text-sm text-gray-400">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home Page Component
export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhatIsSection />
      <UseCasesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <FAQPreviewSection />
      <CTASection />
    </>
  );
};

export default HomePage;
