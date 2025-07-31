import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'ShareJSON - Share Your JSON Data',
  description: 'Share your JSON data with others easily',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='antialiased'>
          <Navbar />
          <div className='max-w-4xl mx-auto px-4'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
