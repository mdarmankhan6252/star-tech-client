
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { IoSearchOutline } from 'react-icons/io5';


const Banner = () => {
   return (
      <div className='max-w-7xl mx-auto py-6 lg:py-10'>

         <div className='flex gap-6'>
            <div className='w-3/4'>
               <Swiper
                  pagination={{
                     dynamicBullets: true,
                  }}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                   }}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper"
               >
                  <SwiperSlide className=''>
                     <img src="https://i.ibb.co.com/chccCWnT/home-appliance-banner-982x500.webp" alt="image" className=' w-full' />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                     <img src="https://i.ibb.co.com/bMYXHqvx/mobile-deal-web-banner-982x500.webp" alt="image" className=' w-full' />
                  </SwiperSlide>
                  <SwiperSlide className=''>
                     <img src="https://i.ibb.co.com/67HBBCTh/servicing-offer-banner-982x500.webp" alt="image" className=' w-full' />
                  </SwiperSlide>
               </Swiper>
            </div>

            <div className='w-1/4  flex flex-col gap-y-4'>
               <div className='bg-amber-200 p-6 rounded-sm flex flex-col gap-4 text-center'>
                  <h4 className='font-semibold text-lg'>Compare Products</h4>
                  <div className="bg-white rounded-sm flex items-center justify-between grow">
                     <input type="text" placeholder='Search product' className="text-black w-full p-2 outline-0" />
                     <IoSearchOutline className="text-gray-700 text-2xl mx-2 " />
                  </div>
                  <div className="bg-white rounded-sm flex items-center justify-between grow">
                     <input type="text" placeholder='Search product' className="text-black w-full p-2 outline-0" />
                     <IoSearchOutline className="text-gray-700 text-2xl mx-2 " />
                  </div>

                  <button className="w-full py-2 px-6 mt-4 font-bold text-blue-800 border-2 border-blue-800 rounded-sm text-center transition-all duration-300 hover:bg-gradient-to-tr hover:from-blue-900 hover:to-blue-700 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                     View Comparison
                  </button>


               </div>
               <div>
                  <img src="https://i.ibb.co.com/PGvzd2dM/Shape-Your-Career-with-Us-png1.webp" alt="" className='w-full' />
               </div>
            </div>
         </div>

      </div>
   );
};

export default Banner;