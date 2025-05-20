import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const CustomerContext = createContext();
function CustomerContextProvider({ children }) {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({
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
      value={{ customerData, setCustomerData, submitHandler }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContextProvider;
