import "@/App.css";
import { useState } from "react";
import { 
  Shield, 
  Zap, 
  Globe, 
  Gift, 
  Eye, 
  Power, 
  Wifi, 
  ChevronRight, 
  Menu, 
  X,
  Check,
  Star,
  Download,
  Smartphone,
  Lock,
  Server,
  Users,
  Activity,
  Clock,
  ArrowRight,
  Play,
  Apple
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

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

// Navbar Component
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#why-qvpn" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" data-testid="logo">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">QVPN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white hover:bg-white/10"
              data-testid="nav-login-btn"
            >
              Log in
            </Button>
            <Button 
              className="btn-gradient"
              data-testid="nav-get-started-btn"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden" data-testid="mobile-menu">
          <div className="pt-20 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-4 text-lg text-gray-400 hover:text-white border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 space-y-4">
              <Button variant="outline" className="w-full border-white/20 text-white">
                Log in
              </Button>
              <Button className="w-full btn-gradient">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
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
              <Star className="w-3 h-3 text-violet-400" />
              <span>Trusted by 1M+ Users Worldwide</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Secure, Fast &</span>
            <br />
            <span className="gradient-text">Smart VPN</span>
            <br />
            <span className="text-white">for Everyone</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience lightning-fast, military-grade encrypted browsing. 
            Get free access through rewards or go unlimited with our premium plan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button className="btn-primary flex items-center gap-2 w-full sm:w-auto" data-testid="hero-get-started-btn">
              Get Started Free
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button className="btn-secondary flex items-center gap-2 w-full sm:w-auto" data-testid="hero-download-btn">
              <Download className="w-4 h-4" />
              Download App
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
              data-testid="google-play-link"
            >
              <Play className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400">GET IT ON</div>
                <div className="text-sm font-medium text-white">Google Play</div>
              </div>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
              data-testid="app-store-link"
            >
              <Apple className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400">Download on the</div>
                <div className="text-sm font-medium text-white">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
    </section>
  );
};

// Trust Stats Bar
const TrustStats = () => {
  const stats = [
    { icon: Users, value: "1M+", label: "Active Users" },
    { icon: Server, value: "50+", label: "Global Servers" },
    { icon: Activity, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "10Gbps", label: "Speed" }
  ];

  return (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm" data-testid="trust-stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center stats-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div className="flex items-center justify-center mb-3">
                <div className="icon-container">
                  <stat.icon className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
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
      title: "Lightning Fast VPN",
      description: "Experience blazing fast speeds with our optimized WireGuard protocol. Stream, game, and browse without lag."
    },
    {
      icon: Gift,
      title: "Ad-Based Free Usage",
      description: "Earn VPN minutes by watching short ads. Perfect for users who want secure browsing without spending."
    },
    {
      icon: Eye,
      title: "No Logs Policy",
      description: "Your privacy is sacred. We never log, store, or track your online activities. 100% anonymous browsing."
    },
    {
      icon: Globe,
      title: "Global Servers",
      description: "Connect to 50+ servers worldwide. Access content from anywhere with our extensive network coverage."
    },
    {
      icon: Power,
      title: "Kill Switch",
      description: "Stay protected even when your VPN drops. Our kill switch instantly blocks all traffic until reconnected."
    },
    {
      icon: Wifi,
      title: "Auto Connect",
      description: "Automatic protection on untrusted networks. Connect to VPN instantly when joining public WiFi."
    }
  ];

  return (
    <section id="features" className="relative py-24 md:py-32" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <Shield className="w-3 h-3 text-violet-400" />
            <span>QVPN Features</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need for
            <br />
            <span className="gradient-text">Secure Browsing</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Packed with powerful features designed to keep you safe, fast, and anonymous online.
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
              {/* Icon */}
              <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-violet-400" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
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
      title: "Download & Connect",
      description: "Get the app from Google Play or App Store. One tap to connect to the fastest server near you."
    },
    {
      number: "02",
      icon: Shield,
      title: "Browse Securely",
      description: "Enjoy encrypted browsing with military-grade protection. Your data stays private and secure."
    },
    {
      number: "03",
      icon: Gift,
      title: "Earn or Upgrade",
      description: "Watch ads to earn free VPN time or upgrade to Premium for unlimited, uninterrupted access."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 md:py-32" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <Clock className="w-3 h-3 text-violet-400" />
            <span>How It Works</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Protected in
            <br />
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-px">
            <div className="connection-line w-full" />
          </div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center p-8"
              data-testid={`step-${index + 1}`}
            >
              {/* Step Number Watermark */}
              <div className="step-number">{step.number}</div>
              
              {/* Icon */}
              <div className="relative z-10 mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
                <step.icon className="w-8 h-8 text-violet-400" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="relative z-10 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Product Showcase Section
const ProductShowcase = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" data-testid="product-showcase-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge className="section-badge mb-6">
              <Smartphone className="w-3 h-3 text-violet-400" />
              <span>Mobile First Design</span>
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Beautiful App
              <br />
              <span className="gradient-text">Built for Mobile</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              Designed specifically for mobile networks with an intuitive interface. 
              Connect, manage servers, and track your rewards all in one place.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {[
                "One-tap connection to fastest server",
                "Real-time server selection & ping display",
                "Reward credits tracking dashboard",
                "Battery-optimized background operation"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 bg-violet-600/30 rounded-full blur-[100px]" />
            </div>

            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] app-mockup animate-float" data-testid="app-mockup">
              <div className="p-6 pt-12">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-8">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Activity className="w-3 h-3" />
                    <Wifi className="w-3 h-3" />
                  </div>
                </div>

                {/* Connection Status */}
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center relative">
                    <div className="absolute inset-2 rounded-full bg-[#0a0a0f] flex items-center justify-center">
                      <Power className="w-12 h-12 text-emerald-400" />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-violet-500/50 animate-ping" />
                  </div>
                  <div className="text-emerald-400 font-semibold mb-1">Connected</div>
                  <div className="text-gray-500 text-sm">Tokyo, Japan</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-gray-500 mb-1">Download</div>
                    <div className="text-sm font-semibold text-white">125 Mb/s</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-gray-500 mb-1">Upload</div>
                    <div className="text-sm font-semibold text-white">48 Mb/s</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-xs text-gray-500 mb-1">Ping</div>
                    <div className="text-sm font-semibold text-white">24 ms</div>
                  </div>
                </div>

                {/* Reward Credits */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Reward Credits</div>
                      <div className="text-lg font-bold text-white">2h 45m</div>
                    </div>
                    <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white text-xs">
                      Earn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="glow-orb glow-orb-blue w-[400px] h-[400px] -bottom-32 -right-32 absolute" />
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for casual users who want secure browsing",
      price: { monthly: 0, yearly: 0 },
      features: [
        "Ad-supported VPN minutes",
        "Access to 10+ servers",
        "Standard encryption",
        "Basic support",
        "1 device connection"
      ],
      cta: "Start Free",
      highlighted: false
    },
    {
      name: "Premium",
      description: "For power users who need unlimited, fast access",
      price: { monthly: 9.99, yearly: 4.99 },
      features: [
        "Unlimited VPN access",
        "Access to 50+ servers",
        "Military-grade encryption",
        "Priority 24/7 support",
        "5 device connections",
        "Kill switch & auto-connect",
        "No ads, no limits"
      ],
      cta: "Go Premium",
      highlighted: true,
      badge: "Most Popular"
    }
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32" data-testid="pricing-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <Star className="w-3 h-3 text-violet-400" />
            <span>Pricing Plans</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-8">
            Start free with ads or unlock unlimited access with Premium. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              data-testid="billing-toggle"
            />
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 text-xs text-emerald-400 font-medium">Save 50%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl flex flex-col ${
                plan.highlighted 
                  ? 'pricing-premium bg-white/[0.05] glow-purple' 
                  : 'bg-white/[0.03] border border-white/10'
              }`}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-500">/month</span>
                  )}
                </div>
                {plan.price.monthly > 0 && isYearly && (
                  <div className="text-sm text-gray-500 mt-1">
                    Billed annually (${(plan.price.yearly * 12).toFixed(2)}/year)
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full ${plan.highlighted ? 'btn-gradient' : 'btn-secondary'}`}
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="glow-orb glow-orb-purple w-[300px] h-[300px] top-1/3 -left-32 absolute" />
    </section>
  );
};

