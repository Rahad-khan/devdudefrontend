import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";

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
            {
                path: "dashboard",
                element: <Dashboard />,
            }
        ]
    }
]);

export default routerRoot;
