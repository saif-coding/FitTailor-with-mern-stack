import React, { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
import axios from "axios";
function UserContextProvider({ children }) {
  const [userData, setUserData] = useState([]);
  console.log(userData, "user data");
  const getUser = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/singleuser`,
        { withCredentials: true }
      );
      setUserData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData, getUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
