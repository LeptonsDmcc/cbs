// // import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { LuLayoutDashboard } from 'react-icons/lu';
// import { FaUser } from 'react-icons/fa';
// import { FaCar } from 'react-icons/fa';
// import { FaBook } from 'react-icons/fa';
// import { CgTrack } from 'react-icons/cg';
// import { CiLogout } from "react-icons/ci";

// const linkItems = [
//   { icon: <LuLayoutDashboard />, to: 'dashboard', text: 'Dashboard' },
//   { icon: <FaUser />, to: 'users', text: 'Users' },
//   { icon: <FaCar />, to: 'cars', text: 'Cars' },
//   { icon: <FaBook />, to: 'bookings', text: 'Bookings' },
//   { icon: <CgTrack />, to: 'tracking', text: 'Tracking' },
//   { icon: <CiLogout />, to: 'log out', text: 'Log Out' },
// ];

// const Sidebar = () => {
//   return (
//     <div className="h-full bg-gray-900 text-white fixed top-20 bottom-0 w-[20%]">
//       <ul className="py-4">
//         {linkItems.map(({ to, text, icon }, index) => (
//           <li key={to} className={`my-2 ${text === 'Log Out' ? 'mt-[46px]' : ''}`}>
//             <NavLink
//               className={({ isActive }) => {
//                 const activeStyles = isActive ? 'bg-[#a8cf45] text-gray-800' : '';
//                 return (
//                   'flex items-center gap-4 px-4 py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-[#a8cf45] hover:text-gray-800' +
//                   ' ' +
//                   activeStyles
//                 );
//               }}
//               to={to}
//             >
//               <span className="text-xl">{icon}</span>
//               <span className="text-lg">{text}</span>
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { CgTrack } from 'react-icons/cg';
import { CiLogout } from "react-icons/ci";

const linkItems = [
  { icon: <LuLayoutDashboard />, to: 'dashboard', text: 'Dashboard' },
  { icon: <FaUser />, to: 'users', text: 'Users' },
  { icon: <FaCar />, to: 'cars', text: 'Cars' },
  { icon: <FaBook />, to: 'bookings', text: 'Bookings' },
  // { icon: <CgTrack />, to: 'tracking', text: 'Tracking' },
  { icon: <CiLogout />, to: 'log out', text: 'Log Out' },
];

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-900 text-white fixed top-20 bottom-0 w-[20%] shadow-xl">
      <ul className="py-4">
        {linkItems.map(({ to, text, icon }, index) => (
          <li key={to} className={`my-2 ${text === 'Log Out' ? 'mt-[60px]' : ''}`}>
            <NavLink
              className={({ isActive }) => {
                const activeStyles = isActive ? 'bg-[#a8cf45] text-gray-800 shadow-md' : 'shadow-lg';
                return (
                  'flex items-center gap-4 px-4 py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-[#a8cf45] hover:text-gray-800' +
                  ' ' +
                  activeStyles
                );
              }}
              to={to}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-lg">{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { LuLayoutDashboard } from 'react-icons/lu';
// import { FaUser } from 'react-icons/fa';
// import { FaCar } from 'react-icons/fa';
// import { FaBook } from 'react-icons/fa';
// import { CgTrack } from 'react-icons/cg';
// import { CiLogout } from "react-icons/ci";
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

// const linkItems = [
//   { icon: <LuLayoutDashboard />, to: 'dashboard', text: 'Dashboard' },
//   { icon: <FaUser />, to: 'users', text: 'Users' },
//   { icon: <FaCar />, to: 'cars', text: 'Cars' },
//   { icon: <FaBook />, to: 'bookings', text: 'Bookings' },
//   { icon: <CgTrack />, to: 'tracking', text: 'Tracking' },
//   { icon: <CiLogout />, to: 'log out', text: 'Log Out' },
// ];

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`h-full bg-gray-900 text-white fixed top-20 bottom-0 transition-all duration-300 ${isOpen ? 'w-[20%]' : 'w-16'} shadow-xl`}>
//       <button 
//         onClick={toggleSidebar} 
//         className="absolute top-4 right-4 text-2xl text-white focus:outline-none"
//       >
//         {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//       </button>
//       <ul className="py-4 mt-12">
//         {linkItems.map(({ to, text, icon }, index) => (
//           <li key={to} className={`my-2 ${text === 'Log Out' ? 'mt-[46px]' : ''}`}>
//             <NavLink
//               className={({ isActive }) => {
//                 const activeStyles = isActive ? 'bg-[#a8cf45] text-gray-800 shadow-md' : 'shadow-lg';
//                 return (
//                   'flex items-center gap-4 px-4 py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-[#a8cf45] hover:text-gray-800' +
//                   ' ' +
//                   activeStyles
//                 );
//               }}
//               to={to}
//             >
//               <span className="text-xl">{icon}</span>
//               {isOpen && <span className="text-lg">{text}</span>}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


