import { useState } from 'react';
import Navbar from '../../components/NavBar';
import arrowIcon from '../../assets/arrow-right.svg';
import { products } from '../../mockdata/ProductData';
import { useParams } from 'react-router-dom';
import ProductCard from '../products/components/ProductCard';
import { useNavigate } from 'react-router-dom';

export default function CategoriesFilterPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filter = [
    { id: 1, name: 'Popular items' },
    { id: 2, name: 'New items' },
    { id: 3, name: 'Seeds' },
    { id: 4, name: 'Farming tools' },
    { id: 5, name: 'Flowers' },
    { id: 6, name: 'Fertilizers' },
    { id: 7, name: 'Garri' },
    { id: 8, name: 'Groceries' },
    { id: 9, name: 'Vegetables' },
    { id: 10, name: 'Fruits' },
    { id: 11, name: 'Grains' },
    { id: 12, name: 'Oils' },
  ];

  const filteredProducts = products.filter(product => product.category === category);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex flex-col min-h-[100vh] pt-14'>
      <div className='flex-1 mb-4'>
        <Navbar />
        <div className="w-full bg-[#f4f4f4] mb-2">
          <div className='flex items-center pl-2 py-3 fixed left-0 top-[4rem] z-40 w-full bg-[#f4f4f4] lg:bg-transparent'>
            <p className='text-[#151C71] font-bold text-[13px] mr-1 '>Home</p>
            <img src={arrowIcon} alt="" className='mr-1'/>
            <p className='text-[#151C71] font-bold text-[13px] mr-1 '>Category</p>
            <img src={arrowIcon} alt="" className='mr-1'/>
            <p className='text-[#151C71] font-bold text-[13px] '>{category}</p>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className='lg:hidden fixed top-[70px] right-4 z-50'>
            <button onClick={toggleSidebar} className='text-[#151C71]'>
              {sidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className={`fixed inset-0 bg-white z-50 transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:fixed lg:left-0 lg:right-[80%] lg:pl-0 lg:pr-4 lg:mt-3 lg:flex lg:flex-col lg:gap-1 lg:border-r-2 lg:bg-white lg:top-[6rem] lg:bottom-0`}>
          <div className="relative lg:w-full bg-white border border-gray-300 lg:border-none rounded-lg p-4 m-4">
            <button onClick={toggleSidebar} className="absolute top-2 right-2 text-[#151C71] lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className='font-bold text-[#BBC2C9] text-base'>CATEGORIES</p>
            {filter.map(item => (
              <div key={item.id} className='flex justify-between mt-2'>
                <button
                  className={category === item.name ? 'text-[#080E52] font-bold text-base' : 'text-[#BBC2C9] text-base'}
                  onClick={() => {
                    navigate(`/categories/${item.name}`);
                    setSidebarOpen(false); // Close sidebar on item click
                  }}
                >
                  {item.name}
                </button>
                <img src={arrowIcon} alt="" className={category === item.name ? 'text-[#080E52] font-bold text-[9px]' : 'text-[#BBC2C9] text-[9px]'}/>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay for Mobile Sidebar */}
        {sidebarOpen && (
          <div className='fixed inset-0 bg-black opacity-50 z-40 lg:hidden' onClick={toggleSidebar}></div>
        )}

        <div className='lg:pl-[21%]'>
          <div className='bg-[#151C71] lg:bg-gray-400 mb-6 py-1 mx-2'>
            <p className='text-center text-[#FCFCFC] lg:text-[#080E52] font-roboto font-bold text-lg'>{category.toUpperCase()}</p>
          </div>

          <div className='flex flex-wrap '>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}