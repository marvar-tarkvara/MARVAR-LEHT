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
  metadataBase: new URL("https://marvar.ee"),
  title: {
    default: "MarVar - Veebilehtede loomine | Professionaalne veebiarendus Eestis",
    template: "%s | MarVar",
  },
  description: "Professionaalsed ja konversioonile suunatud veebilehed, mis aitavad teie ettevõttel kasvada. Minimalistlik disain, maksimaalne mõju. MARVAR Tarkvara OÜ - Tallinn, Eesti.",
  keywords: [
    // Estonian keywords
    "veebilehtede loomine",
    "veebiarendus",
    "kodulehtede tegemine",
    "kodulehe loomine",
    "veebidisain",
    "veebilehe tellimine",
    "professionaalne veebileht",
    "ettevõtte veebileht",
    "firma koduleht",
    "e-poe loomine",
    "mobiilisõbralik veebileht",
    "SEO optimeerimine",
    "otsingumootori optimeerimine",
    "veebilehe hooldus",
    "WordPress arendus",
    "React arendus",
    "Next.js arendus",
    "tarkvaraarendus",
    "veebirakendused",
    "UI/UX disain",
    "kasutajakogemus",
    "konversioonile suunatud disain",
    "landing page",
    "maandumisleht",
    "Tallinn",
    "Eesti",
    "Harjumaa",
    "MARVAR",
    "marvar tarkvara",
    "MARVAR Tarkvara OÜ",
    // English keywords
    "web development Estonia",
    "website design Tallinn",
    "web developer Estonia",
    "custom website development",
    "professional web design",
    "responsive web design",
    "mobile-friendly websites",
    "SEO optimization Estonia",
    "e-commerce development",
    "business website",
    "corporate website design",
    "web agency Estonia",
    "software development Estonia",
    "React developer Estonia",
    "Next.js developer",
    "frontend development",
    "modern web design",
    "conversion-focused design",
    "UX design Estonia",
    "Estonian web agency",
  ],
  authors: [{ name: "MARVAR Tarkvara OÜ" }],
  creator: "MARVAR Tarkvara OÜ",
  publisher: "MARVAR Tarkvara OÜ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/marvar.svg",
    apple: "/marvar.svg",
  },
  openGraph: {
    type: "website",
    locale: "et_EE",
    url: "https://marvar.ee",
    siteName: "MarVar",
    title: "MarVar - Veebilehtede loomine | Professionaalne veebiarendus",
    description: "Professionaalsed ja konversioonile suunatud veebilehed, mis aitavad teie ettevõttel kasvada. Minimalistlik disain, maksimaalne mõju.",
    images: [
      {
        url: "/marvar-tarkvara.png",
        width: 1200,
        height: 630,
        alt: "MARVAR Tarkvara OÜ - Veebilehtede loomine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarVar - Veebilehtede loomine",
    description: "Professionaalsed ja konversioonile suunatud veebilehed, mis aitavad teie ettevõttel kasvada.",
    images: ["/marvar-tarkvara.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://marvar.ee",
  },
  verification: {
    // Add your verification codes when available
    // google: "google-site-verification-code",
  },
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
