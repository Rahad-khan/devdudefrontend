import {
  RouterProvider
} from "react-router-dom";
import routerRoot from "./components/Router";

const router = routerRoot

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
