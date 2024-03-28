// import React from 'react'
import carPro from "../assets/images/carpro.png"
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <header className='bg-white top-0 left-0 right-0 h-[124px] shadow-lg'>
      <nav className='px-4 py-4 mx-auto w-[80%] flex justify-between items-center
      '>
        <img className='w-[120px]' src={carPro} alt="" />
        <IoMdNotifications size={30} />
      </nav>
      

    </header>
  )
}

export default Navbar