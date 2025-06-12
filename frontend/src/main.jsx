import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import CustomerContextProvider from "./context/CustomerContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CustomerContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CustomerContextProvider>
  </BrowserRouter>
);
