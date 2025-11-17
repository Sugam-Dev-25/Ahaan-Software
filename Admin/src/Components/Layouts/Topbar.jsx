import React from "react";
import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 bg-white shadow-sm">

      {/* Search */}
      <div className="d-flex align-items-center"
           style={{ width: "300px", border: "1px solid #ddd", borderRadius: "5px" }}>
        <input
          className="form-control border-0"
          placeholder="Search for..."
          style={{ boxShadow: "none" }}
        />
        <button className="btn btn-primary">
          <FaSearch />
        </button>
      </div>

      {/* Right Icons */}
      <div className="d-flex align-items-center gap-3">
        
        <div className="position-relative">
          <FaBell size={20} />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            3
          </span>
        </div>

        <div className="position-relative">
          <FaEnvelope size={20} />
          <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle">
            7
          </span>
        </div>

        <div className="d-flex align-items-center">
          <span className="me-2 fw-bold">Douglas McGee</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="rounded-circle"
            width="40"
          />
        </div>
      </div>
    </div>
  );
}
