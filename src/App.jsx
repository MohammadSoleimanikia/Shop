import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
import ProductDetail from "./pages/ProductDetail"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement:<Error/>,
            children: [
                { index: true, element: <Home /> },
                { path: "products", element: <Products /> },
                { path: "aboutus", element: <AboutUs/> },
                { path: "contact", element: <Contact /> },
                {path:"products/:id",element:<ProductDetail/>}
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
