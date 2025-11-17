import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBars,
  FaBlog,
  FaLayerGroup,
  FaUsers,
  FaEnvelope,
  FaPalette,
  FaCode
} from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { RiBloggerLine } from "react-icons/ri";
import { TiDocumentAdd } from "react-icons/ti";
import { MdManageSearch } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="d-md-none bg-dark text-white p-2" style={{backgroundColor:"#000"}}>
        <button
          className="btn btn-outline-light"
          onClick={() => setOpen(!open)}
        >
          <FaBars size={20} />
        </button>
      </div>

      <div
        className={` text-white d-flex flex-column sidebar-transition ${
          open ? "d-block" : "d-none"
        } d-md-flex`}
        style={{
          width: "100%",
          maxWidth: "240px",
          minHeight: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          backgroundColor:"#161616ff"
        }}
      >
        {/* Logo */}
        <div className="p-3 text-left">
          <img
            src="https://ahaanmedia.com/asc/layouts/asc.png"
            alt="ASC Logo"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
        </div>

        {/* Sidebar Menu */}
        <ul className="nav flex-column mt-2 px-2">

          {/* Dashboard */}
          <li className="nav-item mb-1">
            <a className="nav-link text-white" href="#">
              <RxDashboard className="me-2" /> Dashboard
            </a>
          </li>

          <hr className="bg-light" />

          {/* Blog */}
          <div className="text-uppercase small mt-2 px-2" style={ {color:"#ffbe31ff", textTransform:"uppercase", fontWeight:"700", letterSpacing:"2px"}}>Blog</div>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <RiBloggerLine className="me-2" /> All Blogs
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <TiDocumentAdd className="me-2" /> Add Blogs
            </a>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link text-white" href="#">
              <MdManageSearch className="me-2" /> Manage Blogs
            </a>
          </li>

          <hr className="bg-light" />

          {/* Connect */}
          <div className="text-uppercase small mt-2 px-2" style={ {color:"#ffbe31ff", textTransform:"uppercase", fontWeight:"700", letterSpacing:"2px"}}>Connect</div>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <FaEnvelope className="me-2" /> Connect Form
            </a>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link text-white" href="#">
              <FaEnvelope className="me-2" /> Contact Us Form
            </a>
          </li>

          <hr className="bg-light" />

          {/* Portfolio */}
          <div className="text-uppercase small mt-2 px-2" style={ {color:"#ffbe31ff", textTransform:"uppercase", fontWeight:"700", letterSpacing:"2px"}}>Portfolio</div>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <FaPalette className="me-2" /> UI/UX
            </a>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link text-white" href="#">
              <FaCode className="me-2" /> Web Development
            </a>
          </li>

          <hr className="bg-light" />

          {/* Teams */}
          <div className="text-uppercase small mt-2 px-2" style={ {color:"#ffbe31ff", textTransform:"uppercase", fontWeight:"700", letterSpacing:"2px"}}>Teams</div>

          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <FaUsers className="me-2" /> Add Teams
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <FaUsers className="me-2" /> All Teams
            </a>
          </li>

          <li className="nav-item mb-1">
            <a className="nav-link text-white" href="#">
              <FaUsers className="me-2" /> Manage Teams
            </a>
          </li>
        </ul>
      </div>

      {/* Spacer for Desktop */}
      <div className="d-none d-md-block" style={{ width: "240px" }}></div>
    </>
  );
};

export default Sidebar;
