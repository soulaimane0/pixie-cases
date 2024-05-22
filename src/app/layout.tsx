import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { constructMetadata } from '@/lib/utils';
import { Recursive } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={recursive.className}>
        <Navbar />
        <main className='flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex flex-1 flex-col h-full'>
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        <Toaster richColors />
      </body>
    </html>
  );
}
