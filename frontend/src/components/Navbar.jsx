import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../context/UserContext";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { userData, setUserData } = useContext(UserContext);
  const location = useLocation(); // 👈 this detects route change
  const popupRef = useRef();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const userLogout = async () => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/logout`,
        {},
        { withCredentials: true }
      );
      if (result.status === 200) {
        toast.success(result.data.message);
        setUserData("");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  // Close popup on outside click
  useEffect(() => {
    const closePopup = (e) => {
      if (!popupRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => document.removeEventListener("click", closePopup);
  }, []);
  useEffect(() => {
    setShow(false);
  }, [location]);
  return (
    <nav
      ref={popupRef}
      className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all"
    >
      <Link to={"/"}>
        <h className="text-3xl font-bold">Fit Tailor</h>
      </Link>
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>

        {userData.name ? (
          <Link to={"/dashboard"}>
            <button className="cursor-pointer px-8 py-2 bg-[#3CB4AC] hover:bg-[#16fef4] hover:text-black hover:border-black border transition text-white rounded-full">
              Dashboard
            </button>
          </Link>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="cursor-pointer px-8 py-2 bg-[#3CB4AC] hover:bg-[#16fef4] hover:text-black hover:border-black border transition text-white rounded-full">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="cursor-pointer px-8 py-2 bg-[#3CB4AC] hover:bg-[#16fef4] hover:text-black hover:border-black border transition text-white rounded-full">
                Register
              </button>
            </Link>
          </>
        )}

        {userData.name && (
          <div
            onClick={() => setShow(!show)}
            className="w-10 h-10 bg-gray-300 overflow-hidden rounded-full"
          >
            <img
              className=" object-cover w-full h-full"
              src={userData.profileImage}
              alt=""
            />
          </div>
        )}
        {show && (
          <div className="w-44 h-32 p-4  bg-gray-200 border absolute right-8 top-20 rounded-lg">
            <Link to={"/profile"}>
              <p className=" cursor-pointer">Profile</p>
            </Link>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link>
              <button
                onClick={userLogout}
                className="cursor-pointer absolute bottom-2 left-4 px-5 py-[5px] font-semibold bg-red-500 hover:bg-red-700 hover:text-white hover:border-black border transition text-white rounded-lg"
              >
                logout
              </button>
            </Link>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <a href="#" className="block">
          Home
        </a>
        <a href="#" className="block">
          About
        </a>
        <a href="#" className="block">
          Contact
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-[#3CB4AC] hover:bg-indigo-600 transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
