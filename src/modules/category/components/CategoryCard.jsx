import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../components/CategoryData';
import arrow from '../../../assets/categories/arrow-down.svg';

const Categories = ({ limit, showSeeAll }) => {
  const displayedCategories = limit ? categories.slice(0, limit) : categories;
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/categories/${categoryName}`);
  };

  return (
    <div className="mb-4 p-4">
      {/* Display a 2x2 grid when limit is provided, otherwise display a 2-column layout with multiple rows */}
      <div className={`grid ${limit ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'} gap-3 w-full lg:w-[72%] mx-auto`}>
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover"
            />
            {/* Text overlay at the bottom */}
            <div className="absolute bottom-0 left-0 w-full p-2 items-center">
              <p className='bg-[#FFFFE6] rounded-full flex items-center text-[#080E52] text-[14px] lg:text-[24px] font-bold font-roboto justify-center w-[70%] mx-auto'>{category.name}</p>
            </div>
          </div>
        ))}

        {showSeeAll && limit && (
          <Link 
            to="/categories" 
            className="text-[#151C71] hover:underline flex items-center"
          >
            <span>See all</span>
            <img src={arrow} alt="see all" className='w-5 h-5'/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Categories;