// import React from 'react';
// import carPro from "../assets/images/carpro.png";
// import { IoMdNotifications } from "react-icons/io";
// import { RxAvatar } from "react-icons/rx";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className=' top-0 left-0 right-0 h-[80px] bg-white shadow-lg z-20 fixed'>
//       <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
//         <img className='w-[65px]' src={carPro} alt="CarPro Logo" />
//         <div className='flex items-center space-x-6'>
//           <Link
//             to="/user_bookings">
//             <p className='font-bold text-lg cursor-pointer hover:text-gray-600'>Bookings</p>
//           </Link>

//           <IoMdNotifications size={25} className='cursor-pointer hover:text-gray-600' />
//           <RxAvatar size={25} className='cursor-pointer hover:text-gray-600' />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import { useState } from 'react';
import useAuth from '../hooks/auth/store';
import carPro from "../assets/images/carpro.png";
import { IoMdNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaBook } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const {user, isAuthenticated} = useAuth();
  console.log (user, "username");
  
  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
    setIsNotificationDropdownOpen(false); // Close notification dropdown if open
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsAvatarDropdownOpen(false); // Close avatar dropdown if open
  };

  return (
    <header className="top-0 left-0 right-0 h-[80px] bg-white shadow-lg z-20 fixed">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/"><img className="w-[65px]" src={carPro} alt="CarPro Logo" /></Link>
        {!isAuthenticated && <Link to="/" className="flex items-center ml-8git px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold">
                  Log In
                </Link>}
        <div className="flex items-center space-x-6">
        <div className='font-bold text-gray-900'>
            {user && "Hello " + user.username}
            </div>
          <div className="relative">
            <IoMdNotifications 
              size={25} 
              className="cursor-pointer hover:text-gray-600" 
              onClick={toggleNotificationDropdown} 
            />
            
            {isNotificationDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <p className="px-4 py-2 text-gray-800">No notifications available</p>
              </div>
            )}
          </div>

          
          <div className="relative">
            <RxAvatar 
              size={25} 
              className="cursor-pointer hover:text-gray-600" 
              onClick={toggleAvatarDropdown} 
            />
            {isAvatarDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                <Link to="/profile" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <CiUser className="mr-2" /> Profile
                </Link>
                <Link to="/user_bookings" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaBook className="mr-2" /> Bookings
                </Link>
                <Link to="/logout" className="flex items-center px-4 py-2 mt-6 text-gray-800 hover:bg-gray-100">
                  <CiLogout className="mr-2" /> Log Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


