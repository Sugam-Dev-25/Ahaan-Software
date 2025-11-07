import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ConnectSection.css";
import { color } from "framer-motion";

const ConnectSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <section className="connect-section py-5 ">
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col
            md={5}
            className="connect-left text-white mb-4 mb-md-0 section-header-tech"
          >
            <h6 className="subtitle" style={{ color: "#ffffffff" }}>
              Planning your next big project? <span className="divider"></span>
            </h6>
            <h1 className="whychooseus-label" style={{ textAlign: "left" }}>
              Let’s Connect and Collaborate!
            </h1>
            <div className="connect-illustration mt-4"></div>
          </Col>

          {/* Right Side */}
          <Col md={7}>
            <Form onSubmit={handleSubmit(onSubmit)} className="connect-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      className="connect-input"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="error-text">Name is required</span>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      className="connect-input"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="error-text">Email is required</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Select
                      className="connect-select"
                      {...register("service", { required: true })}
                    >
                      <option value="">Select Service</option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="ecommerce">E-Commerce Development</option>
                      <option value="digital">Digital Marketing</option>
                    </Form.Select>
                    {errors.service && (
                      <span className="error-text">Select a service</span>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="connect-input-group">
                    <Form.Select
                      className="connect-select"
                      {...register("budget", { required: true })}
                    >
                      <option value="">Select Budget</option>
                      <option value="below1k">Below $1000</option>
                      <option value="1k-5k">$1000 - $5000</option>
                      <option value="above5k">Above $5000</option>
                    </Form.Select>
                    {errors.budget && (
                      <span className="error-text">Select a budget</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="connect-input-group">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tell us about your project"
                  className="connect-input"
                  {...register("requirement", { required: true })}
                />
                {errors.requirement && (
                  <span className="error-text">This field is required</span>
                )}
              </Form.Group>

              <div className="mt-4 text-start">
                {" "}
                {/* Align to the left using text-start */}
                <button
                  type="submit"
                  className="btn btn-warning newsletter-button px-4 py-2" // Using Bootstrap's btn class
                  style={{ width: "auto" }} // This ensures the button only takes the width of its content
                >
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
