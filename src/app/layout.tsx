import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import Providers from "./providers";




export const metadata: Metadata = {


  metadataBase: new URL("https://mister-chair.vercel.app"),


  title: {
    default: "Mr Chair",
    template: "%s | Mr Chair",
  },


  description: "Shop premium office chairs, executive seating, and modern furniture at Mr Chair. Discover high-performance and stylish seating solutions for home and office.",



  keywords: [
    "premium chairs",
    "office chairs",
    "executive chairs",
    "furniture store",
    "modern seating",
    "home furniture",
  ],


  authors: [{ name: "Mr Chair" }],
  creator: "Mr Chair",
  publisher: "Mr Chair",


  alternates: {
    canonical: "https://mister-chair.vercel.app",
  },

  category: "Ecommerce",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  openGraph: {
    title: "Mr Chair — Premium Furniture Store",
    description: "Shop premium furniture, accessories and seating solutions at Mr Chair.",
    url: "https://mister-chair.vercel.app",
    siteName: "Mr Chair",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mr Chair Premium Furniture Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Mr Chair — Premium Furniture Store",
    description: "Shop premium furniture, accessories and seating solutions at Mr Chair.",
    images: ["/logo.png"],
  },


  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },


};





export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {


  return (


    <html lang="en">


      <head>


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mr Chair",
              url: "https://mister-chair.vercel.app",
              logo: "https://mister-chair.vercel.app/logo.png",
              foundingDate: "2006",
              description:
                "Mr Chair delivers premium furniture, expert service, and a passionate furniture community since 2026.",
            }),
          }}
        />


      </head>


      <body
        className="antialiased"
      >

        <Providers>

          <SmoothScrolling>


            <ScrollToTop />

            <div className="flex flex-col min-h-screen">


              {/* Header */}
              <Header />


              {/* Page content */}
              <main className="flex-1">
                {children}
              </main>


              {/* Footer */}
              <Footer />

            </div>

          </SmoothScrolling>

        </Providers>

      </body>


    </html>


  );


}
