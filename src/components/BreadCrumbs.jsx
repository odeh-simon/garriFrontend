import { useContext } from 'react';
import { BreadcrumbContext } from '../context/BreadCrumbContext';
import rightArrow from '../assets/arrow-right.svg';

const Breadcrumbs = () => {
  const { breadcrumbs } = useContext(BreadcrumbContext);

  return (
    <nav className="px-4 py-3">
      <ol className="flex gap-3">
        {breadcrumbs.map((crumb, index) => {
          // Check if the next breadcrumb is the same as the current one
          if (index < breadcrumbs.length - 1 && crumb.name === breadcrumbs[index + 1].name) {
            return null;
          }
          return (
            <li key={index} className="text-[16px] font-bold text-[#080E52] flex items-center">
              {crumb.name}
              {index < breadcrumbs.length - 1 && <img src={rightArrow} alt="" className='ml-3 mt-1' />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;