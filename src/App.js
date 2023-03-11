
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "/signin",
      element:( <SignIn />),
    },
    {
      path: "/signup",
      element: (<SignUp />),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <div >
        
        
      </div>
      
    </div>
  );
}

export default App;
