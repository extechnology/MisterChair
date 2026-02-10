import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmoothScrolling from "@/components/common/SmoothScrolling";



export const metadata: Metadata = {
  title: "Mr Chair",
  description: "Mr Chair - Home",
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
