import { useContext, useState } from "react";
// import { IoEyeOutline } from "react-icons/io5";
// import { RxEyeClosed } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../component/auth/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, setUser, user } =
    useContext(AuthContext);
  // const [passwordShow, setPasswordShow] = useState("");
  const navigate = useNavigate('')
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log({ name, seller, email, password, photo });
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
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess("User Created Successfully");
        updateUserProfile(name, photo);
        setUser({ ...user, photoURL: photo, displayName: name });
      })
      navigate('/')
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="border md:w-[519px] mx-auto py-12  md:px-[70px] sm:px-10  rounded-2xl">
      <h1 className="lg:text-[40px] md:text-4xl text-2xl font-semibold text-center">
        Sign up to Continue
      </h1>
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-6 pt-[30px] px-6"
      >
        <input
          required
          type="text"
          name="name"
          placeholder="User name"
          className="border outline-none text-sm px-4  focus:border-primary rounded-lg w-full   h-11 "
        />
        <input
          required
          type="text"
          name="seller"
          placeholder="User or Seller"
          className="border outline-none text-sm px-4  focus:border-primary rounded-lg w-full   h-11"
        />
        <div>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="border outline-none text-sm px-4  focus:border-primary rounded-lg w-full   h-11"
          />
          <div className="text-red-500   pt-1 ">
            {errorEmail && <p>{errorEmail}</p>}
          </div>
        </div>
        <div>
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="border outline-none text-sm px-4  focus:border-primary rounded-lg w-full   h-11"
          />

          <div className="text-red-500 pt-1">{error && <p>{error}</p>}</div>
          <div className="text-green-500 pt-1">{success && <p>{success}</p>}</div>
        </div>

        <input
          required
          type="photo"
          name="photo"
          placeholder="Upload profile photo"
          className="border outline-none text-sm px-4  focus:border-primary rounded-lg w-full   h-11"
        />
        <div className="pt-5">
          <button className="bg-primary h-11 w-full  text-white md:text-base text-xs    font-bold rounded-lg ">
            Sign Up
          </button>

          <Link to="/login">
            <button className="border-primary border h-11 w-full  text-primary md:text-base text-xs font-bold rounded-lg  mt-5">
              Log in
            </button>
          </Link>
          <div className="flex items-center justify-center gap-2 pt-5">
            <div className="border-b w-[86.5px] text-[#393939]"></div>
            <p>also log in with</p>
            <div className="border-b w-[86.5px] "></div>
          </div>


          <div className="flex justify-center gap-5 pt-5">
          <div onClick={()=>signInWithGoogle()}>
          <img className="cursor-pointer" src="/image/Frame 2204.png" alt="" />
          </div>
            <img className="cursor-pointer" src="/image/Frame 2205.png" alt="" />
          </div>
        </div>


        
      </form>
    </div>
  );
};

export default Register;
