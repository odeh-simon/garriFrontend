import PropTypes from 'prop-types';
import Navbar from './NavBar';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
