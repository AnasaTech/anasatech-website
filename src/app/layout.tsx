import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Geist, Poppins } from "next/font/google";
import GoogleAnalytics from '@/app/components/Analytics/GoogleAnalytics';
import "./globals.css";
import { ChatbaseScript } from '@/app/components/ChatBot';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "AnasaTech | Breathing life into your ideas",
  description: "We are a very experienced Tech company building products used by millions",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32"
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
          {children}
        </ThemeProvider>
        <ChatbaseScript />
      </body>
    </html>
  );
}
