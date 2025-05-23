import HeroSection from "./components/HeroSection";
import ProductSlider from "../products/ProductSlider";
import { products } from "../../mockdata/ProductData";
import Categories from "../category/components/CategoryCard";
//import Layout from "../../components/Layout";
import { useEffect } from "react";

export default function Home() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

      <div className="flex flex-col min-h-[100vh]">
        <div className="flex-1">
          <HeroSection />
          <div className="container mx-auto px-4">
            <ProductSlider products={products} category="new" />
            <ProductSlider products={products} category="popular" />
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4 border-b-[3px] border-[#040E42] pb-1 mt-4 mx-6">
              CATEGORIES
            </h2>
            <Categories limit={4} showSeeAll={true} />
          </div>
        </div>
      </div>
  );
}
