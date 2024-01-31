import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { EdgeStoreProvider } from '@/lib/edgestore'
import CatsProvider from '@/components/CatsProvider'
import { dev } from '@/server'
import { Code } from 'lucide-react'
import Navbar from '@/components/global/Navbar'

const inter = Rubik({ subsets: ['arabic'] })

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
                    <div className='min-h-screen  flex flex-col'>
                      <div className='max-w-[1800px] px-4 w-full mx-auto'>
                        <Navbar />
                      </div>
                      {children}
                    </div>
                  </CatsProvider>
                </EdgeStoreProvider>
          </ThemeProvider>
        </body>
      </html>
      </ClerkProvider>
  )
}
