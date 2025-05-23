import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { CustomerContext } from "../context/CustomerContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function CustomerTable() {
  const { allCustomer, search } = useContext(CustomerContext);
  const filterSearch = allCustomer.filter(
    (item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      item.phone.toString().includes(search.trim())
  );
  return (
    <div className="p-4 overflow-x-auto">
      <table className="w-full min-w-[600px] bg-white rounded-xl overflow-hidden shadow-md">
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th className="p-3 text-left">Dress No</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Date Joined</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterSearch.map((cust, idx) => (
            <tr key={idx} className="border-t text-sm">
              <td className="p-3">{idx}</td>
              <td className="p-3">{cust.name}</td>
              <td className="p-3">{cust.email}</td>
              <td className="p-3">{cust.phone}</td>
              <td className="p-3">
                {new Date(cust.createdAt).toLocaleDateString()}
              </td>
              <Link to={`/customerdetails/${cust._id}`}>
                <button className="text-blue-500 p-3 cursor-pointer font-bold flex items-center justify-center gap-3">
                  <FiEye />
                  View
                </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
