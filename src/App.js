import { RouterProvider } from "react-router-dom";
import auth from "./firebase/firebase.config";
import routes from "./routes/routes";

function App() {
  // const authc=auth;
  // console.log(authc)
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
