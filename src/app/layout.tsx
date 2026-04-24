import { Metadata } from "next";
import './globals.css';


export const metadata:Metadata = {
  title: 'Revarie | Project IMACE',
  description: 'Research on the Empirical Values of Anthropomorphic Reflections in Intelligence Emulation',
  icons: {
    icon: 'https://assets.imace.online/image/imaceicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}
