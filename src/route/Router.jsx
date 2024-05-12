import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);


export default router
