import React, { useEffect, useState } from "react";
import { getUsersByStatusAPI } from "../Api/api";
import { FaTimesCircle } from "react-icons/fa";

const RejectedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const res = await getUsersByStatusAPI("rejected");
      setUsers(res.data || []);
    } catch (err) {
      console.error("Failed to load rejected users", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return <p>Loading rejected users...</p>;
  }

  return (
    <div className="pending-wrapper">
      <h3 className="mb-4 fw-bold">Rejected Users</h3>

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
                  No rejected users
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
                    <span className="badge bg-danger px-3 py-2">
                      <FaTimesCircle className="me-1" />
                      Rejected
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

export default RejectedUsers;
