import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { profile } from '@/content/profile';
import { SITE_URL } from '@/lib/site';
import { jsonLdGraph } from '@/lib/jsonld';
import './globals.css';

const display = localFont({
  src: [
    { path: './fonts/bodoni-moda-var.woff2', weight: '400 500', style: 'normal' },
    { path: './fonts/bodoni-moda-var-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Didot', 'Georgia', 'serif'],
});

const text = localFont({
  src: [{ path: './fonts/hanken-grotesk-var.woff2', weight: '300 500', style: 'normal' }],
  variable: '--font-text',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

const title = 'Dhrupesh Brahmbhatt, backend engineer, forward deployed';
const description =
  'Backend engineer in Ahmedabad working forward deployed with aviation operations: Node.js, TypeScript, PostgreSQL, BigQuery and Looker on GCP. Rebuilt a 3-minute Qlik dashboard into a 3-second service, moved 60+ SSRS reports to BigQuery and Looker, and ships products of his own.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/`,
    types: { 'text/plain': `${SITE_URL}/llms.txt` },
  },
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    'Dhrupesh Brahmbhatt',
    'backend engineer',
    'forward deployed engineer',
    'Node.js developer Ahmedabad',
    'TypeScript',
    'PostgreSQL',
    'BigQuery',
    'Looker',
    'GCP',
    'aviation software',
    'freelance web developer Ahmedabad',
  ],
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: `${SITE_URL}/`,
    siteName: 'Dhrupesh Brahmbhatt',
    title,
    description,
    firstName: 'Dhrupesh',
    lastName: 'Brahmbhatt',
    gender: 'male',
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Dhrupesh Brahmbhatt signature, with the line Backend engineering, forward deployed' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/og.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4f3f0',
};


// Runs before first paint. The signature plays on every load; any click or key
// press during it skips straight to the page.
const introScript = `(function(){var d=document.documentElement;d.classList.add('intro');var skip=function(){d.classList.add('sig-seen')};addEventListener('pointerdown',skip,{once:true});addEventListener('keydown',skip,{once:true});setTimeout(function(){removeEventListener('pointerdown',skip);removeEventListener('keydown',skip)},3000)})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph()) }} />
        {/* Analytics waits until the page is idle so it never competes with the first paint. */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${profile.gaId}`} strategy="lazyOnload" />
        <Script id="ga" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${profile.gaId}');`}
        </Script>
      </body>
    </html>
  );
}
