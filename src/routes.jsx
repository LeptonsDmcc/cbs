import { createBrowserRouter, } from "react-router-dom"
import App from "./App";
import LogInPage from './pages/LogInPage';
import HomePage from "./pages/HomePage";
import ConfirmationPage from './pages/ConfirmationPage.jsx';
import ApprovalStatusPage from "./pages/ApprovalStatusPage.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
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
            path: "/login",
            element: <LogInPage/>
          }
      ]
    },
  ]);

  export default router