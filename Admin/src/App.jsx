import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "apexcharts/dist/apexcharts.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Components/Layouts/Topbar";
import Sidebar from "./Components/Layouts/Sidebar";
import Dashboard from "./Components/Pages/Dashboard";
import BlogList from "./Components/Pages/BlogList";
import BlogForm from "./Components/Pages/BlogForm";
import BlogTable from "./Components/Pages/BlogTable";
import EditBlog from "./Components/Pages/EditBlog";
import ViewBlog from "./Components/Pages/ViewBlog";
import ConnectForm from "./Components/Pages/ConnectForm";
import ContactForm from "./Components/Pages/ContactForm";
import AdminChatPage from "./Components/Chat/AdminChatPage";
import AddTeam from "./Components/Pages/AddTeam";
import EditTeam from "./Components/Pages/EditTeam";
import ViewTeams from "./Components/Pages/ViewTeams";
import LoginView from "./Components/features/user/login/LoginView";
import RegisterView from "./Components/features/user/register/RegisterView";
import ProtectedRoute from "./Components/features/ProtectedRoute";

import { SearchContext } from "./searchContext";
import AddDesign from "./Components/Pages/AddDesign";
import ManageDesigns from "./Components/Pages/ManageDesigns";
import EditDesign from "./Components/Pages/EditDesign";
import AddDevelopment from "./Components/Pages/AddDevelopment";
import ManageDevelopments from "./Components/Pages/ManageDevelopments";
import EditDevelopment from "./Components/Pages/EditDevelopment";

function App() {
  const [query, setQuery] = useState("");
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      <BrowserRouter>
        <Routes>
          {/* ===================== PUBLIC ROUTES ===================== */}
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />

          {/* ===================== PROTECTED ROUTES ===================== */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <LayoutWrapper />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

/* 
  LayoutWrapper = Sidebar + Topbar + All protected pages
*/
const LayoutWrapper = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      <div
        className="flex-grow-1"
        style={{ minHeight: "100vh", background: "#f8f9fc" }}
      >
        {/* Topbar */}
        <Topbar />

        <div className="container-fluid mt-4">
          <Routes>
            {/* MAIN */}
            <Route path="/" element={<Dashboard />} />

            {/* BLOGS */}
            <Route path="/all-blogs" element={<BlogList />} />
            <Route path="/add-blogs" element={<BlogForm />} />
            <Route path="/manage-blogs" element={<BlogTable />} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />
            <Route path="/view-blog/:id" element={<ViewBlog />} />

            {/* CONNECT */}
            <Route path="/connect-form" element={<ConnectForm />} />
            <Route path="/contact-form" element={<ContactForm />} />

            {/* CHAT */}
            <Route path="/chat" element={<AdminChatPage />} />

            {/* TEAMS */}
            <Route path="/add-team" element={<AddTeam />} />
            <Route path="/edit-team/:id" element={<EditTeam />} />
            <Route path="/view-team" element={<ViewTeams />} />

            {/* DESIGNS */}

            <Route path="/add-design" element={<AddDesign />} />
            <Route path="/manage-design" element={<ManageDesigns />} />
            <Route path="/edit-design/:id" element={<EditDesign />} />

            {/* DEVELOPMENT */}

            <Route path="/add-development" element={<AddDevelopment />} />
            <Route path="/manage-development" element={<ManageDevelopments />} />
            <Route path="/edit-development/:id" element={<EditDevelopment />} />

            {/* 404 */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
