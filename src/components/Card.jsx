import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
   const { _id, photoUrl, title, prevPrice, currentPrice } = product;

   return (
      <Link to={`/product/${_id}`} className='border border-gray-300 p-5 rounded-md group cursor-pointer relative'>
         <img src={photoUrl} alt="image" className='w-full group-hover:scale-105 duration-500' />
         <h3 className='font-semibold pt-4 group-hover:underline'>{title}</h3>

         <div className='flex items-end gap-2 pt-3'>
            <h3 className='font-semibold text-lg text-primary flex items-center'>{currentPrice} <span className='text-lg font-bold pl-1'><FaBangladeshiTakaSign /></span></h3>
            <del className='line-through text-sm text-gray-700'>{prevPrice}৳</del>
         </div>

         <div className='absolute top-3 left-0 bg-amber-500 px-4 py-0.5 rounded-r-full text-white text-xs'>
            Save: {prevPrice - currentPrice} ৳
         </div>
      </Link>
   );
};

export default Card;