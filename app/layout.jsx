import { Playfair_Display, Nunito, Roboto } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';

const playFairDisplay = Playfair_Display({ variable: '--font-playfair-display', subsets: ['latin'], display: 'swap' });
const nunito = Nunito({ variable: '--font-nunito', subsets: ['latin'], display: 'swap' });
const roboto = Roboto({ variable: '--font-roboto', subsets: ['latin'], display: 'swap', weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: 'JNGSTA',
  description: 'Journal of Next Gen Science and Technology Applications',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${playFairDisplay.variable} ${nunito.variable} ${roboto.variable}`}>
        <div className='w-full max-w-screen overflow-hidden min-h-screen flex flex-col gap-10 font-sans'>
          <Header />
          <div className='flex-1'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
