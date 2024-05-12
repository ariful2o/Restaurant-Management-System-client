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
import AddaFoodItems from "../myprofile/myProfile/AddaFood/AddaFoodItems";

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
        loader:()=>fetch('http://localhost:5000/products')
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
        path: '/addfood',
        element: <AddaFoodItems></AddaFoodItems>,
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
