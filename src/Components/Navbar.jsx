import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { IoMdMenu } from "react-icons/io";

function Navbar() {

  const [menu, setMenu] = useState( false )

  const handleChange = () => {
    setMenu( !menu)
  }
  return (
    <div>

      <div className='flex flex-row justify-between p-4 md:px-20 bg-white shadow-lg '>

        <div>
          <Link to='/' className='text-2xl p-1 cursor-pointer font-medium'>ABC</Link>
        </div>

        <nav className='hidden md:block'>
          <ul className='flex p-1 font-medium flex-row gap-4'>

            <li> <NavLink to="home" className="hover:text-green-400 transition-all" >Home</NavLink></li>

            <li> <NavLink to="courses" className="hover:text-green-400 transition-all" >Courses</NavLink></li>

            <li> <NavLink to="review" className="hover:text-green-400 transition-all" >Review</NavLink></li>

            <li> <NavLink to="contact" className="hover:text-green-400 transition-all" >Contact</NavLink></li>

            <li> <NavLink to="about" className="hover:text-green-400 transition-all">About</NavLink></li>

          </ul>

        </nav>

        {/* Responsive menu  */}

        <div className='md:hidden flex items-center' onClick={handleChange}>
          <div><IoMdMenu size={22} /></div>
        </div>

      </div>

      <div className={`${ !menu ? " translate-x-0  " : " translate-x-full "} left-[-100%] md:hidden flex flex-col absolute bg-black text-white  top-16 transition-transform duration-300 font-medium p-4 text-2xl text-center pt-8  h-fit gap-8 w-full border-2 border-red-400 `} >

      <NavLink to="home" className="hover:text-green-400 transition-all" >Home</NavLink>
  
      <NavLink to="courses" className="hover:text-green-400 transition-all" >Courses</NavLink>

      <NavLink to="review" className="hover:text-green-400 transition-all" >Review</NavLink>

      <NavLink to="contact" className="hover:text-green-400 transition-all" >Contact</NavLink>

      <NavLink to="about" className="hover:text-green-400 transition-all">About</NavLink>

      </div>

    </div>

  )
}

export default Navbar