import { Provider } from "react-redux";
import {
  RouterProvider
} from "react-router-dom";
import routerRoot from "./components/Router";
import store from "./Redux/store";

const router = routerRoot

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
