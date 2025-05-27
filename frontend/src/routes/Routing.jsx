import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "./../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "./../pages/Dashboard";
import Profile from "../pages/Profile";
import Customer from "../pages/Customers";
import CustomerTwo from "./../pages/CustomerTwo";
import CustomerDetails from "../pages/CustomerDetails";
import CustomerUpdate from "../pages/CustomerUpdate";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import { UserContext } from "../context/userContext";
function Routing() {
  const { userData } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/login"
          element={!userData.name ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/dashboard"
          element={userData.name ? <Dashboard /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/profile"
          element={userData.name ? <Profile /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/customer"
          element={userData.name ? <Customer /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/customertwo"
          element={userData.name ? <CustomerTwo /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/customerdetails/:id"
          element={
            userData.name ? <CustomerDetails /> : <Navigate to={"/login"} />
          }
        ></Route>
        <Route
          path="/customer/update/:id"
          element={
            userData.name ? <CustomerUpdate /> : <Navigate to={"/login"} />
          }
        ></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default Routing;
