import React from 'react';
import { FaLocationDot, FaSearchengin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Stores = () => {
   return (
      <div className="bg-gradient-to-br from-[#0bc1e9] via-[#3749bb] to-[#00237e] text-white py-8 px-5 lg:px-8 flex items-center justify-between mb-10 rounded-lg flex-col gap-6 md:flex-row max-w-7xl mx-auto">

         <div className='flex items-center gap-3 justify-center flex-col md:flex-row text-center md:text-left'>
            <span className=' text-2xl md:text-4xl'>
               <FaLocationDot />
            </span>
            <div className='flex flex-col gap-2'>
               <h2 className='text-xl font-bold md:text-2xl lg:text-3xl'>20+ Physical Stores</h2>
               <p className='font-semibold text-sm md:text-[17px]'>Visit Our Store & Get Your Desired IT Product!</p>
            </div>
         </div>

         <div>
            <Link to='/' className='py-3 px-8 bg-gradient-to-l from-primary to-amber-600 rounded-full items-center flex gap-3'>
               <span className=' font-semibold'>Find Our Store</span>
               <FaSearchengin className='text-2xl'/>
            </Link>
         </div>


      </div>
   );
};

export default Stores;