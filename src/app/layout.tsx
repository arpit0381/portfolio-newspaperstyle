import type { Metadata } from "next";
import { Playfair_Display, UnifrakturMaguntia, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NewsChat from "@/components/NewsChat";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700", "900"], variable: "--font-playfair" });
const unifraktur = UnifrakturMaguntia({ subsets: ["latin"], weight: "400", variable: "--font-unifraktur" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: {
    default: "Samriddhi Bansal | Data Analyst & Web Developer | BCA Scholar",
    template: "%s | Samriddhi Bansal"
  },
  description: "Official Portfolio of Samriddhi Bansal. BCA Scholar at PSIT College of Higher Education (9.18 CGPA, 10 SGPA), Logix Club Representative, GFG Campus Ambassador, and Data Analytics Specialist.",
  applicationName: "Samriddhi Bansal",
  keywords: [
    "Samriddhi Bansal",
    "Data Analytics",
    "Power BI",
    "MS Excel",
    "PSIT College of Higher Education",
    "Logix Club",
    "GeeksForGeeks Ambassador",
    "Enginow",
    "Web Development",
    "UI/UX Design",
    "Problem Solving",
    "Samriddhi Bansal Portfolio"
  ],
  authors: [{ name: "Samriddhi Bansal" }],
  creator: "Samriddhi Bansal",
  metadataBase: new URL("https://samriddhi-bansal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samriddhi-bansal.vercel.app",
    siteName: "Samriddhi Bansal",
    title: "Samriddhi Bansal | Official Portfolio & Technical Dossier",
    description: "Explore the investigative portfolio and analytical dossier of Samriddhi Bansal. Data analytics, business intelligence, web development, and campus leadership.",
    images: [
      {
        url: "/Avatar.webp",
        width: 800,
        height: 800,
        alt: "Samriddhi Bansal - Data Analyst & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samriddhi Bansal | Data Analyst & Web Developer",
    description: "BCA Scholar, Data Analytics, Power BI & Web Development Portfolio.",
    images: ["/Avatar.webp"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samriddhi Bansal",
    "url": "https://samriddhi-bansal.vercel.app",
    "jobTitle": "Data Analyst & Web Developer",
    "alumniOf": "PSIT College of Higher Education, Kanpur",
    "sameAs": [
      "https://www.linkedin.com/in/samriddhibansalysihek",
      "https://github.com/samriddhibansal",
      "https://www.hackerrank.com/certificates/problem-solving"
    ],
    "description": "Samriddhi Bansal is a BCA Scholar at PSIT College of Higher Education with a 9.18 CGPA, specializing in Data Analytics, Power BI, Web Development, and Community Leadership."
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Samriddhi Bansal",
    "publisher": {
      "@type": "Person",
      "name": "Samriddhi Bansal"
    },
    "alternateName": ["The Samriddhi Bansal Broadsheet", "Samriddhi Bansal Portfolio", "Samriddhi Bansal's Portfolio"],
    "url": "https://samriddhi-bansal.vercel.app",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Samriddhi Bansal - Official Portfolio",
    "url": "https://samriddhi-bansal.vercel.app",
    "mainEntity": {
      "@type": "Person",
      "name": "Samriddhi Bansal",
      "identifier": "samriddhibansal"
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${unifraktur.variable} ${lora.variable} font-serif antialiased bg-background text-foreground transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Paper texture overlay */}
          <div className="fixed inset-0 pointer-events-none z-1 opacity-40 dark:opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />
          {/* Center fold crease */}
          <div className="fixed inset-y-0 left-1/2 w-px bg-black/5 dark:bg-white/5 blur-[2px] z-2 pointer-events-none" />
          <div className="relative z-10">
            <Navbar />
            {children}
            <ScrollToTop />
            <NewsChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
