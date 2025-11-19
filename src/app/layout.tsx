import type { Metadata } from 'next';
import { Geist, Geist_Mono, Prompt } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import { AOSInit } from '@/components/common/AOSInit';
import { I18nProvider } from '@/lib/i18n/context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'thai'],
  variable: '--font-prompt',
  display: 'swap'
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mojihouse.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Moji House - Revolutionizing Real Estate with Blockchain Technology',
    template: '%s | Moji House'
  },
  description:
    'Join the future of real estate with Moji House. A blockchain-powered platform using MOJI Token to build transparency, trust, and efficiency in property transactions through voting, staking, and smart contracts.',
  keywords: [
    'blockchain real estate',
    'MOJI token',
    'cryptocurrency property',
    'real estate NFT',
    'smart contracts',
    'property blockchain',
    'decentralized real estate',
    'crypto real estate investment',
    'tokenized real estate',
    'Web3 property platform',
    'real estate staking',
    'property voting system',
    'blockchain property transactions',
    'DeFi real estate'
  ],
  authors: [{ name: 'Moji House Team', url: siteUrl }],
  creator: 'Moji House',
  publisher: 'Moji House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Moji House',
    title: 'Moji House - Blockchain Real Estate Platform',
    description:
      'Revolutionizing real estate with blockchain technology, MOJI Token, and smart contracts. Join the future of transparent, secure, and efficient property transactions.',
    images: [
      {
        url: '/images/logo1.svg',
        width: 1200,
        height: 630,
        alt: 'Moji House - Blockchain Real Estate Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moji House - Blockchain Real Estate Platform',
    description:
      'Revolutionizing real estate with blockchain technology and MOJI Token. Transparent, secure, and efficient property transactions.',
    images: ['/images/logo1.svg'],
    creator: '@mojihouse',
    site: '@mojihouse'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [{ url: '/images/logo1.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/images/logo1.svg' }]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Moji House',
  description:
    'A blockchain-powered real estate platform using MOJI Token to build transparency, trust, and efficiency in property transactions',
  url: siteUrl,
  logo: `${siteUrl}/images/logo1.svg`,
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/mojihouse',
    'https://linkedin.com/company/mojihouse',
    'https://github.com/mojihouse'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['English']
  },
  offers: {
    '@type': 'Offer',
    description: 'MOJI Token Sale - Revolutionizing Real Estate Investment',
    itemOffered: {
      '@type': 'Service',
      name: 'MOJI Token',
      description:
        'Blockchain-based cryptocurrency for real estate transactions'
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prompt.variable} antialiased`}
      >
        <AOSInit />
        <StyledComponentsRegistry>
          <I18nProvider>{children}</I18nProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
