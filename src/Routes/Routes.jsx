import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Admin from "../Pages/Admin/Admin";
import Agent from "../Pages/Agent/Agent";
import User from "../Pages/User/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/admin",
                element: <Admin></Admin>,
            },
            {
                path: "/agent",
                element: <Agent></Agent>,
            },
            {
                path: "/user",
                element: <User></User>,
            },

        ],
    },
]);