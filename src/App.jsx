import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import NewsLetterSubscription from "./components/NewsletterSubscription";
import Pagination from "./components/Pagination";
import ProductList from "./components/ProductList";
import SidebarFilters from "./components/SidebarFilters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import { Toaster } from "@/components/ui/sonner";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <Error />,
            children: [
                { index: true, element: <Home /> },
                { path: "products", element: <Products /> },
                { path: "aboutus", element: <AboutUs /> },
                { path: "contact", element: <Contact /> },
                { path: "cart", element: <Cart/> },
                { path: "products/:id", element: <ProductDetail /> },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
            <Toaster
                position="top-right"
                toastOptions={{
                    unstyled: true,
                    classNames: {
                        error: "bg-red-400",
                        success:
                            "bg-green-100 text-green-800 border border-green-400 shadow-lg font-medium px-4 py-3 rounded-lg flex gap-3",
                        warning: "text-yellow-400",
                        info: "bg-blue-100 text-blue-800 border border-blue-400 shadow-lg font-medium px-4 py-3 rounded-lg flex gap-3 ",
                    },
                }}
            />
        </>
    );
}

export default App;
