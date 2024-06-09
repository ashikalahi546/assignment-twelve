import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navber from "../pages/shared/navber/Navber";

const Main = () => {
  return (
    <div className="xl:w-[1440px] mx-auto 2xl:px-0 px-5">
      <Navber />
      <div className="mt-20 mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
