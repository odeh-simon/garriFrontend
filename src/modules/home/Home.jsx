import bgImage from '../../assets/home/bgImage.png';
import Navbar from '../../components/NavBar';
import HeroSection from './components/HeroSection';
import ProductSlider from '../products/ProductSlider';
import { products } from '../products/ProductData';
import Categories from '../category/components/CategoryCard';
import Footer from '../../components/Footer';

export default function Home() {

  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  return (
    <div style={backgroundImage} className='flex flex-col min-h-[100vh]'>
      <div className='flex-1'>
        <Navbar />
        
        <div className=''>
          <HeroSection />
        </div>

        <div className="container mx-auto px-4">
          <ProductSlider products={products} category="new" />
          <ProductSlider products={products} category="popular" />
        </div>

        <div>
        <h2 className="font-bold text-xl mb-4 border-b-[3px] border-[#040E42] pb-1 mt-4 mx-6">CATEGORIES</h2>
          <Categories limit={4} showSeeAll={true}/>
        </div>
      </div>
       <Footer />   
    </div>
  )
}
