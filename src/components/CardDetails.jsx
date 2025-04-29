import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import { useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../../admin/src/hooks/useAxiosPublic";
import Card from "./Card";

const CardDetails = () => {
   const location = useLocation();
   const path = useParams();
   console.log(path.id);
   const axiosPublic = useAxiosPublic();

   const { data: product, isLoading: productLoading, isPending: productPending
   } = useQuery({
      queryKey: ['product', path?.id],
      queryFn: async () => {
         const res = await axiosPublic.get(`/product/${path.id}`)
         return res.data;
      }
   })


   const { data: products, isLoading, isPending } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await axiosPublic.get('/product/inStock')
         return res.data;
      }
   })

   if (isLoading || isPending || productLoading || productPending) {
      return <div className='absolute left-0 top-0 w-full h-screen z-50 border flex items-center justify-center'>
         <MoonLoader color="#fa8001" />
      </div>
   }

   console.log(products.slice(0, 5));

   // const { category, currentPrice, features, inStock, photoUrl, prevPrice, title } = product;





   return (
      <div className="max-w-6xl mx-auto w-full px-5 py-10">
         <p>
            <span>Home</span> /
            <span>{location.pathname.split('/')[1]}</span> /
            <span>{product.category}</span> /
            <span className="text-indigo-500">{product.title}</span>
         </p>

         <div className="flex flex-col md:flex-row gap-16 mt-4">

            <div className="border border-gray-500/30 basis-1/3 flex items-center justify-center">
               <img src={product.photoUrl} alt="Selected product" />
            </div>

            <div className="text-sm w-full basis-2/3">
               <h1 className="text-3xl font-medium">{product.title}</h1>



               <div className="mt-6">
                  <p className="text-gray-500/70 line-through">MRP: {product.prevPrice} ৳</p>
                  <p className="text-2xl font-medium">MRP: {product.currentPrice} ৳</p>
                  <span className="text-gray-500/70">(inclusive of all taxes)</span>
               </div>

               <p className="text-base font-medium mt-6">About Product</p>
               <ul className="list-disc ml-4 text-gray-900/70">
                  {
                     product.features.map((item, i) => <li key={i}>
                        {item}
                     </li>)
                  }


               </ul>

               <div className="flex items-center mt-10 gap-4 text-base">
                  <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                     Add to Cart
                  </button>
                  <button className="w-full py-3.5 cursor-pointer font-medium bg-amber-500 text-white hover:bg-amber-600 transition" >
                     Buy now
                  </button>
               </div>
            </div>
         </div>

         {/* related products */}

         <div>
            <h2 className="font-semibold text-gray-800/90 text-xl text-center py-20">RELATED PRODUCTS</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
               {products.slice(0, 5).map(product => <Card product={product} />)}
            </div>
         </div>
      </div>
   );
};

export default CardDetails;