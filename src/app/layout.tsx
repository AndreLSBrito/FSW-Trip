import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/providers/toast'

const poppins = Poppins({ subsets: ['latin'], weight:[
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
] })

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de reserva de viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <NextAuthProvider>
          <ToastProvider>
            <div className='flex flex-col h-screen'>
              <header className='h-[94px]'>
                <Header/>
              </header>
              <div className='flex-1'>
                {children}
              </div>
              <footer>
                <Footer/>
              </footer>
            </div>
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
