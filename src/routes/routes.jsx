import { createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/auth/signup";
import LoginPage from "../pages/auth/login";
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact_us";
import HomePage from "../pages/home/home";
import ProductPage from "../pages/products/products";
import ProductInfoPage from "../pages/products_info/product-info";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/about',
        element: <AboutPage></AboutPage>
    },
    {
        path: '/contact_us',
        element: <ContactPage></ContactPage>
    }, 
    {
         path: '/products',
         element:<ProductPage></ProductPage>
    },
    {
         path: '/product-info',
         element:<ProductInfoPage></ProductInfoPage>
    },
    {
        path: '/auth/signup',
        element: <SignupPage></SignupPage>
    },
    {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
    }
],
    {
        basename: '/Dev_mart'
    });