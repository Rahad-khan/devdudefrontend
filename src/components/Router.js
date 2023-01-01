import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import About from "./About";
import AddForm from "./Dashboard/AddForm";
import BlogList from "./Dashboard/BlogList";
import UpdateForm from "./Dashboard/UpdateForm";
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
            },
            {
                path: "updateBlog/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.id}`),
                element: <UpdateForm />
            }
        ]
    }
]);

export default routerRoot;
