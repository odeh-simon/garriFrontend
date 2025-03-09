import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Splash from './modules/Splash';
import { SignupProvider } from './context/SignUpContext';
import SignUp from './modules/SignUp';
import Login from './modules/Login';
import Home from './modules/home/Home';
import CategoriesPage from './modules/category/Category';
import ProductDetails from './modules/products/components/ProductDetails';
import CategoriesFilterPage from "./modules/category/CategoriesFilterPage";
import { BreadcrumbProvider } from './context/BreadCrumbContext';
import Layout from './components/Layout';
import Breadcrumbs from './components/Breadcrumbs';
import Cart from './modules/cart/Cart';
import Profile from './modules/profile/Profile';
import UpdatePassword from './modules/profile/components/UpdatePassword';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => (
  <BreadcrumbProvider>
    <Layout>
      <Breadcrumbs />
      <Outlet />
    </Layout>
  </BreadcrumbProvider>
);

const AuthLayout = () => (
  <div>
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/categories', element: <CategoriesPage /> },
      { path: '/categories/:category', element: <CategoriesFilterPage /> },
      { path: '/product/:productId', element: <ProductDetails /> },
      { path: '/cart', element: <Cart /> },
      { path: '/profile', element: <Profile /> },
      { path: '/update-password', element: <UpdatePassword /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/', element: <Splash /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <SignupProvider>
      <CartProvider>
        <>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      </CartProvider>
    </SignupProvider>
  );
}

export default App;
