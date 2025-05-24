import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link, data } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CustomerContext } from "../context/CustomerContext";
function CustomerDetails() {
  const image = useRef();
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  console.log(file, price);
  // const image = useRef();
  const { getAllCustomer } = useContext(CustomerContext);
  const { id } = useParams(); // /customer/:id
  const navigate = useNavigate();
  const [customer, setCustomer] = useState([]);

  const fetchCustomer = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customer/getsinglecustomer/${id}`,
        { withCredentials: true }
      );
      setCustomer(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch customer");
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  const handleStatusChange = async (customer, id) => {
    if (customer.status === "complete") {
      toast.error("Already marked as complete ");
      return; // Don't send request again
    }
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/customer/status/${id}`,
        {}, // empty body (status is set from backend)
        { withCredentials: true }
      );
      if (result.status === 200) {
        await fetchCustomer();
        toast.success(result.data.message);
      }

      // optionally update UI here
    } catch (error) {
      console.error("Frontend Error:", error.response?.data || error.message);
      toast.error("Failed to update status");
    }
  };

  const deleteCustomer = async () => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/customer/delete/${id}`,
        { withCredentials: true }
      );
      if (result.status === 200) {
        await getAllCustomer();
        navigate("/dashboard");
        toast.success(result.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.result.data.message);
    }
  };

  const dressUpload = async () => {
    const formdata = new FormData();
    formdata.append("dressImages", file);
    formdata.append("payments", price);
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/dress/added`,
        formdata,
        { withCredentials: true }
      );
      if (result.status === 201) {
        console.log(result.data);
        alert("image uploaded");
      }
    } catch (error) {
      console.error(error);
      alert("image not upload");
    }
  };
  if (!customer) return <div className="p-6">Loading...</div>;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <Link to={"/dashboard"}>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-1 cursor-pointer capitalize ">
          back
        </button>
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Details</h2>

      <div className="mb-6 space-y-2 border md:flex justify-between p-8">
        <div className=" flex flex-col gap-3">
          <p>
            <strong>Name:</strong> <span className="ml-7">{customer.name}</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span className="ml-7">{customer.email}</span>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <span className="ml-7">{customer.phone}</span>
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            <span className="ml-7">
              {new Date(customer.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p className="">
            <strong>Status:</strong>{" "}
            <span
              className={`px-3 py-1 ml-7 rounded-full text-white ${
                customer.status === "pending" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {customer.status}
            </span>
          </p>
        </div>
        <div className=" w-66 overflow-hidden bg-amber-300 p-2 rounded-xl flex justify-between">
          <div className="py-1 flex flex-col w-32 justify-between bg-white">
            <div className="md:p-3 p-4 space-y-5 max-w-lg ">
              <div>
                <p className="text-base font-medium">Dress Image</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <label>
                    <input
                      onChange={(e) => setFile(e.target.files[0])}
                      accept="image/*"
                      type="file"
                      hidden
                      required
                    />
                    <img
                      className="max-w-24 cursor-pointer"
                      src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                      alt="uploadArea"
                      width={100}
                      height={100}
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex-1 flex flex-col gap-1 w-32">
                  <label className="text-base font-medium">Dress Price</label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    placeholder="0"
                    className="outline-none md:py-2.5 py-2 px-3 rounded border w-24 border-gray-500/40"
                    required
                  />
                </div>
              </div>
              <button
                onClick={dressUpload}
                className="px-4 py-2 bg-indigo-500 text-white w-24 font-medium rounded"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="bg-green-400 w-full h-full">ryw</div>
          {/* <div className="w-full flex bg-amber-800 justify-between">
            <div className=" overflow-hidden">
              <p className=" font-bold text-1xl ">Dress Color</p>
              <input
                className=" border w-10"
                ref={image}
                onChange={(e) => setFile(e.target.files[0])}
                hidden
                type="file"
              />
              <img
                onClick={(e) => image.current.click()}
                className="bg-gray-300 cursor-pointer w-full h-20 rounded-xl object-cover"
                src=""
                alt=" "
              />
            </div>
            <button>save</button>
            <div className="bg-yellow-50 w-32">
              <p>price</p>
              <input type="text" placeholder="price" />
            </div>
          </div> */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          "length",
          "chest",
          "shoulder",
          "neck",
          "sleeve",
          "shalwar",
          "pancha",
          "waist",
          "celler",
          "frontpocket",
          "leftpocket",
          "rightpocket",
          "jents",
          "daman",
        ].map((field) => (
          <div key={field}>
            <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{" "}
            {customer[field]}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate(`/customer/update/${customer._id}`)}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Update Details
        </button>
        <button
          onClick={() => handleStatusChange(customer, customer._id)}
          className={`${
            customer.status === "pending" ? "bg-red-600" : "bg-green-600"
          } hover:opacity-90 text-white py-2 px-4 rounded cursor-pointer`}
        >
          Mark as {customer.status === "pending" ? "pending" : "complete"}
        </button>
        <button
          onClick={deleteCustomer}
          className="bg-red-500 cursor-pointer hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Delete Details
        </button>
      </div>
    </div>
  );
}

export default CustomerDetails;
