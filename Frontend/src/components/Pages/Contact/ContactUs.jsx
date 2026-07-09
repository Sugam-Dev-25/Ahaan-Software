import React from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaBehance, FaGithub } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
import ContactBanner from "./ContactBanner";
import WorldMap from "./WorldMap";
import { createContact } from "../../../Api/api";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createContact(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ContactBanner />

      <div className="contact-modern-section">
        <div className="contact-modern-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-modern-left">
            <p className="modern-label">GET IN TOUCH</p>

            <h2 className="modern-heading">
              Seamless Communication, Global Impact.
            </h2>

            <div className="modern-contact-item">
              <div className="modern-icon-circle">
                <FaHome />
              </div>
              <div>
                <strong>Email</strong>
                <p>
                  <a
                    href="mailto:support@ahaansoftware.com"
                    className="modern-email-link"
                  >
                    support@ahaansoftware.com
                  </a>
                </p>
              </div>
            </div>

            <div className="modern-contact-item">
              <div className="modern-icon-circle">
                <FaPhoneVolume />
              </div>
              <div>
                <strong>Phone</strong>
                <p>
                  <a
                    href="tel:+1-646-575-9575"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +1-646-575-9575
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/919830371143"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 98303 71143
                  </a>
                </p>
              </div>
            </div>

            <div className="modern-contact-item">
              <div className="modern-icon-circle">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong>Address</strong>
                <p>
                  <a
                    href="https://www.google.com/maps/dir//Ahaan+Software+Consulting,+Bengal+Eco+Intelligent+Park,+EM+Block,+Sector+V,+Bidhannagar,+Kolkata,+West+Bengal+700091/@22.577152,88.4309163,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a0275d239b8d5d3:0x3fca68895852d152!2m2!1d88.4274345!2d22.5752084?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-address-link"
                  >
                    Bengal Eco Intelligent Park, Sector V, Bidhannagar, Kolkata
                  </a>
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="modern-social">
              <a
                href="https://www.linkedin.com/company/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/ahaansoftware"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/AhaanSoftwareConsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.behance.net/ahaansoftware01"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon behance"
              >
                <FaBehance />
              </a>
              <a
                href="https://dribbble.com/ahaan-software"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-icon dribbble"
              >
                <FiDribbble  />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-modern-right">
            <h3 className="modern-form-title">Send us a message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="modern-form">
              <div className="modern-row">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />

                  {errors.name && (
                    <p className="error">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email ID"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />

                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="modern-row">
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Phone no."
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(
                        /[^0-9+\s()-]/g,
                        "",
                      );
                    }}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[+]?[\d\s()-]+$/,
                        message: "Enter a valid phone number",
                      },
                      minLength: {
                        value: 7,
                        message: "Phone number is too short",
                      },
                      maxLength: {
                        value: 15,
                        message: "Phone number is too long",
                      },
                    })}
                  />

                  {errors.phone && (
                    <p className="error">{errors.phone.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Website"
                    {...register("website", {
                      required: "Website is required",
                    })}
                  />

                  {errors.website && (
                    <p className="error">{errors.website.message}</p>
                  )}
                </div>
              </div>

              <div className="form-group">
                <textarea
                  rows="5"
                  placeholder="Message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />

                {errors.message && (
                  <p className="error">{errors.message.message}</p>
                )}
              </div>

              <button type="submit" className="modern-submit-btn">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
      <WorldMap />
    </>
  );
};

export default ContactUs;
