import React from "react";
import { useForm } from "react-hook-form";
import { createTeam } from "../Api/api";
import "./AddTeam.css";

const AddTeam = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createTeam(data);
      alert("Team member added!");
      reset();
    } catch (err) {
      console.log(err);
      alert("Error creating team");
    }
  };

  return (
    <div className="container mt-4">
      <div className="blog-form-wrapper">
        <h2 className="form-title">Add Team Member</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="blog-form">

          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-control styled-input"
              {...register("name", { required: true })}
              placeholder="Enter full name"
            />
            {errors.name && <span className="error">Name is required</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Position</label>
            <input
              className="form-control styled-input"
              {...register("position", { required: true })}
              placeholder="Job role"
            />
            {errors.position && (
              <span className="error">Position is required</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-control styled-input"
              rows={4}
              {...register("description")}
              placeholder="Short description"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              className="form-control styled-input"
              {...register("image")}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <button type="submit" className="submit-button mt-3">
            Add Team Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeam;
