import React from "react";
import { useForm } from "react-hook-form";
import "./ConnectSection.css";
import { createForm } from "../../../Api/api"; 

const ConnectSection = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await createForm(data);

      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      alert("Form submit failed! Check console.");
      console.error("❌ Error submitting form:", error);
    }
  };

  return (
    <section className="connect-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-5 connect-left text-white mb-4 mb-md-0 section-header-tech">
            <h6 className="subtitle" style={{ color: "#ffffffff" }}>
              Planning your next big project?
            </h6>
            <h1 className="whychooseus-label text-start">
              Let’s Connect and Collaborate!
            </h1>
            <div className="connect-illustration mt-4"></div>
          </div>

          {/* Right Side (Form) */}
          <div className="col-md-7">
            <form onSubmit={handleSubmit(onSubmit)} className="connect-form">

              <div className="row">
                {/* Name */}
                <div className="col-md-6">
                  <div className="mb-3 connect-input-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`form-control connect-input ${errors.name ? 'is-invalid' : ''}`}
                      {...register("name", { required: true })}
                    />
                    {errors.name && <div className="invalid-feedback">Name is required</div>}
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="mb-3 connect-input-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`form-control connect-input ${errors.email ? 'is-invalid' : ''}`}
                      {...register("email", { required: true })}
                    />
                    {errors.email && <div className="invalid-feedback">Email is required</div>}
                  </div>
                </div>
              </div>

              <div className="row">
                {/* Service */}
                <div className="col-md-6">
                  <div className="mb-3 connect-input-group">
                    <select
                      className={`form-select connect-select ${errors.service ? 'is-invalid' : ''}`}
                      {...register("service", { required: true })}
                    >
                      <option value="">Select Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-Commerce Development">E-Commerce Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                    {errors.service && <div className="invalid-feedback">Select a service</div>}
                  </div>
                </div>

                {/* Budget */}
                <div className="col-md-6">
                  <div className="mb-3 connect-input-group">
                    <select
                      className={`form-select connect-select ${errors.budget ? 'is-invalid' : ''}`}
                      {...register("budget", { required: true })}
                    >
                      <option value="">Select Budget</option>
                      <option value="Below $1000">Below $1000</option>
                      <option value="$1000 - $5000">$1000 - $5000</option>
                      <option value="Above $5000">Above $5000</option>
                    </select>
                    {errors.budget && <div className="invalid-feedback">Select a budget</div>}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-3 connect-input-group">
                <textarea
                  rows={3}
                  placeholder="Tell us about your project"
                  className={`form-control connect-input ${errors.projectDetails ? 'is-invalid' : ''}`}
                  {...register("projectDetails", { required: true })}
                ></textarea>
                {errors.projectDetails && <div className="invalid-feedback">This field is required</div>}
              </div>

              {/* Submit Button */}
              <div className="mt-4 text-start">
                <button type="submit" className="btn btn-warning newsletter-button px-4 py-2">
                  <span>Request Now</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConnectSection;