import Admin from "../pages/Dashboard/Admin"
import Cars from "../pages/Dashboard/Cars/Cars";
import Dashboard from "../pages/Dashboard/Dashboard"
import Users from "../pages/Dashboard/Users/Users";
import Bookings from "../pages/Dashboard/Bookings/Bookings";
import Tracking from "../pages/Dashboard/Tracking";
import NewCar from "../pages/Dashboard/Cars/NewCar";
import AddUser from "../pages/Dashboard/Users/AddUser";
import CarDetails from "../pages/Dashboard/Cars/CarDetails";
import UserDetails from "../pages/Dashboard/Users/UserDetails";
import EditUser from "../pages/Dashboard/Users/EditUser";
import EditCar from "../pages/Dashboard/Cars/EditCar";
import AdminLogin from "../pages/Dashboard/AdminLogin";
import BookingRequests from "../pages/Dashboard/Bookings/BookingRequests";

const adminRoutes  = {
    path:"admin",
    element: <Admin />,
    children: [
      {
        path:"login",
        element: <AdminLogin />
      },
      {
        path:"dashboard",
        element: <Dashboard />
      },
      {
        path:"users/add",
        element: <AddUser />
      },
      {
        path:"users/edit/:id",
        element: <EditUser />
      },
      {
        path:"users/UserDetails/:staffId",
        element: <UserDetails />
      },
      {
        path:"users",
        element: <Users />
      },
      {
        path:"cars/new",
        element: <NewCar />
      },
      {
        path:"cars/edit/:id",
        element: <EditCar />
      },
      {
        path:"cars/CarDetails/:vehicleId",
        element: <CarDetails />
      },
      {
        path:"cars",
        element: <Cars />
      },
      {
        path:"bookings",
        element: <Bookings />
      },
      {
        path:"bookings/:tripId",
        element: <BookingRequests />
      },
      {
        path:"tracking",
        element: <Tracking />
      }
    ]
  }

  export default adminRoutes;
  