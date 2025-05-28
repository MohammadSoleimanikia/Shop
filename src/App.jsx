import "./App.css";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import { Toaster } from "@/ui/sonner";
import Login from "./pages/Login";
import Admin from "./pages/AdminLayout";
import User from "./pages/User";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/admin/DashboardPage";
import ManageProducts from "./pages/admin/ManageProductsPage";
function App() {
    const routerUser = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            errorElement: <Error />,
            children: [
                { index: true, element: <Home /> },
                { path: "products", element: <Products /> },
                { path: "aboutus", element: <AboutUs /> },
                { path: "contact", element: <Contact /> },
                { path: "cart", element: <Cart /> },
                { path: "products/:id", element: <ProductDetail /> },
                { path: "login", element: <Login /> },
                { path: "user", element: <User /> },
            ],
        },
        {
            path: "admin",
            element: (
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <Admin />
                    </ProtectedRoute>
            ),
            children:[
                {index:true,element:<Dashboard/>},
                {path:"products",element:<ManageProducts/>}
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={routerUser} />
            <Toaster
                position="top-center"
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
