import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import bgImage from "../assets/home/bgImage.png";


const Layout = ({ children }) => {
  const location = useLocation();

  // paths where Breadcrumbs should not be displayed
  const excludeBreadcrumbsPaths = ['/escrow', '/recieved-product', '/product-review', '/submit-complaints', '/about-us'];
  const excludeBreadcrumbsRegex = /^\/categories\/.+$/;

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shouldExcludeBreadcrumbs = excludeBreadcrumbsPaths.includes(location.pathname) || excludeBreadcrumbsRegex.test(location.pathname);

  const backgroundImage = {
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    };

  return (
    <div className="flex flex-col min-h-screen" style={backgroundImage}>
      <Navbar />
      {!shouldExcludeBreadcrumbs && <Breadcrumbs />}
      <main className="flex-1">{children}</main>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;