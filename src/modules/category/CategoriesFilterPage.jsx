import bgImage from '../../assets/home/bgImage.png';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import HeroSection from '../home/components/HeroSection';
import { products } from '../products/ProductData';
import ProductSlider from '../products/ProductSlider';
import Categories from './components/CategoryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import ProductCard from '../products/ProductCard';


export default function CategoriesFilterPage() {
  const {category} = useParams()

  const filter = [
    {id:1, name: 'Popular items'},
    {id:2, name: 'New items'},
    {id:3, name: 'Seeds'},
    {id:4, name: 'Farming tools'},
    {id:5, name: 'Flowers'},
    {id:6, name: 'Fertilizers'},
    {id:7, name: 'Garri'},
    {id:8, name: 'Groceries'},
    {id:9, name: 'Vegetables'},
    {id:10, name: 'Fruits'},
    {id:11, name: 'Grains'},
    {id:12, name: 'Oils'},
  ]

  const backgroundImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
  return (
    <div style={backgroundImage} className='flex flex-col min-h-[100vh] pt-[7.5rem]'>
      <div className='flex-1 mb-4'>
        <Navbar />
        <div
          className='flex items-center pl-10 pt-3 fixed left-0 top-[4rem] '
        >
          <p
            className='text-[#151C71] font-bold text-[13px] mr-1 '
          >Home</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-[#151C71] font-bold text-[10px] mr-1 '

          />
          <p
           className='text-[#151C71] font-bold text-[13px] mr-1 '

          >Category</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='text-[#151C71] font-bold text-[10px] mr-1 '

          />
          <p
            className='text-[#151C71] font-bold text-[13px] '
          >{category}</p>
          
        </div>

        <div
          className='lg:fixed left-0 right-[80%] pl-10 pr-4 mt-3 flex flex-col gap-1 border-r-2 bg-white top-[6rem] pt-2 bottom-0 '
        >
          <p
            className='font-bold text-[#BBC2C9] text-base'
          >
            CATEGORIES
          </p>
            {
              filter.map(item =>(
                <div
                  className='flex justify-between'
                >

                    <a
                      key={item.id}
                      className={ category===item.name? 'text-[#080E52] font-bold text-base':'text-[#BBC2C9] text-base'}
                      href={`http://localhost:5173/categories/${item.name}`}
                    >
                      {item.name}
                    </a>
    
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={ category===item.name? 'text-[#080E52] font-bold text-[9px]':'text-[#BBC2C9] text-[9px]'}

                    />
                </div>
              ))
            }
        </div>

        <div
          className='pl-[25%] pr-16'
        >
          <div
            className='bg-[#BBC2C9]  mb-8 py-2 '
          >
            <p
              className='text-center text-[#080E52] font-bold text-lg'
            >
              {category.toUpperCase()}
            </p>
          </div>

          <div
            className='flex flex-wrap '
          >
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                />
              ))}
          </div>
        </div>
        
        {/* <div className="container mx-auto px-4">

        </div> */}

      </div>
       <Footer />   
    </div>
  )
}
