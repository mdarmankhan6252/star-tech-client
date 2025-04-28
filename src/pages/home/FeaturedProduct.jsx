import useAxiosPublic from "../../../../admin/src/hooks/useAxiosPublic";
import Card from "../../components/Card";
import { useQuery } from '@tanstack/react-query'



const FeaturedProduct = () => {
   const axiosPublic = useAxiosPublic();

   const { data: products = [] } = useQuery({
      queryKey: ['product'],
      queryFn: async () => {
         const res = await axiosPublic('/product/featured');
         return res.data;
      }
   })



   return (
      <div className="max-w-7xl mx-auto">
         <div className='text-center space-y-4 pb-10'>
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <p className='text-gray-800/80'>Check & Get Your Desired Product!</p>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

            {
               products.map(product => <Card product={product} key={product._id}/>)
            }

         </div>
      </div>
   );
};

export default FeaturedProduct;