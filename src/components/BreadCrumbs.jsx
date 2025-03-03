import { useContext } from 'react';
import { BreadcrumbContext } from '../context/BreadCrumbContext';

const Breadcrumbs = () => {
  const { breadcrumbs } = useContext(BreadcrumbContext);

  return (
    <nav className="bg-gray-200 px-4 py-2">
      <ol className="flex space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="text-sm text-blue-600">
            {crumb.name}
            {index < breadcrumbs.length - 1 && <span className="mx-1">{'>'}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
