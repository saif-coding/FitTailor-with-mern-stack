import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SummaryCards from "../components/SummaryCards";
import CustomerTable from "../components/CustomerTable";

function Dashboard() {
  return (
    <>
      <div className="md:flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <SummaryCards />
          <CustomerTable />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
