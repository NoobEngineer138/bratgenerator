import './globals.css'
// import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Script from 'next/script'


// const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: 'Brat Generator | Create Charli xcx Inspired Text Art Free',
    template: '%s | Brat Generator'
  },
  description: 'Design Charli xcx-style text art with our Brat Generator. Free tool with multiple colors for creating eye-catching Brat aesthetic visuals',
  alternates: {
    canonical: 'https://bratgeneratoronline.com/',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>*/}
      <head>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
