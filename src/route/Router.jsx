import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/home/Home/Home";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import AllFoods from "../allFoods/AllFoods/AllFoods";
import Gallery from "../gallery/Gallery/Gallery";
import MyProfile from "../myprofile/myProfile/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allfoods',
        element: <AllFoods></AllFoods>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/myprofile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      }
    ]
  },
]);


export default router
