import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blog from "../components/Blog/Blog";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddAToyPage from "../Pages/AddAToyPage/AddAToyPage";
import AllToysPage from "../Pages/AllToysPage/AllToysPage";
import MyToysPage from "../Pages/MyToysPage/MyToysPage";
import ToyDetails from "../components/ToyDetails/ToyDetails";
import ToyTab from "../components/ToyTab/ToyTab";
import HomeDetails from "../components/HomeDetails/HomeDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <HomeDetails></HomeDetails>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/addtoys",
                element: <PrivateRoute><AddAToyPage></AddAToyPage></PrivateRoute>,
            },
            {
                path: "/alltoys",
                element: <AllToysPage></AllToysPage>,
            },
            {
                path: "/mytoys",
                element: <PrivateRoute><MyToysPage></MyToysPage></PrivateRoute>,
            },           
            {
                path: "/toydetail/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-verse-server-beige.vercel.app/alltoys/${params.id}`)
            },
            
        ]
    }
])

export default router