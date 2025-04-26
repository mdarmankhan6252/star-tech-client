import Banner from "./Banner";
import FeaturedCategory from "./FeaturedCategory";
import FeaturedProduct from "./FeaturedProduct";
import OurServices from "./OurServices";
import Stores from "./Stores";
import UpdatedNews from "./UpdatedNews";

const Home = () => {
   return (
      <div className="px-5">
         <Banner />
         <UpdatedNews />
         <OurServices />
         <FeaturedCategory />
         <Stores />
         <FeaturedProduct />

      </div>
   );
};

export default Home;

/*




*/