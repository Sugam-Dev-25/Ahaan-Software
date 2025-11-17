import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./ConnectSection.css";
import { createForm } from "../../../Api/api";   // API IMPORT

const ConnectSection = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ===========================
  // 🔹 Submit Handler
  // ===========================
  const onSubmit = async (data) => {
    try {
      const response = await createForm(data);  // API CALL

      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      alert("Form submit failed! Check console.");
      console.error("❌ Error submitting form:", error);
    }
  };

  return (
    <section className="connect-section py-5 ">
      <Container>
        <Row className="align-items-center">

          {/* Left */}
          <Col md={5} className="connect-left text-white mb-4 mb-md-0 section-header-tech">
            <h6 className="subtitle" style={{ color: "#ffffffff" }}>
              Planning your next big project? <span className="divider"></span>
            </h6>
            <h1 className="whychooseus-label" style={{ textAlign: "left" }}>
              Let’s Connect and Collaborate!
            </h1>
            <div className="connect-illustration mt-4"></div>
          </Col>

          {/* Right (Form) */}
          <Col md={7}>
            <Form onSubmit={handleSubmit(onSubmit)} className="connect-form">

              <Row>
                {/* Name */}
                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="connect-input"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="error-text">Name is required</span>}
                  </Form.Group>
                </Col>

                {/* Email */}
                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      className="connect-input"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span className="error-text">Email is required</span>}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                {/* Service */}
                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Select
                      className="connect-select"
                      {...register("service", { required: true })}
                    >
                      <option value="">Select Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-Commerce Development">E-Commerce Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </Form.Select>
                    {errors.service && <span className="error-text">Select a service</span>}
                  </Form.Group>
                </Col>

                {/* Budget */}
                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Select
                      className="connect-select"
                      {...register("budget", { required: true })}
                    >
                      <option value="">Select Budget</option>
                      <option value="Below $1000">Below $1000</option>
                      <option value="$1000 - $5000">$1000 - $5000</option>
                      <option value="Above $5000">Above $5000</option>
                    </Form.Select>
                    {errors.budget && <span className="error-text">Select a budget</span>}
                  </Form.Group>
                </Col>
              </Row>

              {/* Project Details */}
              <Form.Group className="connect-input-group">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tell us about your project"
                  className="connect-input"
                  {...register("projectDetails", { required: true })}
                />
                {errors.projectDetails && <span className="error-text">This field is required</span>}
              </Form.Group>

              {/* Submit Button */}
              <div className="mt-4 text-start">
                <button type="submit" className="btn btn-warning newsletter-button px-4 py-2">
                  <span>Request Now</span>
                </button>
              </div>

            </Form>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ConnectSection;
