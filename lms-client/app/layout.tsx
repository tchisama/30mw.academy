import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { EdgeStoreProvider } from '@/lib/edgestore'
import CatsProvider from '@/components/CatsProvider'
import { dev } from '@/server'
import { Code } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '30MW Academy',
  description: '',
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
          {
            dev&&
        <div className="absolute flex gap-2 top-2 left-2 bg-primary text-white p-2 rounded-md w-fit">
           <Code/> Mode
        </div>
          }
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
