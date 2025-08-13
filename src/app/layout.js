import { DM_Sans } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: true,
  variable: '--font-dm-sans', // This is optional but useful for Tailwind CSS
});


export const metadata = {
  title: 'SCALA',
  description: ''
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`w-full ${dmSans.className}`}>
      <body className={`w-full antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
