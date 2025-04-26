import { Link } from 'react-router-dom'
import drone from '../../assets/category/drone-48x48.png'
import gimbal from '../../assets/category/gimbal-48x48.png'
import fan from '../../assets/category/charger-fan-48x48.png'
import scale from '../../assets/category/weight-scale-48x48.png'
import tv from '../../assets/category/tv-48x48.png'
import phone from '../../assets/category/mobile-phone-48x48.png'
import accessories from '../../assets/category/mobile-phone-accessories-48x48.png'
import ssd from '../../assets/category/portable-ssd-48x48.png'
import wifi from '../../assets/category/portable-ip-camera-48x48.png'
import trimmer from '../../assets/category/trimmer-48x48.png'
import watch from '../../assets/category/smart-watch-48x48.png'
import camera from '../../assets/category/action-camera-48x48.png'
import earphone from '../../assets/category/earphone-48x48.png'

const featured = [
   { image: drone, title: 'Drone', path: '/drone' },
   { image: gimbal, title: 'Gimbal', path: '/gimbal' },
   { image: fan, title: 'Fan', path: '/fan' },
   { image: scale, title: 'Weight Scale', path: '/weight-scale' },
   { image: tv, title: 'TV', path: '/tv' },
   { image: phone, title: 'Mobile Phone', path: '/mobile-phone' },
   { image: accessories, title: 'Phone Accessories', path: '/phone-accessories' },
   { image: ssd, title: 'Portable SSD', path: '/portable-ssd' },
   { image: wifi, title: 'IP Camera', path: '/ip-camera' },
   { image: trimmer, title: 'Trimmer', path: '/trimmer' },
   { image: watch, title: 'Smart Watch', path: '/smart-watch' },
   { image: camera, title: 'Action Camera', path: '/action-camera' },
   { image: earphone, title: 'Earphone', path: '/earphone' }
];

const FeaturedCategory = () => {
   return (
      <div className="py-10 max-w-7xl mx-auto">

         <div className='text-center space-y-4 pb-10'>
            <h2 className="text-2xl font-bold">Featured Categories</h2>
            <p className='text-gray-800/80'>Get Your Desired Product from Featured Category!</p>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {featured.map((item, index) => (
               <Link to={item.path}
                  key={index}
                  className="flex flex-col items-center border p-3 border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition"
               >
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-contain mb-2" />
                  <p className="text-center text-sm font-medium">{item.title}</p>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default FeaturedCategory;
