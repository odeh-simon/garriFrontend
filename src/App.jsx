import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Splash from "./pages/splash";
import { SignupProvider } from "./context/SignUpContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


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