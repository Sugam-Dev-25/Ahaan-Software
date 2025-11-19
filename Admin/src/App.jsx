import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "apexcharts/dist/apexcharts.css";
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


// import UIUX from "./Components/Pages/Portfolio/UIUX";
// import WebDevelopment from "./Components/Pages/Portfolio/WebDevelopment";

// import AddTeams from "./Components/Pages/Teams/AddTeams";
// import ViewTeams from "./Components/Pages/Teams/ViewTeams";
// import ManageTeams from "./Components/Pages/Teams/ManageTeams";


function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div className="flex-grow-1" style={{ minHeight: "100vh", background: "#f8f9fc" }}>
          
          {/* Topbar */}
          <Topbar />

          {/* Routed Pages */}
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

              {/* PORTFOLIO */}
              {/* <Route path="/portfolio/uiux" element={<UIUX />} />
              <Route path="/portfolio/web-development" element={<WebDevelopment />} /> */}

              {/* TEAMS */}
              {/* <Route path="/teams/add" element={<AddTeams />} />
              <Route path="/teams/view" element={<ViewTeams />} />
              <Route path="/teams/manage" element={<ManageTeams />} /> */}

              {/* 404 NOT FOUND */}
              <Route path="*" element={<h2>404 - Page Not Found</h2>} />

            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


