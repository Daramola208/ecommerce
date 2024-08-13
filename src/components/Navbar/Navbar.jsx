import React from 'react'
import Logo from "../../assets/photo/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from './DarkMode';


const Menu = [
  {
    id: 1,
    name:"Home",
    link: "/#",
  },
  {
    id: 2,
    name:"Top Rated",
    link: "/services",
  },
  {
    id: 3,
    name:"Kid Wear",
    link: "/#kidwear",
  },
  {
    id: 4,
    name:"Mens Wear",
    link: "/#menswear",
  },
]


const DropdownLinks = [
  {
    id: 1,
    name: "Trending Product",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];


const Navbar = ({handleOrderPopup}) => {
  return (
        <div className='shadow-md
         bg-white dark:bg-gray-900 dark:text-white duration-200
         realative z-40'>
    {/* upper Navbar */}
      <div 
       className='bg-green-400/40 py-2'>
          <div className='container flex justify-between items-center'>
            <div>
              <a href="#" 
              className='font-bold text-2xl
               sm:text-3xl flex gap-2'>
                <img src={Logo} alt="Logo"
                 className="w-10 uppercase " />
                 Dee-Mart
              </a>
            </div>
            {/* search bar*/}
            <div className='flex justify-between
             items-center gap-4'>
              <div className='relative group hidden sm:block'>
                <input 
                type="text"
                 placeholder='search'
                 className='w-[200px] sm:w-[200px] group-hover:w-[300px] 
                 transition-all duration-500
                  rounded-full border
                   border-gray-300 px-2 py-1
                   dark:border-gray-500
                  focus:outline-none focus:border-1
                   focus:border-green-400
                   dark:bg-gray-800 ' 
                />
                <IoMdSearch
                className='text-gray-500
                 group-hover:text-green-400
                 absolute top-1/2 -translate-y-1/2 right-3'/>
              </div>
            </div>

            {/* order button */}
            <button 

            onClick ={() =>handleOrderPopup()
            }
            className='bg-gradient-to-r from-red-200
             to-green-500 transition-all duration-200
             text-white py-1 px-4 rounded-full flex
             item-center gap-3 group'
            >
              <span
              className='group-hover:block hidden
              transition-all duration-200'>
                Order
                </span>
                <FaCartShopping className='text-xl text-white'/>
            </button>

            {/* Darkmode switch */}
            <div>
              <DarkMode/>
            </div>
          </div>
      </div>
          {/* lower Navbar */}
        <div 
         className='flex justify-center'>
          <ul className='sm:flex hidden items-center dark:text-white
          gap-4'>
            {
             Menu.map((data) =>(
              <li key={data.id}>
                <a href={data.link}
                className='inline-block px-4 hover:text-green-400
                 duration-200'
                >{data.name}</a>
              </li>
             ))
            }
            {/* simple dropdown and links */}
            <li className='group relative cursor-pointer'>
              <a href="#"className='flex items-center 
              gap-[2px] py-2'>
                Trending Products
                 <span>
                  <FaCaretDown className='transition-all
                  duration-200 group-hover:rotate-180'/>
                 </span>
              </a>
              <div className='absolute z-[9999] hidden group-hover:block
              w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link} className='inline-block w-full
                      rounded-md p-2 hover:bg-green-400/20
                      '>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
    </div>
    );
  
}

export default Navbar