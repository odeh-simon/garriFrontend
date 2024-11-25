import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from "./modules/splash";
import { SignupProvider } from "./context/SignUpContext";
import SignUp from "./modules/SignUp";
import Login from "./modules/Login";
import Home from "./modules/home/Home";
import CategoriesPage from "./modules/category/Category";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Splash />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/home',
    element: <Home />
  },
  
  {
    path: '/categories',
    element: <CategoriesPage />
  }

  
]);

function App() {
  return(
  <>
    <SignupProvider>
      <RouterProvider router={router} />
    </SignupProvider>
  </>
  );
}

export default App