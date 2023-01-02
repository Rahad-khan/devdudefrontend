import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import AddForm from "./Dashboard/AddForm";
import BlogList from "./Dashboard/BlogList";
import UpdateForm from "./Dashboard/UpdateForm";
import Home from "./Home/Home";
import ReadingHistory from "./ReadingHistory";

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
                path: "history",
                element: <ReadingHistory />,
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
                loader: ({ params }) => fetch(`https://dev-dude-backend.vercel.app/blog/${params.id}`),
                element: <UpdateForm />
            }
        ]
    }
]);

export default routerRoot;
