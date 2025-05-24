import React, { useContext } from "react";
import {
  FiUsers,
  FiPackage,
  FiCalendar,
  FiMessageCircle,
} from "react-icons/fi";
import { CustomerContext } from "../context/CustomerContext";

function SummaryCards() {
  const { allCustomer } = useContext(CustomerContext);
  const pendingCount = allCustomer.filter((c) => c.status === "pending").length;
  const completeCount = allCustomer.filter(
    (c) => c.status === "complete"
  ).length;

  const cards = [
    {
      title: "Total Customers",
      value: allCustomer.length,
      icon: <FiUsers />,
      color: "white",
      bg: "bg-blue-600",
    },
    {
      title: "Pending Dress ",
      value: pendingCount,
      icon: <FiCalendar />,
      color: "white",
      bg: "bg-red-600",
    },
    {
      title: "Complete Dress ",
      value: completeCount,
      icon: <FiMessageCircle />,
      color: "white",
      bg: "bg-green-600",
    },
    {
      title: "Total Amounts",
      value: "$  435",
      icon: <FiPackage />,
      color: "white",
      bg: "bg-yellow-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={` p-6 rounded-2xl ${card.bg} shadow-md  flex items-cente gap-4`}
        >
          <div className={`text-3xl text-${card.color}`}>{card.icon}</div>
          <div>
            <h3 className="text-white text-md font-semibold">{card.title}</h3>
            <p className="text-xl font-semibold text-white">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
