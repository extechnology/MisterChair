import Bestsellers from "@/components/home/Bestsellers";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturesSection from "@/components/home/FeaturesSection";
import HomeSlider from "@/components/home/HomeSlider";
import CustomEditions from "@/components/home/CustomEditions";
import { serverFetch } from "@/lib/fetcher";
import { HeroSliderType, BrowseByCategoryType } from "@/types/type";
import { Results } from "@/service/product/type";
import { Metadata } from "next";



// Site URL for seo
const siteUrl = "https://mister-chair.vercel.app";


// Social image (1200×630) px
const socialImage = "https://mister-chair.vercel.app/logo.png";



// Metadata for about page
export const metadata: Metadata = {

  metadataBase: new URL(siteUrl),

  title: "Mr Chair | Premium Office & Modern Furniture Store",

  description: "Shop premium office chairs, executive seating, and modern furniture at Mr Chair. Discover high-performance and stylish seating solutions for home and office.",


  applicationName: "Mr Chair",


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


  openGraph: {
    title: "Mr Chair - Premium Furniture Store",
    description: "Mr Chair is a premium furniture store for high-performance furniture, accessories and seating solutions.",
    url: `${siteUrl}`,
    siteName: "Mr Chair",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Mr Chair – Premium furniture store",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Mr Chair - Premium Furniture Store",
    description: "Mr Chair is a premium furniture store for high-performance furniture, accessories and seating solutions.",
    images: [socialImage],
  },


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },


  alternates: {
    canonical: `${siteUrl}`,
  },

  category: "Ecommerce",

};



export default async function Home() {



  // Fetch product
  const [HeroSlider, BestSeller, ShopByCategory] = await Promise.all([

    serverFetch<HeroSliderType[]>(`/ui/landing-image/`, {
      next: { revalidate: 0 },
    }),


    serverFetch<Results[]>(`/chairs/best-seller/`, {
      next: { revalidate: 0 },
    }),


    serverFetch<BrowseByCategoryType[]>(`/ui/shop-by-category/`, {
      next: { revalidate: 0 },
    }),

  ]);




  return (


    <main className="min-h-screen bg-stone-50">


      {/* Home slider  */}
      <HomeSlider data={HeroSlider} />


      {/* Best sellers  */}
      <Bestsellers products={BestSeller} />


      {/* Category grid  */}
      <CategoryGrid categories={ShopByCategory} />


      {/* Features section  */}
      <FeaturesSection />


      {/* Custom Editions section */}
      <CustomEditions />


    </main>

  );


}
