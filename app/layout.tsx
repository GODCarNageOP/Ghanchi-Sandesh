import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
    <>
    <div className="div max-w-[1400px] m-auto">
    <Navbar/>
    {children}
    </div>
   <div className="relative footer w-full m-auto">
    <Footer/>
</div>
    </>
  )
}
