import { IoSearchOutline } from "react-icons/io5";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaUserTie } from "react-icons/fa6";
import { BiBone, BiSolidOffer } from "react-icons/bi";

const Nav = () => {
   return (
      <nav className="bg-black/90 text-white px-5 py-4">
         <div className="max-w-7xl mx-auto flex items-center  justify-between gap-6">
            <Link to='/'>
               <img src={logo} alt="" className='w-20' />
            </Link>

            <div className="bg-white rounded-sm flex items-center justify-between grow">
               <input type="text" placeholder='Search' className="text-black w-full p-2 outline-0" />
               <IoSearchOutline className="text-gray-700 text-2xl mx-2 " />
            </div>

            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2.5">
                  <BiSolidOffer className="text-primary text-2xl" />
                  <div>
                     <h6 className="font-semibold text-sm">Offers</h6>
                     <p className="text-xs font-light text-gray-500">Latest Offers</p>
                  </div>
               </div>
               <div className="flex items-center gap-2.5">
                  <BiBone className="text-primary text-2xl" />
                  <div>
                     <h6 className="font-semibold text-sm">Happy Hours</h6>
                     <p className="text-xs font-light text-gray-500">Specials Deals</p>
                  </div>
               </div>
               <div className="flex items-center gap-2.5">
                  <FaUserTie className="text-primary text-2xl" />
                  <div>
                     <h6 className="font-semibold text-sm">Account</h6>
                     <p className="text-xs font-light text-gray-500"><Link className="hover:text-gray-100" to='/register'>Register</Link> or <Link to='/login' className="hover:text-gray-100">Login</Link></p>
                  </div>
               </div>

               <Link to='/' className="bg-gradient-to-tl from-blue-500 to-blue-800 py-2.5 px-8 rounded-sm hover:from-blue-800 hover:to-blue-500 transition font-semibold flex items-center gap-3">
                  <span>PC Builder</span>
                  <FaLaptopCode className="text-2xl" /></Link>
            </div>
         </div>
      </nav>
   );
};

export default Nav;