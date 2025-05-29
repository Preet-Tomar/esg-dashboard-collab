import "./globals.css"
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ESG Performance Dashboard",
  description: "A modern and interactive ESG Performance Dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-green-50">{children}</main>
      </body>
    </html>
  )
}

