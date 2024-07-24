// import React from 'react';
import { Outlet, useLocation, } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { BookingProvider } from './context/BookingContext';

const App = () => {
  const location = useLocation()

  
  return (
    <BookingProvider>
      {(location.pathname !== "/login") && <Navbar />}
      <Outlet />      
    </BookingProvider>
  );
}

export default App;
