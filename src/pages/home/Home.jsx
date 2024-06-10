import Banner from "../../component/banner/Banner";
import Category from "../Category";
import DiscountProduct from "../DiscountProduct";
import About from "../about/About";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <DiscountProduct/>
      <About/>
    </div>
  );
};

export default Home;
