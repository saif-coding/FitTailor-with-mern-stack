import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

function CustomerTable() {
  const customers = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      size: "1",
      joined: "2025-05-10",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      size: "2",
      joined: "2025-05-12",
    },
  ];
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
          {customers.map((cust, idx) => (
            <tr key={idx} className="border-t text-sm">
              <td className="p-3">{cust.size}</td>
              <td className="p-3">{cust.name}</td>
              <td className="p-3">{cust.email}</td>
              <td className="p-3">{cust.phone}</td>
              <td className="p-3">{cust.joined}</td>
              <td className="p-3 flex gap-2">
                <button className="text-blue-500">
                  <FiEye />
                </button>
                <button className="text-green-500">
                  <FiEdit />
                </button>
                <button className="text-red-500">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
