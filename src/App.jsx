import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Splash from './modules/splash';
import { SignupProvider } from './context/SignUpContext';
import SignUp from './modules/SignUp';
import Login from './modules/Login';
import Home from './modules/home/Home';
import CategoriesPage from './modules/category/Category';
import ProductDetails from './modules/products/components/ProductDetails';
import { BreadcrumbProvider } from './context/BreadCrumbContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/product/:productId',
    element: <ProductDetails />,
  },
]);

function App() {
  return (
    <SignupProvider>
      <BreadcrumbProvider>
        <RouterProvider router={router} />
      </BreadcrumbProvider>
    </SignupProvider>
  );
}

export default App;
