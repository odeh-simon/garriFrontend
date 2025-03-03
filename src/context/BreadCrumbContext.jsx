import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BreadcrumbContext = createContext();

export const BreadcrumbProvider = ({ children }) => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    // Convert pathname to a display name.
    const getRouteName = (pathname) => {
      const lowerPath = pathname.toLowerCase();
      if (lowerPath === '/home' || lowerPath === 'home') return 'Home';
      if (lowerPath.startsWith('/productdetails')) return 'Product Details';
      const parts = pathname.split('/').filter(Boolean);
      // Capitalize the last segment by default
      const segment = parts[parts.length - 1];
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    };
    
    BreadcrumbProvider.propTypes = {
      children: PropTypes.node.isRequired,
    };
  
    // Update breadcrumbs: If the current route already exists, trim the trail
    setBreadcrumbs(prev => {
      const foundIndex = prev.findIndex(b => b.pathname === location.pathname);
      if (foundIndex !== -1) {
        return prev.slice(0, foundIndex + 1);
      } else {
        return [...prev, { pathname: location.pathname, name: getRouteName(location.pathname) }];
      }
    });
  }, [location.pathname]);

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
