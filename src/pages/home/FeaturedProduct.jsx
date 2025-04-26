import Card from "../../components/Card";



const FeaturedProduct = () => {
   const products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
   return (
      <div className="max-w-7xl mx-auto">
         <div className='text-center space-y-4 pb-10'>
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <p className='text-gray-800/80'>Check & Get Your Desired Product!</p>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

            {
               products.map(product => <Card product={product} />)
            }

         </div>
      </div>
   );
};

export default FeaturedProduct;