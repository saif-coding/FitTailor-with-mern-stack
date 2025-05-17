import React from "react";
import {
  FiUsers,
  FiPackage,
  FiCalendar,
  FiMessageCircle,
} from "react-icons/fi";

function SummaryCards() {
  const cards = [
    {
      title: "Total Customers",
      value: 1250,
      icon: <FiUsers />,
      color: "white",
      bg: "bg-red-600",
    },
    {
      title: "New Orders",
      value: 35,
      icon: <FiPackage />,
      color: "white",
      bg: "bg-green-600",
    },
    {
      title: "Appointments",
      value: 8,
      icon: <FiCalendar />,
      color: "white",
      bg: "bg-yellow-600",
    },
    {
      title: "Complete Orders",
      value: 344,
      icon: <FiMessageCircle />,
      color: "white",
      bg: "bg-blue-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={` p-6 rounded-2xl ${card.bg} shadow-md  flex items-center gap-4`}
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
