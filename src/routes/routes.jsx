import { createBrowserRouter, } from "react-router-dom"
import App from "../App.jsx";
import LogInPage from '../pages/LogInPage.jsx';
import HomePage from "../pages/HomePage.jsx";
import ConfirmationPage from '../pages/ConfirmationPage.jsx';
import ApprovalStatusPage from "../pages/ApprovalStatusPage.jsx";
import adminRoutes from "./adminRoutes.jsx";
import UserBookings from "../pages/UserBookings.jsx";
import Profile from "../pages/Profile.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <LogInPage />
        },
        {
          path: "/home",
          element: <HomePage />
        },
        {
          path: "/Confirmation",
          element: <ConfirmationPage />
        },
        {
          path: "/Status",
          element: <ApprovalStatusPage />
        },
        {
          path: "/user_bookings",
          element: <UserBookings />
        }, 
        {
          path: "/profile",
          element: <Profile />
        }, 
          adminRoutes
      ]
    },
  ]);

  export default router