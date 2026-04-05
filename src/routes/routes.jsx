import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoaderPage from "../components/loader/loader"
const HomePage = lazy(() => import("../pages/home/home"))
const AboutPage = lazy(() => import("../pages/about/about"))
const ContactPage = lazy(() => import("../pages/contact/contact_us"))
const SignUpPage = lazy(() => import("../pages/auth/signup"))
const LoginPage = lazy(() => import("../pages/auth/login"))
const ProductsPage = lazy(() => import("../pages/products/products"))
const ProductInfoPage = lazy(() => import("../pages/products_info/product-info"))
const Checkout = lazy(() => import("../pages/checkout/checkout"))
const ErrorPage = lazy(() => import("../pages/error/error"))

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><HomePage /></Suspense>
    },
    {
        path: '/about',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><AboutPage /></Suspense>
    },
    {
        path: '/contact_us',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><ContactPage /></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><ProductsPage /></Suspense>
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><ProductInfoPage /></Suspense>
    },
    {
        path: '/auth/signup',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><SignUpPage /></Suspense>
    },
    {
        path: '/auth/login',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><LoginPage /></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<LoaderPage />}><ErrorPage /></Suspense>
    }
], { basename: '/Dev_mart' })

export const privateRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><HomePage /></Suspense>
    },
    {
        path: '/about',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><AboutPage /></Suspense>
    },
    {
        path: '/contact_us',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><ContactPage /></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><ProductsPage /></Suspense>
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><ProductInfoPage /></Suspense>
    },
    {
        path: '/checkout',
        element: <Suspense fallback={<LoaderPage></LoaderPage>}><Checkout /></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<LoaderPage />}><ErrorPage /></Suspense>
    }
],
    { basename: '/Dev_mart' })