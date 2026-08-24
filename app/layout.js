import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Gaise — Save items from any retailer in one closet',
  description: 'Save items from any retailer into one closet. Compare side by side. Get alerts when prices drop.',
  metadataBase: new URL('https://gaise.vercel.app'),
  openGraph: {
    title: 'Gaise — One closet for everything you\'re shopping for',
    description: 'Save items from any retailer, compare them side by side, and get alerts the moment a price drops.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
