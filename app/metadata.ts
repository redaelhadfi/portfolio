import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reda El Hadfi — AI Architect & Full‑Stack Engineer',
  description: 'Portfolio of Reda El Hadfi, INPT final‑year software engineering student and freelance AI & full‑stack engineer specializing in Python, Django, React, and AWS. Explore case studies, experience, and get in touch.',
  keywords: [
    'AI Architect',
    'Full-Stack Engineer', 
    'Machine Learning Engineer',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'Django',
    'AWS',
    'Freelancer',
    'INPT',
    'Morocco',
    'Rabat',
    'Portfolio',
    'Software Engineer'
  ],
  authors: [{ name: 'Reda El Hadfi', url: 'https://reda-elhadfi.com' }],
  creator: 'Reda El Hadfi',
  publisher: 'Reda El Hadfi',
  metadataBase: new URL('https://reda-elhadfi.com'),
  alternates: {
    canonical: 'https://reda-elhadfi.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reda-elhadfi.com',
    siteName: 'Reda El Hadfi Portfolio',
    title: 'Reda El Hadfi — AI Architect & Full‑Stack Engineer',
    description: 'Portfolio of Reda El Hadfi, INPT final‑year software engineering student and freelance AI & full‑stack engineer specializing in Python, Django, React, and AWS.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Reda El Hadfi - AI Architect & Full-Stack Engineer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reda_elhadfi',
    creator: '@reda_elhadfi',
    title: 'Reda El Hadfi — AI Architect & Full‑Stack Engineer',
    description: 'Portfolio of Reda El Hadfi, INPT final‑year software engineering student and freelance AI & full‑stack engineer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification IDs when available
    // google: 'google-verification-code',
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#100C08',
    'color-scheme': 'dark',
  },
}

export default metadata
