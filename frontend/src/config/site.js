// Site Configuration - Single Source of Truth
// QVPN Marketing Website Configuration

export const SITE_CONFIG = {
  // Brand Information
  brand: {
    name: "QVPN",
    tagline: "Privacy-First VPN",
    description: "Fast, secure VPN built on WireGuard. Protect your privacy on public Wi-Fi, while traveling, and online.",
    domain: "qvpn.io",
    url: "https://qvpn.io"
  },

  // Legal Business Information
  legal: {
    operatorName: "DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.",
    operatorDisclosure: "QVPN is operated by DIAMANTE FINANCIAL TECHNOLOGIES L.L.C.",
    copyrightYear: new Date().getFullYear(),
    // PLACEHOLDER: Add business address when available
    businessAddress: "[Business Address - To Be Added]",
    // PLACEHOLDER: Add state/jurisdiction for governing law
    governingLaw: "[Governing Law Jurisdiction - To Be Added]"
  },

  // Contact Information
  contact: {
    supportEmail: "support@qvpn.io",
    businessEmail: "hello@qvpn.io",
    privacyEmail: "privacy@qvpn.io",
    // PLACEHOLDER: Add support hours when defined
    supportHours: "Monday - Friday, 9:00 AM - 6:00 PM (EST)"
  },

  // Social Links (Placeholders - update when accounts are created)
  social: {
    twitter: "#",
    discord: "#",
    instagram: "#",
    linkedin: "#"
  },

  // App Store Links (Placeholders - update when apps are published)
  appLinks: {
    googlePlay: "#",
    appStore: "#",
    // Supported platforms
    platforms: ["Android", "iOS", "Windows", "macOS"]
  },

  // SEO Defaults
  seo: {
    defaultTitle: "QVPN - Privacy-First VPN | Fast & Secure",
    titleTemplate: "%s | QVPN",
    defaultDescription: "QVPN is a fast, privacy-first VPN built on WireGuard. Secure your internet connection on public Wi-Fi, while traveling, and protect your online privacy.",
    keywords: "VPN, privacy, WireGuard, secure browsing, public WiFi security, encrypted connection",
    ogImage: "/og-image.png"
  }
};

// Pricing Configuration - Single Source of Truth
export const PRICING_CONFIG = {
  currency: "USD",
  currencySymbol: "$",
  
  plans: {
    free: {
      id: "free",
      name: "Free",
      description: "Get started with basic VPN protection",
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
        // PLACEHOLDER: Confirm exact pricing before launch
        monthly: 9.99,
        yearly: 59.99 // Billed annually
      },
      yearlyMonthlyEquivalent: 4.99, // $59.99/12
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

  // Billing Information
  billing: {
    provider: "Stripe",
    securityNote: "Payments are processed securely via Stripe.",
    // PLACEHOLDER: Update statement descriptor when confirmed
    statementDescriptor: "QVPN*SUBSCRIPTION",
    autoRenewal: true,
    renewalNote: "Subscriptions automatically renew at the end of each billing period unless cancelled.",
    cancellationNote: "You can cancel anytime. Access continues until the end of your current billing period.",
    gracePeriodDays: 7,
    gracePeriodNote: "If a payment fails, you have a 7-day grace period to update your payment method before losing Premium access."
  },

  // Refund Policy
  refund: {
    // PLACEHOLDER: Confirm refund policy details
    eligible: true,
    windowDays: 7,
    note: "Refunds may be requested within 7 days of purchase for unused subscription time. Contact support@qvpn.io for refund requests."
  }
};

// Privacy & Data Collection Information
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

  // Clear privacy statements
  statements: {
    noActivityLogging: "We do not log or monitor your browsing activity while connected to QVPN.",
    noAdTargeting: "We do not use your browsing activity for advertising or sell your data to third parties.",
    minimalCollection: "We collect only the minimum information necessary to operate the service, manage your account, process payments, and provide customer support.",
    dataRetention: "Account data is retained while your account is active. You may request deletion of your account and associated data at any time."
  }
};

// Email Communications (for SES review)
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
      description: "Email to recover a recently deleted account within the 14-day recovery window",
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
      trigger: "7 days before renewal date"
    },
    {
      type: "Payment Failed",
      description: "Notification that a payment attempt failed with instructions to update payment method",
      trigger: "Failed payment attempt"
    },
    {
      type: "Grace Period Warning",
      description: "Warning that your grace period is ending and Premium access will be lost",
      trigger: "During 7-day grace period after failed payment"
    },
    {
      type: "Subscription Cancelled",
      description: "Confirmation of subscription cancellation and when access ends",
      trigger: "Subscription cancellation"
    }
  ]
};

// Account Management Information
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
    gracePeriod: "If a payment fails, you have 7 days to update your payment method. During this grace period, you retain Premium access."
  }
};

// Navigation Links
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

// FAQ Data
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
        a: "QVPN is available for Android, iOS, Windows, and macOS. You can download the app from the Google Play Store, Apple App Store, or our website."
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
        a: "Premium subscriptions are billed monthly or yearly, depending on your chosen plan. Subscriptions automatically renew at the end of each billing period unless you cancel."
      },
      {
        q: "How do I cancel my subscription?",
        a: "You can cancel your subscription at any time through your account settings in the app or by contacting support@qvpn.io. When you cancel, you retain Premium access until the end of your current billing period."
      },
      {
        q: "What happens if my payment fails?",
        a: "If a payment fails, you enter a 7-day grace period during which you retain Premium access. You'll receive email notifications to update your payment method. If not resolved within 7 days, your account reverts to the Free plan."
      },
      {
        q: "What happens when my subscription expires?",
        a: "When your Premium subscription ends or expires, your account automatically reverts to the Free plan. You can continue using QVPN with the Free plan's limitations, or resubscribe to Premium at any time."
      },
      {
        q: "Can I get a refund?",
        a: "Refunds may be requested within 7 days of purchase for unused subscription time. Please contact support@qvpn.io with your refund request."
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
