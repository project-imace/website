import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import LivingBackground from '@/app/components/LivingBackground';

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
        <LivingBackground />
        <div className="flex flex-row min-h-screen">
          <Header />
          <div className="flex-1 flex flex-col ml-[64px]">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
