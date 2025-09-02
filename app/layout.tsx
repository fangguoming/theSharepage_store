import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The SharePage - Marketing Site',
  description: 'Your one-stop destination for retail, marketplace, wholesale, and auction services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 