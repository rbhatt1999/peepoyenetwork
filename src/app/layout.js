import './globals.css'
import { Roboto } from 'next/font/google'
import { LayoutProvider } from './LayoutProvider'
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytic from '@/components/GoogleAnalytic';


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL('https://peepoye.com'),
  title: 'Peepoye',
  description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
  image: 'https://i.ibb.co/6vX34KQ/akassh-signature.png',
  url: 'https://peepoye.com',
  type: 'website',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://peepoye.com',
    title: 'Peepoye',
    description: 'With Peepoye, Discover the path to awareness and happiness through our transformative content, empowering courses, and engaging masterminds.',
    image: 'https://i.ibb.co/6vX34KQ/akassh-signature.png',
    site_name: 'Peepoye',
  },
  canonical: 'https://peepoye.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LayoutProvider>
          <GoogleAnalytic />
          {children}
        </LayoutProvider>
        <Analytics />
      </body>
    </html>
  )
}
