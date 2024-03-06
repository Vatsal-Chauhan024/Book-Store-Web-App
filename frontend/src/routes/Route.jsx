import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Components/About"
import SingleBook from "../Components/SingleBook"
import DashboardLayout from "../Pages/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import UploadBook from "../Pages/UploadBook";
import ManageBook from "../Pages/ManageBook";
import EditBooks from "../Pages/EditBooks";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../Components/Logout";





  const Routers = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path : '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: "/book/:id",
          element: <SingleBook/>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },

    {
      path: '/admin/dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <PrivateRoute><UploadBook/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/manage",
          element: <PrivateRoute><ManageBook/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <PrivateRoute><EditBooks/></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },

    {
      path: "/sign-up", 
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "admin/dashboard/logout",
      element: <Logout/>
    }
  ]);

  export default Routers