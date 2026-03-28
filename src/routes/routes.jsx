import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import SignupPage from "../pages/auth/signup";
import LoginPage from "../pages/auth/login"
import AboutPage from "../pages/about/about";
import ContactPage from "../pages/contact/contact_us";

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
        path: '/auth/signup',
        element:<SignupPage></SignupPage>
    },
    {
        path: '/auth/login',
        element:<LoginPage></LoginPage>
    }
],
{
    basename: '/Dev_mart'  
});