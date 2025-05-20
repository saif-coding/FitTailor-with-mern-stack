import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "./../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "./../pages/Dashboard";
import Profile from "../pages/Profile";
import Customer from "../pages/Customers";
import CustomerTwo from "./../pages/CustomerTwo";
function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/customertwo" element={<CustomerTwo />}></Route>
      </Routes>
    </>
  );
}

export default Routing;
