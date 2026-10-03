import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import WebsiteLayout from "./components/website/layouts/WebsiteLayout";
import Home from "./pages/website/Home";
import About from "./pages/website/About";
import Services from "./pages/website/Services";
import Contact from "./pages/website/Contact";


import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminLayout from "./components/admin/layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCompanyList from "./pages/admin/AdminCompanyList";
import AdminUserList from "./pages/admin/AdminUserList";
import AdminJobList from "./pages/admin/AdminJobList";
import AdminProfile from "./pages/admin/AdminProfile";

import CompanyLayout from "./components/company/layouts/CompanyLayout";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import CompanyJobList from "./pages/company/CompanyJobList";
import CompanyAddJobs from "./pages/company/CompanyAddJobs";
import CompanyProfile from "./pages/company/CompanyProfile";
import CompanyUpdateList from "./pages/company/CompanyUpdateList";

import UserDashboard from "./pages/user/UserDashboard";

import Unauthorize from "./pages/common/Unauthorize";
import JobDetails from "./pages/job/JobDetails";
import ApplyJob from "./pages/job/ApplyJob";

import ProtectedRoutes from "./routes/ProtectedRoutes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC WEBSITE ================= */}

        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
        {/* ================= AUTH ================= */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
      

        {/* ================= ADMIN ================= */}

        <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            <Route path="/admin/company-list" element={<AdminCompanyList />} />

            <Route path="/admin/user-list" element={<AdminUserList />} />

            <Route path="/admin/job-list" element={<AdminJobList />} />

            <Route path="/admin/profile" element={<AdminProfile />} />
          </Route>
        </Route>

        {/* ================= COMPANY ================= */}

        <Route element={<ProtectedRoutes allowedRoles={["company"]} />}>
          <Route element={<CompanyLayout />}>
            <Route path="/company/dashboard" element={<CompanyDashboard />} />

            <Route path="/company/job-list" element={<CompanyJobList />} />

            <Route path="/company/add-jobs" element={<CompanyAddJobs />} />

            <Route path="/company/profile" element={<CompanyProfile />} />

            <Route
              path="/company-update-list/:id"
              element={<CompanyUpdateList />}
            />
          </Route>
        </Route>

        {/* ================= USER ================= */}

        <Route element={<ProtectedRoutes allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Route>

        {/* ================= COMMON ================= */}

        <Route path="/unauthorize" element={<Unauthorize />} />

        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
     
        
        

      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
