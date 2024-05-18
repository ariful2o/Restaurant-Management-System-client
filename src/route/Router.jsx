import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../errorPage/ErrorPage";
import AllFoods from "../pages/allFoods/AllFoods/AllFoods";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home/Home";
import AddaFoodItems from "../pages/myprofile/myProfile/AddaFood/AddaFoodItems";
import MyOrderedFood from "../pages/myprofile/myProfile/MyOrdered/MyOrderedFood";
import MyProfile from "../pages/myprofile/myProfile/MyProfile";
import PrivateRoute from "../private/PrivateRoute";
import MyAddedFoodItems from "../pages/myprofile/myProfile/myAddedFoodItems/MyAddedFoodItems";
import AboutUs from "../pages/about/AboutUs";
import ContactUs from "../pages/contact/ContactUs";
import Blogs from "../pages/blogs/Blogs";



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
        path: '/foods/:id',
        element: <PrivateRoute><FoodDetails /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/myprofile',
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
      },
      {
        path: '/myorderFoods',
        element: <PrivateRoute><MyOrderedFood></MyOrderedFood>,</PrivateRoute>
      },
      {
        path: '/addfood',
        element: <PrivateRoute><AddaFoodItems></AddaFoodItems>,</PrivateRoute>
      },
      {
        path: '/myaddedfoods',
        element: <PrivateRoute><MyAddedFoodItems /></PrivateRoute>,
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contactus',
        element: <ContactUs />
      },
      {
        path: '/blogs',
        element: <Blogs />
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