import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import {
  HomePage,
  PricingPage,
  AboutPage,
  ContactPage,
  FAQPage,
  PrivacyPage,
  TermsPage,
  RefundPolicyPage,
  HelpPage,
  AccountBillingHelpPage,
  EmailNotificationsPage
} from "@/pages";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the element
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// 404 Not Found Page
const NotFoundPage = () => (
  <div className="pt-32 pb-20 text-center">
    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
    <p className="text-xl text-gray-400 mb-8">Page not found</p>
    <a href="/" className="text-violet-400 hover:text-violet-300">
      ← Back to Home
    </a>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          
          {/* Help Pages */}
          <Route path="/help" element={<HelpPage />} />
          <Route path="/help/account-billing" element={<AccountBillingHelpPage />} />
          <Route path="/help/emails" element={<EmailNotificationsPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
