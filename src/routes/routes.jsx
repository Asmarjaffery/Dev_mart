import { createBrowserRouter } from "react-router-dom";
import HomePage  from "../pages/home/home";
import AboutPage from "../pages/About/about";
import ContactPage from "../pages/Contact/contact_us";

export const publicRoutes = createBrowserRouter([
    {
        path:'/',
        element:<HomePage></HomePage>
    },
    {
        path:'/',
        element:<AboutPage></AboutPage>
    },
    {
        path:'/',
        element:<ContactPage></ContactPage>
    }
])