import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MarVariks - Veebilehtede loomine",
  description: "Professionaalsed ja konversioonile suunatud veebilehed, mis aitavad teie ettevõttel kasvada. Minimalistlik disain, maksimaalne mõju.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <LanguageProvider>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
