import { Provider } from "react-redux";
import {
  RouterProvider
} from "react-router-dom";
import routerRoot from "./components/Router";
import store from "./Redux/store";
import { ToastContainer } from 'react-toastify';


const router = routerRoot

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
