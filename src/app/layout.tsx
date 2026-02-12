import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmoothScrolling from "@/components/common/SmoothScrolling";




export const metadata: Metadata = {


  metadataBase: new URL("https://mister-chair.vercel.app"),


  title: {
    default: "Mr Chair",
    template: "%s | Mr Chair",
  },


  description: "Mr Chair is a premium furniture store for high-performance furniture, accessories and seating solutions.",


  alternates: {
    canonical: "https://mister-chair.vercel.app",
  },


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


      <body
        className="antialiased"
      >

        <ScrollToTop />

        <SmoothScrolling>



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


      </body>


    </html>


  );


}
