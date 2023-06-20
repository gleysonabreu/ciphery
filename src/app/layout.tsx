import { Header } from '@/components/Header';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ciphery',
  description: 'Cryptography passwords and keys',
  icons: {
    icon: '/logo-symbol.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="flex p-5 lg:p-0 items-center justify-center min-h-screen flex-col lg:mx-40 lg:my-auto gap-12">
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
