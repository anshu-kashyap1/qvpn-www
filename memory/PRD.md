# QVPN Marketing Website - Product Requirements Document

## Original Problem Statement
Build a complete production-ready marketing website for QVPN at qvpn.io. The website must be suitable for Stripe business review, AWS SES production review, and general customer trust and conversion.

## Business Context
- **Product Brand Name**: QVPN
- **Domain**: qvpn.io
- **Legal Business/Operator**: DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.
- **Product Type**: Consumer VPN app / subscription business

## Core Positioning
- Fast VPN
- Privacy-first
- WireGuard-based
- Secure internet access
- Simple apps and global server access

## Privacy Positioning (IMPORTANT)
- Do NOT claim we collect user activity logs
- Privacy copy must be honest and conservative
- We collect only basic information necessary to operate the service
- Safe wording used throughout:
  - "Privacy-first VPN"
  - "We do not log your browsing activity"
  - "We do not use your browsing activity for advertising"
  - "We collect only the minimum information necessary"

---

## Centralized Configuration

All site configuration is in `/app/frontend/src/config/site.js`:

### Pricing Configuration (PRICING_CONFIG)
```javascript
{
  currency: "USD",
  currencySymbol: "$",
  plans: {
    free: {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Limited access with ads"
    },
    premium: {
      name: "Premium", 
      price: { monthly: 9.99, yearly: 59.99 },
      yearlyMonthlyEquivalent: 4.99,
      yearlyBadge: "Best Value"
    }
  },
  billing: {
    renewalNote: "Subscriptions renew automatically unless canceled before the renewal date.",
    gracePeriodNote: "If payment fails, access may continue for a short grace period before downgrade to free tier."
  },
  refund: {
    note: "Refunds are handled according to the Refund & Cancellation Policy and applicable law."
  }
}
```

### Legal Configuration (SITE_CONFIG.legal)
```javascript
{
  operatorName: "DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.",
  operatorDisclosure: "QVPN is operated by DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.",
  businessAddress: "[TO BE PROVIDED BEFORE PUBLIC LAUNCH]",  // TODO: Update before launch
  governingLaw: "These Terms are governed by the laws of the jurisdiction in which DIAMANTE FINANCIAL TECHNOLOGIES L.L.C. is organized, unless otherwise required by applicable law."
}
```

### App Store Links (SITE_CONFIG.appLinks)
```javascript
{
  googlePlay: {
    url: "#",
    available: false,
    label: "Android app — coming soon"
  },
  appStore: {
    url: "#", 
    available: false,
    label: "iOS app — coming soon"
  }
}
```

---

## Pages Implemented

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, trust section, what is QVPN, use cases, features, how it works, pricing preview, FAQ preview, CTA |
| Pricing | `/pricing` | Full pricing plans, feature comparison, billing FAQ, payment security |
| About | `/about` | Mission, values, company information with legal disclosure |
| Contact | `/contact` | Support email, business email, contact form with validation |
| FAQ | `/faq` | Searchable FAQ with 4 categories |
| Privacy Policy | `/privacy` | Complete privacy policy with data collection details |
| Terms of Service | `/terms` | Full terms including acceptable use, billing, termination |
| Refund Policy | `/refund-policy` | Cancellation and refund details |
| Help Center | `/help` | Help center navigation |
| Account & Billing Help | `/help/account-billing` | Account management, password, deletion, recovery, billing |
| Email Notifications | `/help/emails` | Explanation of transactional emails sent |

---

## Placeholders Requiring Manual Update Before Launch

### In `/app/frontend/src/config/site.js`:

1. **Business Address** (line ~35)
   ```javascript
   businessAddress: "[TO BE PROVIDED BEFORE PUBLIC LAUNCH]"
   ```
   
2. **App Store URLs** (when apps are published)
   ```javascript
   googlePlay: {
     url: "https://play.google.com/store/apps/details?id=...",
     available: true,
     label: "Google Play"
   },
   appStore: {
     url: "https://apps.apple.com/app/...",
     available: true, 
     label: "App Store"
   }
   ```

3. **Social Media URLs** (when accounts are created)
   ```javascript
   social: {
     twitter: "https://twitter.com/qvpn",
     discord: "https://discord.gg/...",
     // etc.
   }
   ```

---

## Contact Form Integration

The contact form in `/app/frontend/src/pages/ContactPage.jsx` currently uses mailto fallback.

**TODO for backend integration:**
```javascript
// Replace mailto with API call:
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formState)
});
```

Current behavior:
- Form has full validation (name, email, subject, message)
- Opens user's email client with pre-filled content
- Shows clear fallback: "For support, billing, or account help, email support@qvpn.io"

---

## SEO Implementation

Updated `/app/frontend/public/index.html` with:
- Primary meta tags (title, description, keywords, author)
- Open Graph meta tags for social sharing
- Twitter Card meta tags
- Favicon links
- Canonical URL (https://qvpn.io/)
- Author: DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.

---

## Trust & Compliance Features

1. **Legal Disclosure**: Footer shows "QVPN is operated by DIAMANTE FINANCIAL TECHNOLOGIES L.L.C."
2. **Support Email**: Visible throughout site (support@qvpn.io)
3. **Privacy Statements**: Honest, conservative language - no fake claims
4. **Billing Clarity**: Subscription renewal, cancellation, grace period explained
5. **Payment Security**: "Payments are processed securely via Stripe"

---

## File Structure

```
/app/frontend/src/
├── App.js                          # Main app with routing
├── config/
│   └── site.js                     # SINGLE SOURCE OF TRUTH - all configuration
├── components/
│   └── layout/
│       ├── Layout.jsx
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       └── index.js
└── pages/
    ├── HomePage.jsx
    ├── PricingPage.jsx
    ├── AboutPage.jsx
    ├── ContactPage.jsx
    ├── FAQPage.jsx
    ├── PrivacyPage.jsx
    ├── TermsPage.jsx
    ├── RefundPolicyPage.jsx
    ├── HelpPage.jsx
    ├── AccountBillingHelpPage.jsx
    ├── EmailNotificationsPage.jsx
    └── index.js
```

---

## Changelog

### January 2026 - Initial Production Build
- Created complete 11-page marketing website
- Implemented centralized configuration in `/app/frontend/src/config/site.js`
- All pricing, legal, contact info in single source of truth
- Added SEO meta tags
- Honest privacy copy (no fake claims)
- Legal operator disclosure throughout
- App store badges show "coming soon" state
- Contact form with validation and mailto fallback
- Governing law uses jurisdiction-agnostic language

---

## Pre-Launch Checklist

- [ ] Update `businessAddress` in site.js with actual address
- [ ] Update Google Play URL when Android app is published
- [ ] Update App Store URL when iOS app is published
- [ ] Update social media URLs when accounts are created
- [ ] Implement backend contact form API (optional)
- [ ] Add actual favicon and OG image assets
- [ ] Confirm statement descriptor with Stripe
- [ ] Final legal review of Privacy Policy and Terms
