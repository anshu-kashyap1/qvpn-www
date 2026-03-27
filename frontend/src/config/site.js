// =============================================================================
// QVPN Site Configuration - Single Source of Truth
// =============================================================================
// This file contains all centralized configuration for the QVPN marketing website.
// Update values here to reflect changes across the entire site.
// =============================================================================

// =============================================================================
// BRAND INFORMATION
// =============================================================================
export const SITE_CONFIG = {
  brand: {
    name: "QVPN",
    tagline: "Privacy-First VPN",
    description: "Fast, secure VPN built on WireGuard. Protect your privacy on public Wi-Fi, while traveling, and online.",
    domain: "qvpn.io",
    url: "https://qvpn.io"
  },

  // ===========================================================================
  // LEGAL BUSINESS INFORMATION
  // ===========================================================================
  // TODO: Update businessAddress before public launch
  // TODO: Update governingLaw with specific jurisdiction if needed
  // ===========================================================================
  legal: {
    operatorName: "DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.",
    operatorDisclosure: "QVPN is operated by DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.",
    copyrightYear: new Date().getFullYear(),
    
    // TODO: [BEFORE PUBLIC LAUNCH] Replace with actual business address
    businessAddress: "[TO BE PROVIDED BEFORE PUBLIC LAUNCH]",
    
    // Governing law statement - does not hardcode specific jurisdiction
    governingLaw: "These Terms are governed by the laws of the jurisdiction in which DIAMANTE FINANCIAL TECHNOLOGIES L.L.C. is organized, unless otherwise required by applicable law."
  },

  // ===========================================================================
  // CONTACT INFORMATION
  // ===========================================================================
  contact: {
    supportEmail: "support@qvpn.io",      // Primary public support email
    businessEmail: "hello@qvpn.io",        // Business inquiries
    privacyEmail: "privacy@qvpn.io",       // Privacy-related requests
    supportHours: "Monday - Friday, 9:00 AM - 6:00 PM (EST)"
  },

  // ===========================================================================
  // SOCIAL LINKS
  // ===========================================================================
  // TODO: Update with actual social media URLs when accounts are created
  // ===========================================================================
  social: {
    twitter: "#",
    discord: "#",
    instagram: "#",
    linkedin: "#"
  },

  // ===========================================================================
  // APP STORE LINKS
  // ===========================================================================
  // TODO: Update with actual app store URLs when apps are published
  // ===========================================================================
  appLinks: {
    googlePlay: {
      url: "#",
      available: false,
      label: "Android app — coming soon"
    },
    appStore: {
      url: "#",
      available: false,
      label: "iOS app — coming soon"
    },
    platforms: ["Android", "iOS", "Windows", "macOS"]
  },

  // ===========================================================================
  // SEO DEFAULTS
  // ===========================================================================
  seo: {
    defaultTitle: "QVPN - Privacy-First VPN | Fast & Secure",
    titleTemplate: "%s | QVPN",
    defaultDescription: "QVPN is a fast, privacy-first VPN built on WireGuard. Secure your internet connection on public Wi-Fi, while traveling, and protect your online privacy.",
    keywords: "VPN, privacy, WireGuard, secure browsing, public WiFi security, encrypted connection",
    ogImage: "/og-image.png"
  }
};

// =============================================================================
// PRICING CONFIGURATION
// =============================================================================
// All pricing values are centralized here for easy updates.
// =============================================================================
export const PRICING_CONFIG = {
  currency: "USD",
  currencySymbol: "$",
  
  plans: {
    free: {
      id: "free",
      name: "Free",
      description: "Limited access with ads",
      price: {
        monthly: 0,
        yearly: 0
      },
      features: [
        "Ad-supported VPN access",
        "Access to limited server locations",
        "Standard connection speeds",
        "1 device connection",
        "Basic support"
      ],
      limitations: [
        "Limited daily usage",
        "Ads shown during connection"
      ],
      cta: "Get Started Free",
      highlighted: false
    },
    premium: {
      id: "premium",
      name: "Premium",
      description: "Unlimited VPN access with all features",
      price: {
        monthly: 9.99,
        yearly: 59.99
      },
      yearlyMonthlyEquivalent: 4.99, // $59.99 / 12
      yearlyBadge: "Best Value",
      features: [
        "Unlimited VPN access",
        "All server locations",
        "High-speed connections",
        "Up to 5 device connections",
        "Priority support",
        "Kill switch protection",
        "Auto-connect on untrusted networks",
        "No ads"
      ],
      cta: "Go Premium",
      highlighted: true,
      badge: "Most Popular"
    }
  },

  // ===========================================================================
  // BILLING INFORMATION
  // ===========================================================================
  billing: {
    provider: "Stripe",
    securityNote: "Payments are processed securely via Stripe.",
    statementDescriptor: "QVPN*SUBSCRIPTION",
    autoRenewal: true,
    
    // Renewal copy
    renewalNote: "Subscriptions renew automatically unless canceled before the renewal date.",
    
    // Cancellation copy
    cancellationNote: "You can cancel anytime. Access continues until the end of your current billing period.",
    
    // Grace period copy
    gracePeriodNote: "If payment fails, access may continue for a short grace period before downgrade to free tier."
  },

  // ===========================================================================
  // REFUND POLICY
  // ===========================================================================
  refund: {
    note: "Refunds are handled according to the Refund & Cancellation Policy and applicable law.",
    contactNote: "For refund requests, contact support@qvpn.io with your account details."
  }
};

