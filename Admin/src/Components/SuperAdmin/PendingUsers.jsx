import React, { useEffect, useState } from "react";
import { getUsersByStatusAPI, updateUserStatusAPI } from "../Api/api";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PendingUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const res = await getUsersByStatusAPI("pending");
    setUsers(res.data || []);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const updateStatus = async (id, status) => {
    await updateUserStatusAPI(id, status);
    loadUsers();
  };

  return (
    <div className="pending-wrapper">
      <h3 className="mb-4 fw-bold">Pending User Requests</h3>

      <div className="table-responsive">
        <table className="table pending-table align-middle">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>DESIGNATION</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {users.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-4">
                  No pending requests
                </td>
              </tr>
            ) : (
              users.map((u, i) => (
                <tr key={u._id}>
                  <td>{i + 1}</td>

                  {/* ✅ PROFILE IMAGE */}
                  <td>
                    <img
                      src={
                        u.profilePicture ||
                        "https://via.placeholder.com/40"
                      }
                      alt={u.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #ddd",
                      }}
                    />
                  </td>

                  <td className="fw-semibold">{u.name}</td>
                  <td>{u.email}</td>
                  <td className="text-capitalize">{u.designation}</td>

                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => updateStatus(u._id, "approved")}
                      title="Approve"
                    >
                      <FaCheckCircle />
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => updateStatus(u._id, "rejected")}
                      title="Reject"
                    >
                      <FaTimesCircle />
                    </button>
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

export default PendingUsers;
