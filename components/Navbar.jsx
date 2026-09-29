import React from 'react'
import { ShoppingCart } from "lucide-react";
import { Plus } from "lucide-react";
import { useContext } from 'react';
import { MyStore } from '../Context/MyContext';
import {NavLink} from 'react-router'

const Navbar = ({inRecipePage}) => {
    const {setShowForm,handleOpenForm,cartitems} = useContext(MyStore)
  return (
    <div>
      
<nav className="w-full h-16 px-6 md:px-10 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm">

  {/* Logo */}
  <NavLink to='/'><div className="text-2xl font-bold text-orange-500">
    Recipe<span className="text-gray-800">.</span>
  </div></NavLink>

  {/* Search */}
  <div className="hidden md:flex w-[40%]">
    <input
      type="text"
      placeholder="Search recipes..."
      className="w-full h-10 px-4 rounded-full bg-gray-100 outline-none
                 focus:bg-white focus:ring-2 focus:ring-orange-100
                 focus:border-orange-400 transition"
    />
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-4">

    {/* Add Recipe */}
  {inRecipePage ?    <button
  hidden
   onClick={handleOpenForm}
  className="
    group relative
    h-11 w-11 hover:w-36
    flex items-center justify-center
    rounded-full
    bg-orange-500
    text-white
    shadow-md shadow-orange-200
    hover:bg-orange-600
    hover:shadow-lg hover:shadow-white-300
    transition-all duration-300 ease-out
    overflow-hidden
  "
>
  {/* Plus Icon */}
  <span
    className="
      absolute left-1/2 -translate-x-1/2
      text-2xl font-light leading-none
      transition-all duration-300
      group-hover:left-5
      group-hover:translate-x-0
      group-hover:rotate-90
    "
  >
   <Plus
  size={21}
  strokeWidth={2}
  className="
    transition-all duration-300
    group-hover:rotate-90
  "
/>
  </span>

  {/* Text */}
  <span
    className="
      ml-7
      opacity-0
      translate-x-3
      whitespace-nowrap
      font-medium text-sm
      group-hover:opacity-100
      group-hover:translate-x-0
      transition-all duration-300
    "
  >
    Add Recipe
  </span>
</button> :    <button
   onClick={handleOpenForm}
  className="
    group relative
    h-11 w-11 hover:w-36
    flex items-center justify-center
    rounded-full
    bg-orange-500
    text-white
    shadow-md shadow-orange-200
    hover:bg-orange-600
    hover:shadow-lg hover:shadow-white-300
    transition-all duration-300 ease-out
    overflow-hidden
  "
>
  {/* Plus Icon */}
  <span
    className="
      absolute left-1/2 -translate-x-1/2
      text-2xl font-light leading-none
      transition-all duration-300
      group-hover:left-5
      group-hover:translate-x-0
      group-hover:rotate-90
    "
  >
   <Plus
  size={21}
  strokeWidth={2}
  className="
    transition-all duration-300
    group-hover:rotate-90
  "
/>
  </span>

  {/* Text */}
  <span
    className="
      ml-7
      opacity-0
      translate-x-3
      whitespace-nowrap
      font-medium text-sm
      group-hover:opacity-100
      group-hover:translate-x-0
      transition-all duration-300
    "
  >
    Add Recipe
  </span>
</button>}

    {/* User Avatar */}
    <div
      className="w-10 h-10 rounded-full bg-gray-100
                 flex items-center justify-center
                 font-semibold text-gray-700
                 cursor-pointer hover:bg-gray-200 transition"
    >
      U
    </div>

    {/* Cart */}
    <div className="relative cursor-pointer text-gray-700 hover:text-orange-500 transition">

     <NavLink to='/cart'> <span className="text-xl">🛒</span></NavLink>

      <span
        className="absolute -top-2 -right-2 w-5 h-5
                   rounded-full bg-orange-500 text-white
                   text-[11px] flex items-center justify-center"
      >
        {cartitems.length}
      </span>

    </div>

  </div>

</nav>
    </div>
  )
}

export default Navbar
