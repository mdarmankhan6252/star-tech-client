import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../admin/src/hooks/useAxiosPublic";
import { MoonLoader } from "react-spinners";
import Card from "../../components/Card";

const Products = () => {
   const location = useLocation();
   const axiosPublic = useAxiosPublic();
   const queryCategory = location.search.split("=")[1] || "";
   const navigate = useNavigate();

   const formattedCategory =
      queryCategory.charAt(0).toUpperCase() + queryCategory.slice(1).replace(/-/g, " ");

   const categories = [
      "drone",
      "gimbal",
      "fan",
      "weight-scale",
      "tv",
      "mobile-phone",
      "phone-accessories",
      "portable-ssd",
      "ip-camera",
      "trimmer",
      "smart-watch",
      "action-camera",
      "earphone",
   ];


   const { search } = location;


   const { data: products, isLoading, isPending } = useQuery({
      queryKey: ['products', search],
      queryFn: async () => {
         const res = await axiosPublic(`/product${search}`);
         return res.data;
      }
   })

   if (isLoading || isPending) {
      return <div className='absolute left-0 top-0 w-full h-screen z-50 border flex items-center justify-center'>
         <MoonLoader color="#fa8001" />

      </div>
   }

   const handleFilterChange = e => {
      const param = new URLSearchParams(location.search);

      if (e.target.checked) {
         param.set(e.target.name, e.target.value);
      } else {
         param.delete(e.target.name)
      }

      navigate(`/product?${param.toString()}`)

   }



   return products ? (
      <div className="max-w-7xl mx-auto px-5 py-10 space-y-6">
         {/* Title */}
         <h2 className="font-semibold text-gray-700 text-lg md:text-2xl">
            {formattedCategory.split('&')[0]} Price in Bangladesh
         </h2>

         {/* Description */}
         <p className="text-gray-700/80 font-normal text-sm leading-6">
         {formattedCategory.split('&')[0]} price in Bangladesh starts from BDT 3,300 and depending on brand and specification the price may go up to BDT 442,000. Buy the latest original {formattedCategory.split('&')[0]} from our shop in BD. Browse below and order yours now!
         </p>

         {/* Categories filter buttons */}
         <div className="flex pt-6 flex-wrap gap-2">
            {categories.map((item, i) => (
               <Link
                  to={`/product?category=${item}`}
                  key={i}
                  className={`px-4 py-1.5 rounded-full border ${queryCategory === item ? "bg-gray-200 text-gray-900" : "border-gray-300 text-gray-800/80"
                     } text-sm font-medium inline-block hover:bg-gray-100 transition cursor-pointer capitalize`}
               >
                  {item.replace(/-/g, " ")}
               </Link>
            ))}
         </div>

         {/* Main content */}
         <div className="flex flex-col md:flex-row py-5 my-12
       gap-6 border px-5 border-gray-300 rounded-sm">
            {/* Sidebar */}
            <div className="w-full md:w-1/4 space-y-5">
               <div className="border border-gray-300 p-4 rounded-sm space-y-4 bg-gray-200/20">
                  <h4 className="font-semibold text-gray-800/80 flex items-center gap-1.5">
                     <MdEventAvailable className="text-lg" />
                     <span>Availability</span>
                  </h4>

                  <div className="flex items-center gap-2">
                     <input type="checkbox"
                        name="inStock"
                        value="true"
                        onChange={handleFilterChange}  className="w-4 h-4" />
                     <label htmlFor="inStock" className="text-sm text-gray-700/80">In Stock</label>
                  </div>
                  <div className="flex items-center gap-2">
                     <input id="preOrder" type="checkbox" className="w-4 h-4" />
                     <label htmlFor="preOrder" className="text-sm text-gray-700/80">Pre Order</label>
                  </div>
               </div>

               <div className="border border-gray-300 p-4 rounded-sm space-y-4 bg-gray-200/20">
                  <h4 className="font-semibold text-gray-800/80 flex items-center gap-1.5">
                     <IoPricetagsOutline className="text-lg" />
                     <span>Pricing</span>
                  </h4>

                  <div className="flex items-center gap-2">
                     <input id="inStock" type="checkbox" className="w-4 h-4" />
                     <label htmlFor="inStock" className="text-sm text-gray-700/80">0 - 5,000</label>
                  </div>
                  <div className="flex items-center gap-2">
                     <input id="preOrder" type="checkbox" className="w-4 h-4" />
                     <label htmlFor="preOrder" className="text-sm text-gray-700/80">5,000 - 10,000</label>
                  </div>
                  <div className="flex items-center gap-2">
                     <input id="preOrder" type="checkbox" className="w-4 h-4" />
                     <label htmlFor="preOrder" className="text-sm text-gray-700/80">10,000 - 20,000</label>
                  </div>
                  <div className="flex items-center gap-2">
                     <input id="preOrder" type="checkbox" className="w-4 h-4" />
                     <label htmlFor="preOrder" className="text-sm text-gray-700/80">20,000 - 50,0000</label>
                  </div>
               </div>
            </div>

            <div className="w-full md:w-3/4">

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                  {
                     products.map(product => <Card product={product} key={product._id} />)
                  }

               </div>

            </div>
         </div>
      </div>
   ): <div className="h-screen w-full"></div>
};

export default Products;
