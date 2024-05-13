import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/home/Home/Home";
import AllFoods from "../pages/allFoods/AllFoods/AllFoods";
import MyProfile from "../pages/myprofile/myProfile/MyProfile";
import AddaFoodItems from "../pages/myprofile/myProfile/AddaFood/AddaFoodItems";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Gallery from "../pages/gallery/Gallery/Gallery";
import FoodDetails from "../pages/foodDetails/FoodDetails";


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
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/foods/:id',
        element: <FoodDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
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
