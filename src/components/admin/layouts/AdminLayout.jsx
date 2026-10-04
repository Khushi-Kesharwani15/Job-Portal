import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="d-flex ">
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

export default AdminLayout;
