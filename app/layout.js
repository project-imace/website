import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GridBackground from '@/app/components/GridBackground';

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
      <body className="antialiased bg-[#0E0E10] text-foreground font-body">
        <GridBackground />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex flex-col mt-[64px]">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
