import { Shield, Users, Lock, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG, PRIVACY_CONFIG } from "@/config/site";

export const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Badge className="section-badge mb-6">
          <Heart className="w-3 h-3 text-violet-400" />
          <span>About Us</span>
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          About {SITE_CONFIG.brand.name}
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {SITE_CONFIG.brand.tagline} — Simple, secure VPN for everyone.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {SITE_CONFIG.brand.name} was built with a simple goal: to provide fast, reliable VPN protection 
            that respects your privacy. We believe everyone deserves easy access to secure internet 
            connections without complicated setup or confusing options.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Using the modern WireGuard protocol, {SITE_CONFIG.brand.name} delivers fast connections with 
            strong encryption. Whether you're on public Wi-Fi, traveling, or simply want more privacy 
            online, {SITE_CONFIG.brand.name} is designed to help.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-12">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-gray-400 text-sm">
              {PRIVACY_CONFIG.statements.noActivityLogging}
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Transparency</h3>
            <p className="text-gray-400 text-sm">
              We're clear about what data we collect and why. No hidden practices or confusing policies.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Simplicity</h3>
            <p className="text-gray-400 text-sm">
              VPN protection shouldn't be complicated. Our apps are designed to be easy for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Company Information</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            {SITE_CONFIG.legal.operatorDisclosure}
          </p>
          <div className="pt-6 border-t border-white/10">
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">
              Support: <a href={`mailto:${SITE_CONFIG.contact.supportEmail}`} className="text-violet-400 hover:text-violet-300">{SITE_CONFIG.contact.supportEmail}</a>
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Business Inquiries: <a href={`mailto:${SITE_CONFIG.contact.businessEmail}`} className="text-violet-400 hover:text-violet-300">{SITE_CONFIG.contact.businessEmail}</a>
            </p>
            <p className="text-gray-400 text-sm">
              Privacy Concerns: <a href={`mailto:${SITE_CONFIG.contact.privacyEmail}`} className="text-violet-400 hover:text-violet-300">{SITE_CONFIG.contact.privacyEmail}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
