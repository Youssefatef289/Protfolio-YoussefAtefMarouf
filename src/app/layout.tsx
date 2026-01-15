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
  session,
}: Readonly<{
  children: React.ReactNode;
  session:any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${josefinSans.variable} ${jost.variable}`}>
      <NextTopLoader />
      <LanguageProvider>
      <AuthDialogProvider>
      <SessionProviderComp session={session}>
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
