import Bestsellers from "@/components/home/Bestsellers";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturesSection from "@/components/home/FeaturesSection";
import HomeSlider from "@/components/home/HomeSlider";
import PromoSection from "@/components/home/PromoSection";
import CustomEditions from "@/components/home/CustomEditions";




export default function Home() {

  return (


    <main className="min-h-screen bg-stone-50">


      {/* Home slider  */}
      <HomeSlider />


      {/* Best sellers  */}
      <Bestsellers />


      {/* Category grid  */}
      <CategoryGrid />


      {/* Promo section  */}
      {/* <PromoSection /> */}


      {/* Features section  */}
      <FeaturesSection />


      {/* Custom Editions section */}
      <CustomEditions />

    </main>

  );


}
