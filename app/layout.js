import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Revarie | Project IMACE',
  description: 'Research on the Empirical Values of Anthropomorphic Reflections in Intelligence Emulation',
  icons: {
    icon: 'https://assets.imace.online/image/imaceicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground font-body">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
