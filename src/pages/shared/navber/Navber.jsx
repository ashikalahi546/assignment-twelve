import { useContext, useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../component/auth/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  // const [hovered,setHovered] = useState(false)
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Shop", path: "/shop" },
  ];
  return (
    <div className=" fixed bg-white xl:w-[1440px] 2xl:px-0 px-5 w-full  z-20 top-0 py-3">
      <div className="flex items-center justify-between">
        <div className="w-9/12 ">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img className="lg:w-[46px] w-9" src="/image/logo.png" alt="" />
              <h2 className="text-primary lg:text-3xl text-xl font-semibold">
                Medi<span className="text-secondary">care</span>
              </h2>
            </div>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-10 top-4 text-2xl cursor-pointer "
        >
          {open ? <RxCross2 /> : <MdMenuOpen />}
        </div>

        <ul
          className={` flex md:gap-5 md:w-full  items-center justify-between gap-2 md:shadow-[0px] right-10 rounded-md bg-white shadow-2xl md:p-0 p-5 w-40  md:text-base z-40 text-sm text-[#1F1F1F] font-medium md:static absolute  md:flex-row flex-col ${
            open ? "top-11 duration-300 delay-500" : "-top-56"
          }`}
        >
          <li className=" flex md:flex-row flex-col md:items-center md:gap-5 gap-2 ">
            {routes.map((route, idx) => (
              <NavLink
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                route={route}
                key={idx}
                to={route.path}
              >
                {route.name}
              </NavLink>
            ))}
          </li>
          <div className="">
          {user && (
            <Link to="/" className="">
              <img src="/image/shoping.png" alt="" />
            </Link>
          )}
          </div>
          <li className="md:w-24 w-full">
            {!user && (
              <Link to="/register">
                <button className="bg-primary px-5 py-2 w-full  text-white  md:text-sm text-xs  font-medium rounded-lg 2xl:-ml-0 md:-ml-6">
                  Join Us
                </button>
              </Link>
            )}
          </li>

          {user && (
            <div className="flex md:flex-row flex-col items-center gap-2">
              <h1> {user?.displayName}</h1>
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="size-10 rounded-full">
             {/* {
              user?.displayName
             } */}
                    <img
                    // onMouseEnter={()=>setHovered(true)}
                    // onMouseLeave={()=>setHovered(false)}
                      className=""
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-60"
                >
        
                    <Link className=" text-center" to="/bid-request">Update Profile</Link>
                    <Link className=" text-center pt-2" to="/bid-request">Dashboard</Link>
          
                  <li className="mt-2">
                    <button
                      onClick={logOut}
                      className="bg-gray-200 block text-center"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
