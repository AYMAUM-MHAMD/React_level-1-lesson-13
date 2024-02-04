import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

import {useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import SignUp from "./pages/Signup";
import Signin from "./pages/Signin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/signin",
    element: <Signin/>,
  },

  {
    path: "/signup",
    element: <SignUp/>,
  },


  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

function App() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
)}

export default App;
