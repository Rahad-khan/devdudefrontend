import { createBrowserRouter } from "react-router-dom";
import AddForm from "../Layout/Dashboard/AddForm";
import BlogList from "../Layout/Dashboard/BlogList";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import About from "./About";
import Home from "./Home/Home";

const routerRoot = createBrowserRouter([
    {
        path: "/",
        element: (
            <Main />
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
        ]
    },
    {
        path: "/dashboard",
        element: (
            <Dashboard />
        ),
        children: [
            {
                path: "/dashboard",
                element: <BlogList />,
            },
            {
                path: "add-blog",
                element: <AddForm />
            }
        ]
    }
]);

export default routerRoot;
