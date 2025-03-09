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

      if (lowerPath === '/' || lowerPath === '/splash') {
        return 'Splash';
      }
      if (lowerPath === '/home' || lowerPath === 'home') {
        return 'Home';
      }
      // If the route is for a product, show "Product Details" instead of the id.
      if (lowerPath.startsWith('/product/')) {
        return 'Product Details';
      }
      // Add more custom cases as needed
      // For any other route, use the last segment and capitalize it.
      const parts = pathname.split('/').filter(Boolean);
      if (!parts.length) return '';
      const segment = parts[parts.length - 1];
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    };

    // Update breadcrumbs:
    // If the current route exists already in the trail, trim the trail.
    // Otherwise, append the new route.
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

BreadcrumbProvider.propTypes = {
  children: PropTypes.node.isRequired,
};