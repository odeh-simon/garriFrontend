import Categories from './components/CategoryCard';
import Layout from '../../components/Layout';

const CategoriesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-6 flex flex-col min-h-[100vh]">
        <div className="flex-1">
          <h1 className="text-[#FCFCFC] text-[24px] lg:text-[32px] font-bold font-roboto w-[94%] lg:w-[70%] mx-auto bg-[#151C71] flex items-center justify-center">CATEGORIES</h1>
          <div className="">
            <Categories showSeeAll={false} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;