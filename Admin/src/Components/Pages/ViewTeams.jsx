import React, { useEffect, useState, useContext } from "react";
import { getAllTeams, deleteTeam, updateTeam } from "../Api/api";
import { FiTrash2, FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SearchContext } from "../../searchContext"; // 👉 ADD THIS
import "./Teams.css";

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);

  // 🔥 GLOBAL SEARCH TEXT
  const { query } = useContext(SearchContext);

  const loadTeams = async () => {
    const res = await getAllTeams();

    const dataWithDefault = res.data.map((t) => ({
      ...t,
      isHidden: t.isHidden ?? false,
      showFull: false,
    }));

    setTeams(dataWithDefault);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    await deleteTeam(id);
    setTeams((prev) => prev.filter((t) => t._id !== id));
  };

  const toggleVisibility = async (team) => {
    const updated = { ...team, isHidden: !team.isHidden };

    try {
      await updateTeam(team._id, updated);
      setTeams((prev) =>
        prev.map((t) => (t._id === team._id ? updated : t))
      );
    } catch (err) {
      console.error("Failed to update visibility:", err);
    }
  };

  const toggleShowMore = (id) => {
    setTeams((prev) =>
      prev.map((t) =>
        t._id === id ? { ...t, showFull: !t.showFull } : t
      )
    );
  };

  const getShortDesc = (text) => {
    const words = text.split(" ");
    if (words.length <= 10) return text;
    return words.slice(0, 10).join(" ") + "...";
  };

  useEffect(() => {
    loadTeams();
  }, []);

  // 🔥 FILTER BASED ON GLOBAL SEARCH
  const filtered = teams.filter((t) => {
    const q = query.toLowerCase();

    return (
      t.name.toLowerCase().includes(q) ||
      t.position.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container py-3">
      <h2 className="text-center mb-4 fw-bold">Our Team</h2>

      <div className="row g-4">

        {filtered.length === 0 && (
          <p className="text-center text-danger">No team members found</p>
        )}

        {filtered.map((t) => (
          <div className="col-md-4 col-lg-3" key={t._id}>
            <div className={`team-card shadow ${t.isHidden ? "opacity-50" : ""}`}>
              
              <div className="team-img">
                <img src={t.image} alt={t.name} />
              </div>

              <div className="team-content">
                <h5 className="team-name">{t.name}</h5>
                <p className="team-position">{t.position}</p>

                <p className="team-desc">
                  {t.showFull ? t.description : getShortDesc(t.description)}
                </p>

                {t.description.split(" ").length > 20 && (
                  <button
                    className="btn btn-link p-0"
                    onClick={() => toggleShowMore(t._id)}
                  >
                    {t.showFull ? "Show Less" : "Show More"}
                  </button>
                )}

                <div className="d-flex justify-content-center gap-2 mt-3">

                  <Link
                    to={`/edit-team/${t._id}`}
                    className="btn btn-sm btn-success"
                  >
                    <FiEdit />
                  </Link>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(t._id)}
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ViewTeams;
