import { createBrowserRouter } from "react-router-dom"
import LogInPage from './pages/LogInPage';
import App from "./App";
import HomePage from "./pages/HomePage";
import ConfirmationPage from './pages/ConfirmationPage.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/",
          element: <ConfirmationPage/>
        },  
        
        {
            path: "/login",
            element: <LogInPage/>
          }
      ]
    },
  ]);

  export default router