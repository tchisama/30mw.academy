import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { EdgeStoreProvider } from '@/lib/edgestore'
import CatsProvider from '@/components/CatsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {




  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <EdgeStoreProvider>
                  <CatsProvider>
                    {children}
                  </CatsProvider>
                </EdgeStoreProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
