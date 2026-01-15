import { Josefin_Sans, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import FloatingActionButton from '@/components/Common/FloatingActionButton';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import { LanguageProvider } from "./context/LanguageContext";

const josefinSans = Josefin_Sans({ 
  subsets: ["latin"],
  variable: '--font-josefin-sans',
  display: 'swap',
});

const jost = Jost({ 
  subsets: ["latin"],
  variable: '--font-jost',
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.variable} ${jost.variable}`}>
      <NextTopLoader />
      <LanguageProvider>
      <AuthDialogProvider>
      <SessionProviderComp>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <FloatingActionButton />
        </ThemeProvider>
        </SessionProviderComp>
        </AuthDialogProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
