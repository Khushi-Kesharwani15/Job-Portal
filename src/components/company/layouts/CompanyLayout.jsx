import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function CompanyLayout() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar Left */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Right Content */}
      <div className="flex-grow-1">
        {/* Top Header */}
        <Header />

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CompanyLayout;
