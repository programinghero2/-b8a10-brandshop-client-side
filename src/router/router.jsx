import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/brands.json")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/products/:brand",
                element: <Products></Products>,
                loader: () => fetch('https://assignment10-server-lime.vercel.app/product')
            },
            {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(` https://assignment10-server-lime.vercel.app/product/${params.id}`)
            },
            {
                path: "/cart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch(" https://assignment10-server-lime.vercel.app/cartProduct")
            },
            {
                path:"/update/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(` https://assignment10-server-lime.vercel.app/product/${params.id}`)
            }
        ]
    }
])

export default router;