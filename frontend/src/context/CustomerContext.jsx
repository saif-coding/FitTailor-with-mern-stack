import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const CustomerContext = createContext();
function CustomerContextProvider({ children }) {
  const navigate = useNavigate();
  const [allCustomer, setAllCustomer] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    length: "",
    chest: "",
    shoulder: "",
    neck: "",
    sleeve: "",
    shalwar: "",
    pancha: "",
    waist: "",
    celler: "",
    frontpocket: "",
    leftpocket: "",
    rightpocket: "",
    jents: "",
    daman: "",
  });

  const getAllCustomer = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customer/getallcustomer`,
        { withCredentials: true }
      );
      setAllCustomer(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCustomer();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/customer/add`,
        customerData,
        { withCredentials: true }
      );
      if (result.status === 201) {
        toast.success(result.data.message);
        await getAllCustomer();
        navigate("/dashboard");
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <CustomerContext.Provider
      value={{
        customerData,
        setCustomerData,
        submitHandler,
        allCustomer,
        setAllCustomer,
        updatedData,
        setUpdatedData,
        getAllCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContextProvider;
