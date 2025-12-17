import React, { useEffect, useState } from "react";
import { getUsersByStatusAPI } from "../Api/api";
import { FaCheckCircle } from "react-icons/fa";

const ApprovedUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await getUsersByStatusAPI("approved");
    setUsers(res.data || []);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="pending-wrapper">
      <h3 className="mb-4 fw-bold">Approved Users</h3>

      <div className="table-responsive">
        <table className="table pending-table">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>PROFILE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>DESIGNATION</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {users.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-4">
                  No approved users
                </td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>

                  {/* PROFILE IMAGE */}
                  <td>
                    <img
                      src={u.profilePicture || "/default-user.png"}
                      alt={u.name}
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #ddd",
                      }}
                    />
                  </td>

                  <td className="fw-semibold">{u.name}</td>
                  <td>{u.email}</td>
                  <td className="text-capitalize">{u.designation}</td>

                  {/* STATUS */}
                  <td>
                    <span className="badge bg-success px-3 py-2">
                      <FaCheckCircle className="me-1" />
                      Approved
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedUsers;
