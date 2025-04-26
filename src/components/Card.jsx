import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import image from '../assets/product/product.jpg'
const Card = () => {
   return (
      <div className='border border-gray-300 p-5 rounded-md group cursor-pointer relative'>
         <img src={image} alt="image" className='w-full group-hover:scale-105 duration-500' />
         <h3 className='font-semibold pt-4 group-hover:underline'>Gree 1 Ton Muse-Split Non-Inverter AC</h3>

         <div className='flex items-end gap-2 pt-3'>
            <h3 className='font-semibold text-lg text-primary flex items-center'>43,000 <span className='text-lg font-bold pl-1'><FaBangladeshiTakaSign /></span></h3>
            <del className='line-through text-sm text-gray-700'>52,000৳</del>
         </div>

         <div className='absolute top-3 left-0 bg-primary px-4 py-0.5 rounded-r-full text-white text-xs'>
            Save: 2100 ৳ (-5%)
         </div>
      </div>
   );
};

export default Card;