import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
]);