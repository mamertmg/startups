import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import type { AppProps } from 'next/app'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
