import React from "react";
import Routing from "./routes/Routing";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routing />
    </>
  );
}

export default App;
