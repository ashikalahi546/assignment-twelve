import { BsEye } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../component/auth/AuthProvider";
// import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState("");

  const { signIn,signInWithGoogle } = useContext(AuthContext);
  //   const [passwordShow, setPasswordShow] = useState("");
  const navigate = useNavigate("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!/@gmail\.com$/.test(email)) {
      return setErrorEmail("Email must be end with @gmail.com");
    }
    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
      setError("Must have an lowercase letter in the password");
      return;
    }
    setError("");
    setSuccess("");
    setErrorEmail("");
    signIn(email, password).then((res) => {
      console.log(res.user);
      resert()
      setSuccess("User Created Successfully");
    });
    navigate("/").catch((error) => {
      setError(error.message);
    });
  };
  return (
    <div className=" flex justify-center ">
      <div className="border md:w-[519px] mx-auto py-8  md:px-[70px] sm:px-10  rounded-2xl w-full items-center ">
        <h2 className="text-center lg:text-[40px] sm:text-3xl text-xl font-medium mb-8">
          Login in to Continue
        </h2>
        <form onSubmit={handleLogin} className="mt-5 px-5">
          <input
          required
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full "
          />
          <div className="text-red-500   pt-2">
            {errorEmail && <p>{errorEmail}</p>}
          </div>
          <div className="relative mt-5">
            <input
            required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="border outline-none text-sm px-4 py-2.5 focus:border-primary rounded-lg w-full relative"
            />
            <span
              className="absolute right-4 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div>
            <div className="text-red-500">{error && <p>{error}</p>}</div>
            <div className="text-green-500">{success && <p>{success}</p>}</div>
          </div>
       
          <button className="border mt-4 w-full h-10 rounded-lg font-medium text-white bg-primary text-sm">
            Log in
          </button>
        </form>
        <div className="flex items-center justify-center gap-2 text-base pt-2.5 font-medium">
          <p className="">Dont’t Have An Account ?</p>
          <Link to="/register" className=" text-primary">
            Register
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 pt-5">
            <div className="border-b w-[86.5px] text-[#393939]"></div>
            <p>also log in with</p>
            <div className="border-b w-[86.5px] "></div>
          </div>


          <div className="flex justify-center gap-5 pt-5">
          <div onClick={signInWithGoogle}>
          <img className="cursor-pointer" src="/image/Frame 2204.png" alt="" />
          </div>
            <img className="cursor-pointer" src="/image/Frame 2205.png" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Login;
