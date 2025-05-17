import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-hot-toast";
function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        loginData,
        { withCredentials: true }
      );
      if (result.status == 200) {
        toast.success(result.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-96 w-full text-center border border-gray-400 rounded-2xl px-8 bg-[#F5F5F8]"
      >
        <h1 className="text-[#1E2A38] text-3xl mt-10 font-medium">Login</h1>
        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
        <div className="flex items-center w-full mt-10 bg-white border border-[#1c9a91] h-12 rounded-full overflow-hidden pl-6 gap-2">
          <MdEmail />
          <input
            onChange={handleChange}
            type="email"
            value={loginData.email}
            name="email"
            placeholder="Email "
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-[#1c9a91] h-12 rounded-full overflow-hidden pl-6 gap-2">
          <FaLock />
          <input
            onChange={handleChange}
            type={show ? "text" : "password"}
            placeholder="Password"
            value={loginData.password}
            name="password"
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
          <span onClick={() => setShow(!show)} className=" text-[20px] mr-3">
            {show ? <IoEye /> : <IoMdEyeOff />}
          </span>
        </div>
        <div className="mt-5 text-left text-[#35aea6]">
          <a className="text-sm" href="#">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="mt-2 w-full h-11 font-semibold rounded-full text-white bg-[#3CB4AC] hover:opacity-90 transition-opacity"
        >
          Login
        </button>
        <p className="text-gray-500 text-sm mt-3 mb-11">
          Don’t have an account?{" "}
          <Link to={"/register"} className="text-indigo-500">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
