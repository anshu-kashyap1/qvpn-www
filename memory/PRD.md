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

## What's Been Implemented (January 2026)

### Pages Created/Updated
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, trust section, what is QVPN, use cases, features, how it works, pricing preview, FAQ preview, CTA |
| Pricing | `/pricing` | Full pricing plans, feature comparison, billing FAQ, payment security |
| About | `/about` | Mission, values, company information with legal disclosure |
| Contact | `/contact` | Support email, business email, privacy email, contact form |
| FAQ | `/faq` | Searchable FAQ with 4 categories |
| Privacy Policy | `/privacy` | Complete privacy policy with data collection details |
| Terms of Service | `/terms` | Full terms including acceptable use, billing, termination |
| Refund Policy | `/refund-policy` | Cancellation and refund details |
| Help Center | `/help` | Help center navigation |
| Account & Billing Help | `/help/account-billing` | Account management, password, deletion, recovery, billing |
| Email Notifications | `/help/emails` | Explanation of transactional emails sent |

### Centralized Configuration Files
| File | Purpose |
|------|---------|
| `/app/frontend/src/config/site.js` | Single source of truth for all site configuration |

#### Configuration Contents in site.js:
- `SITE_CONFIG` - Brand, legal, contact, social, app links, SEO
- `PRICING_CONFIG` - Plans, billing, refund policy
- `PRIVACY_CONFIG` - Data collected/not collected, privacy statements
- `EMAIL_CONFIG` - Transactional email types
- `ACCOUNT_CONFIG` - Deletion, recovery, subscription behavior
- `NAV_LINKS` - Navigation structure
- `FAQ_DATA` - All FAQ questions and answers

### Components Created
| Component | Path |
|-----------|------|
| Layout | `/app/frontend/src/components/layout/Layout.jsx` |
| Navbar | `/app/frontend/src/components/layout/Navbar.jsx` |
| Footer | `/app/frontend/src/components/layout/Footer.jsx` |

### Technical Stack
- React 19 with React Router
- Tailwind CSS for styling
- Shadcn/UI components
- Lucide-react icons

## SEO Implementation
- Updated `/app/frontend/public/index.html` with:
  - Primary meta tags (title, description, keywords, author)
  - Open Graph meta tags
  - Twitter Card meta tags
  - Favicon links
  - Canonical URL

## Placeholders Requiring Business/Legal Input

### In `/app/frontend/src/config/site.js`:
1. **Business Address**: `businessAddress: "[Business Address - To Be Added]"`
2. **Governing Law**: `governingLaw: "[Governing Law Jurisdiction - To Be Added]"`
3. **App Store Links**: Currently set to `"#"` - update when apps are published
4. **Social Links**: Currently set to `"#"` - update when accounts are created
5. **Pricing**: Confirm exact pricing before launch
   - Free plan: $0
   - Premium monthly: $9.99
   - Premium yearly: $59.99 ($4.99/month equivalent)
6. **Statement Descriptor**: `statementDescriptor: "QVPN*SUBSCRIPTION"`
7. **Refund Window**: Currently set to 7 days - confirm

## Legal Pages Content
All legal pages are written specifically for QVPN and include:
- Privacy Policy: Specific data collection practices, no fake claims
- Terms of Service: Acceptable use, billing, termination clauses
- Refund Policy: Cancellation process, refund eligibility, grace period

## Trust & Compliance Features
1. **Legal Disclosure**: Footer shows "QVPN is operated by DIAMANTE FINANCIAL TECHNOLOGIES L.L.C."
2. **Support Email**: Visible throughout site (support@qvpn.io)
3. **Privacy Statements**: Honest, conservative language
4. **Billing Clarity**: Subscription renewal, cancellation, grace period explained
5. **Payment Security**: "Payments are processed securely via Stripe"

## Contact Form Behavior
The contact form uses a mailto fallback approach:
- Validates form fields (name, email, subject, message)
- Opens user's email client with pre-filled content
- Shows confirmation message
- Provides direct email link as fallback

Note: For backend form submission, integrate with email service provider.

## P0 Features (Completed)
- [x] All 11 pages implemented
- [x] Responsive design (mobile + desktop)
- [x] Navigation with smooth scroll
- [x] Footer with all legal links
- [x] Legal operator disclosure
- [x] Support email visibility
- [x] Pricing with monthly/yearly toggle
- [x] FAQ with search
- [x] SEO meta tags
- [x] Honest privacy copy (no fake claims)

## P1 Features (Backlog)
- [ ] Replace placeholder app store links
- [ ] Replace placeholder social links
- [ ] Add business address
- [ ] Add governing law jurisdiction
- [ ] Implement backend contact form
- [ ] Add analytics tracking
- [ ] Add sitemap.xml
- [ ] Add robots.txt

## P2 Features (Future)
- [ ] Live chat integration
- [ ] Server status page
- [ ] Multi-language support
- [ ] Blog section

## Next Tasks
1. Confirm and update pricing values in config
2. Add real app store URLs when apps are published
3. Add business address for legal compliance
4. Confirm governing law jurisdiction
5. Set up backend contact form if needed
6. Add Google Analytics or similar

## File Structure
```
/app/frontend/src/
├── App.js                    # Main app with routing
├── config/
│   └── site.js              # Centralized configuration
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

## Changelog
- **Jan 2026**: Complete website rewrite with multi-page structure
  - Added 11 pages with proper routing
  - Created centralized configuration
  - Implemented honest privacy copy
  - Added legal operator disclosure throughout
  - Added SEO meta tags
  - Created comprehensive legal pages
