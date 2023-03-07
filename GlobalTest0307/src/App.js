import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import { UserProvider } from "./store/3_context";
import { Provider } from "react-redux";
import store from "./adapters/store";

function App() {
  console.log(process.env.NODE_ENV);

  return (
    <>
      <Provider store={store}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </Provider>
    </>
  );
}

export default App;
