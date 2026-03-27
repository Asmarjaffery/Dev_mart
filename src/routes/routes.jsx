import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import AboutPage from "../pages/About/about";
import ContactPage from "../pages/Contact/contact_us";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contact_us',
        element: <ContactPage />
    },
    {
        Path: '/signup',
        element:<signup/>
    }
],
{
    basename: '/Dev_mart'  
});