// =============================================================================
// PRIVACY & DATA COLLECTION INFORMATION
// =============================================================================
export const PRIVACY_CONFIG = {
  // What we collect
  dataCollected: {
    account: [
      "Email address (for account creation and communication)",
      "Password (securely hashed, never stored in plain text)"
    ],
    billing: [
      "Payment method details (processed by Stripe, not stored by us)",
      "Subscription status and billing history",
      "Transaction records for your account"
    ],
    device: [
      "Device type and operating system (for app compatibility)",
      "App version (for support and updates)"
    ],
    operational: [
      "Connection timestamps (for session management)",
      "Bandwidth usage (aggregate, for service optimization)",
      "Server selection preferences"
    ],
    support: [
      "Communications with our support team",
      "Feedback and feature requests you submit"
    ]
  },

  // What we do NOT collect
  dataNotCollected: [
    "Your browsing history or websites visited",
    "DNS queries while connected to VPN",
    "Your original IP address logs",
    "Traffic content or data packets"
  ],

  // Privacy statements
  statements: {
    noActivityLogging: "We do not log or monitor your browsing activity while connected to QVPN.",
    noAdTargeting: "We do not use your browsing activity for advertising or sell your data to third parties.",
    minimalCollection: "We collect only the minimum information necessary to operate the service, manage your account, process payments, and provide customer support.",
    dataRetention: "Account data is retained while your account is active. You may request deletion of your account and associated data at any time."
  }
};

// =============================================================================
// EMAIL COMMUNICATIONS (for SES review)
// =============================================================================
export const EMAIL_CONFIG = {
  transactionalEmails: [
    {
      type: "Account Verification",
      description: "Email to verify your email address when creating an account",
      trigger: "Account registration"
    },
    {
      type: "Password Reset",
      description: "Email with a secure link to reset your password",
      trigger: "Password reset request"
    },
    {
      type: "Account Deletion Confirmation",
      description: "Confirmation that your account deletion request has been received",
      trigger: "Account deletion request"
    },
    {
      type: "Account Recovery",
      description: "Email to recover a recently deleted account within the recovery window",
      trigger: "Account recovery request"
    },
    {
      type: "Payment Confirmation",
      description: "Receipt and confirmation of successful payment",
      trigger: "Successful subscription payment"
    },
    {
      type: "Subscription Renewal Reminder",
      description: "Reminder before your subscription automatically renews",
      trigger: "Before renewal date"
    },
    {
      type: "Payment Failed",
      description: "Notification that a payment attempt failed with instructions to update payment method",
      trigger: "Failed payment attempt"
    },
    {
      type: "Grace Period Warning",
      description: "Warning that your grace period is ending and Premium access may be lost",
      trigger: "During grace period after failed payment"
    },
    {
      type: "Subscription Cancelled",
      description: "Confirmation of subscription cancellation and when access ends",
      trigger: "Subscription cancellation"
    }
  ]
};

// =============================================================================
// ACCOUNT MANAGEMENT INFORMATION
// =============================================================================
export const ACCOUNT_CONFIG = {
  deletion: {
    recoveryPeriodDays: 14,
    note: "When you delete your account, it enters a 14-day recovery period. During this time, you can recover your account by logging in. After 14 days, your account and associated data are permanently deleted.",
    forceDeleteNote: "You may request immediate permanent deletion by contacting support@qvpn.io."
  },
  recovery: {
    note: "If you've recently deleted your account and want to recover it, simply try logging in within 14 days of deletion. You'll receive an option to restore your account."
  },
  subscription: {
    expiryBehavior: "When your Premium subscription ends or expires, your account automatically reverts to the Free plan with limited features.",
    gracePeriod: "If payment fails, access may continue for a short grace period before downgrade to free tier."
  }
};

