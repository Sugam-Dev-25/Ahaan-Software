import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RelatedBlogs.css";

const formatSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

const RelatedBlogs = ({ currentSlug }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://ahaansoftware.com/blog-db.json");
        const blogs = await res.json();

        const sorted = blogs
          .filter((b) => formatSlug(b.title) !== currentSlug)
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        setRelatedBlogs(sorted.slice(0, 70));
      } catch (err) {
        console.error("Error loading related blogs:", err);
      }
    };
    fetchBlogs();
  }, [currentSlug]);

  if (relatedBlogs.length === 0) return null;

  return (
    <div className="related-sidebar">
      <h3 className="sidebar-heading mb-4">Recent Posts</h3>

      <div className="related-scroll-container">
        {relatedBlogs.map((blog) => {
          const slug = formatSlug(blog.title);
          const blogUrl = `/blog/${slug}`;
          const image = blog.image?.startsWith("http")
            ? blog.image
            : `https://ahaansoftware.com/${blog.image}`;

          const createdAt = new Date(blog.created_at);
          const formattedDate = createdAt.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
          const formattedTime = createdAt.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <Link
              key={blog.id}
              to={blogUrl}
              className="recent-post-item text-decoration-none"
            >
              <div className="d-flex align-items-center gap-4 mb-4">
                <img src={image} alt={blog.title} className="recent-post-img" />
                <div>
                  <h6 className="recent-post-title">{blog.title}</h6>
                  <div className="recent-post-meta d-flex align-items-center gap-3">
                    <span className="d-flex align-items-center gap-2">
                      <FaCalendarAlt className="meta-icon" />
                      {formattedDate}
                    </span>
                    <span className="d-flex align-items-center gap-2">
                      <FaClock className="meta-icon" />
                      {formattedTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedBlogs;
