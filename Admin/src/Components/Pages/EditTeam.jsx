// src/pages/admin/teams/EditTeam.jsx

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getSingleTeam, updateTeam } from "../Api/api";
import "./AddTeam.css"; // same design as AddTeam

const EditTeam = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // ==============================
  // Load Single Team
  // ==============================
  const loadTeam = async () => {
    try {
      const res = await getSingleTeam(id);
      const team = res.data.data;

      if (team) {
        setValue("name", team.name);
        setValue("position", team.position);
        setValue("description", team.description);
        setValue("image", team.image);
      }
    } catch (err) {
      console.error("❌ Failed to load team:", err);
    }
  };

  // ==============================
  // Submit Updated Data
  // ==============================
  const onSubmit = async (data) => {
    try {
      await updateTeam(id, data);
      alert("Team Updated Successfully!");
    } catch (err) {
      console.error("❌ Update error:", err);
      alert("Failed to update team");
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

  return (
    <div className="container mt-4">
      <div className="blog-form-wrapper">
        <h2 className="form-title">Edit Team Member</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="blog-form">

          {/* Name */}
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-control styled-input"
              {...register("name", { required: true })}
              placeholder="Enter full name"
            />
            {errors.name && <span className="error">Name is required</span>}
          </div>

          {/* Position */}
          <div className="form-group">
            <label className="form-label">Position</label>
            <input
              className="form-control styled-input"
              {...register("position", { required: true })}
              placeholder="Enter position"
            />
            {errors.position && (
              <span className="error">Position is required</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-control styled-input"
              rows={4}
              {...register("description")}
              placeholder="Write something..."
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              className="form-control styled-input"
              {...register("image")}
              placeholder="https://example.com/team.jpg"
            />
          </div>

          <button type="submit" className="submit-button mt-3">
            Update Team Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTeam;