// =============================================================================
// NAVIGATION LINKS
// =============================================================================
export const NAV_LINKS = {
  main: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" }
  ],
  footer: {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Download", href: "/#download" },
      { name: "FAQ", href: "/faq" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" }
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact Support", href: "/contact" },
      { name: "Account & Billing", href: "/help/account-billing" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refund-policy" }
    ]
  }
};

// =============================================================================
// FAQ DATA
// =============================================================================
export const FAQ_DATA = [
  {
    category: "General",
    questions: [
      {
        q: "What is QVPN?",
        a: "QVPN is a privacy-first VPN (Virtual Private Network) service built on the WireGuard protocol. It encrypts your internet connection, protecting your data on public Wi-Fi, while traveling, and helping maintain your online privacy."
      },
      {
        q: "Which devices does QVPN support?",
        a: "QVPN is available for Android, iOS, Windows, and macOS. You can download the app from the Google Play Store, Apple App Store, or our website when available."
      },
      {
        q: "How does QVPN protect my privacy?",
        a: "QVPN encrypts all data transmitted between your device and our servers using the WireGuard protocol. This prevents third parties from intercepting your internet traffic. We do not log your browsing activity or use your data for advertising."
      }
    ]
  },
  {
    category: "Privacy & Data",
    questions: [
      {
        q: "Does QVPN log my browsing activity?",
        a: "No. We do not log, monitor, or store your browsing activity, websites visited, or DNS queries while connected to QVPN."
      },
      {
        q: "What information does QVPN collect?",
        a: "We collect only the minimum information necessary to operate the service: your email address for account management, payment information processed securely by Stripe, basic device information for app compatibility, and connection timestamps for session management. We do not collect or store your browsing history."
      },
      {
        q: "Is my data sold to third parties?",
        a: "No. We do not sell, rent, or share your personal data with third parties for advertising or marketing purposes."
      }
    ]
  },
  {
    category: "Subscriptions & Billing",
    questions: [
      {
        q: "How do subscriptions work?",
        a: "Premium subscriptions are billed monthly or yearly, depending on your chosen plan. Subscriptions renew automatically unless canceled before the renewal date."
      },
      {
        q: "How do I cancel my subscription?",
        a: "You can cancel your subscription at any time through your account settings in the app or by contacting support@qvpn.io. When you cancel, you retain Premium access until the end of your current billing period."
      },
      {
        q: "What happens if my payment fails?",
        a: "If payment fails, access may continue for a short grace period before downgrade to free tier. You'll receive email notifications to update your payment method."
      },
      {
        q: "What happens when my subscription expires?",
        a: "When your Premium subscription ends or expires, your account automatically reverts to the Free plan. You can continue using QVPN with the Free plan's limitations, or resubscribe to Premium at any time."
      },
      {
        q: "Can I get a refund?",
        a: "Refunds are handled according to the Refund & Cancellation Policy and applicable law. Please contact support@qvpn.io with your refund request."
      }
    ]
  },
  {
    category: "Account Management",
    questions: [
      {
        q: "How do I reset my password?",
        a: "Tap 'Forgot Password' on the login screen or go to your account settings. Enter your email address and we'll send you a secure link to reset your password."
      },
      {
        q: "How do I delete my account?",
        a: "You can delete your account through the app settings or by contacting support@qvpn.io. Deleted accounts enter a 14-day recovery period before permanent deletion."
      },
      {
        q: "Can I recover a deleted account?",
        a: "Yes, within 14 days of deletion. Simply try logging in with your credentials and you'll be given the option to restore your account. After 14 days, accounts are permanently deleted and cannot be recovered."
      },
      {
        q: "How do I contact support?",
        a: "Email us at support@qvpn.io. We typically respond within 24-48 hours during business days."
      }
    ]
  }
];

// =============================================================================
// TODO LIST FOR LAUNCH
// =============================================================================
// Before public launch, ensure the following are updated:
// 
// 1. SITE_CONFIG.legal.businessAddress
//    - Replace placeholder with actual business address
//
// 2. SITE_CONFIG.appLinks.googlePlay.url
//    - Update with actual Google Play Store URL
//    - Set available: true
//
// 3. SITE_CONFIG.appLinks.appStore.url  
//    - Update with actual Apple App Store URL
//    - Set available: true
//
// 4. SITE_CONFIG.social.*
//    - Update with actual social media URLs
//
// 5. Contact Form Integration
//    - Implement backend API endpoint for form submission
//    - Update ContactPage.jsx to use API instead of mailto fallback
//
// =============================================================================
