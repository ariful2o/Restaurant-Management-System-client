import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import AllFoods from "../pages/allFoods/AllFoods/AllFoods";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import Home from "../pages/home/Home/Home";
import AddaFoodItems from "../pages/myprofile/myProfile/AddaFood/AddaFoodItems";
import MyProfile from "../pages/myprofile/myProfile/MyProfile";
import Gallery from "../pages/gallery/Gallery";
import MyOrderedFood from "../pages/myprofile/myProfile/MyOrdered/MyOrderedFood";
import MyAddedFoodItems from "../pages/myprofile/myProfile/myAddedFoodItems/MyAddedFoodItems";


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
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/myprofile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/myorderfood',
        element: <MyOrderedFood></MyOrderedFood>,
      },
      {
        path: '/addfood',
        element: <AddaFoodItems></AddaFoodItems>,
      },
      {
        path: '/myaddedfooditems',
        element: <MyAddedFoodItems />,
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