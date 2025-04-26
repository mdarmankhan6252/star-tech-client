import { FaLaptop } from "react-icons/fa6";
import { BiMessage, BiSupport } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";


const OurServices = () => {
   return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 max-w-7xl mx-auto">
         <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm w-full">
            <span className="bg-primary p-3 rounded-full text-2xl text-white">
               <FaLaptop />
            </span>
            <div>
               <h2 className="font-semibold lg:text-lg">Laptop Finder</h2>
               <p className="font-light text-gray-800">Find your laptop easily</p>
            </div>
         </div>
         <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm w-full">
            <span className="bg-primary p-3 rounded-full text-2xl text-white">
               <BiMessage />
            </span>
            <div>
               <h2 className="font-semibold lg:text-lg">Raise a Complain</h2>
               <p className="font-light text-gray-800">Share your experience</p>
            </div>
         </div>
         <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm w-full">
            <span className="bg-primary p-3 rounded-full text-2xl text-white">
               <BiSupport />
            </span>
            <div>
               <h2 className="font-semibold lg:text-lg">Online Support</h2>
               <p className="font-light text-gray-800">Share your experience</p>
            </div>
         </div>
         <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm w-full">
            <span className="bg-primary p-3 rounded-full text-2xl text-white">
               <CiSettings />
            </span>
            <div>
               <h2 className="font-semibold lg:text-lg">Servicing Center</h2>
               <p className="font-light text-gray-800">Repair Your Device</p>
            </div>
         </div>
      </div>
   );
};

export default OurServices;