// Why QVPN Section
const WhyQVPNSection = () => {
  const reasons = [
    {
      icon: Smartphone,
      title: "Built for Mobile Networks",
      description: "Optimized specifically for 4G/5G and mobile WiFi with smart bandwidth management."
    },
    {
      icon: Zap,
      title: "Optimized WireGuard",
      description: "Custom WireGuard implementation delivers 40% faster speeds than traditional VPNs."
    },
    {
      icon: Lock,
      title: "Smart Session Control",
      description: "Intelligent session management prevents battery drain while maintaining protection."
    }
  ];

  return (
    <section id="why-qvpn" className="relative py-24 md:py-32 bg-white/[0.02]" data-testid="why-qvpn-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="section-badge mb-6">
            <Shield className="w-3 h-3 text-violet-400" />
            <span>Why QVPN</span>
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose
            <br />
            <span className="gradient-text">QVPN?</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center p-8"
              data-testid={`reason-${index + 1}`}
            >
              <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
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
          Start Browsing
          <br />
          <span className="gradient-text">Securely Today</span>
        </h2>
        
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10">
          Join over 1 million users who trust QVPN for their online privacy. 
          Download now and get instant protection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="btn-gradient flex items-center gap-2 h-14 px-10" data-testid="cta-download-btn">
            <Download className="w-5 h-5" />
            Download Now
          </Button>
          <Button className="btn-secondary flex items-center gap-2 h-14 px-10" data-testid="cta-learn-more-btn">
            Learn More
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] -bottom-64 left-1/2 -translate-x-1/2 absolute" />
    </section>
  );
};

// Footer
const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download", href: "#" },
      { name: "Servers", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Status", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "Discord", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/10 footer-pattern" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">QVPN</span>
            </a>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Secure, fast, and smart VPN for everyone. Protect your privacy with military-grade encryption.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  data-testid={`social-${social.name.toLowerCase()}`}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="text-xs font-medium">{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 QVPN. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200" data-testid="footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200" data-testid="footer-terms">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200" data-testid="footer-contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <HeroSection />
        <TrustStats />
        <FeaturesSection />
        <HowItWorksSection />
        <ProductShowcase />
        <PricingSection />
        <WhyQVPNSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
