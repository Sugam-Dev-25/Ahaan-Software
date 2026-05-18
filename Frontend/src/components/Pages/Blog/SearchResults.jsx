import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { TfiSharethis } from "react-icons/tfi";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import BlogBanner from "./BlogBanner";
import "./BlogPage.css";
import BlogSearchBanner from "./BlogSearchBanner";

const reactions = [
  { emoji: "👍", label: "thumbs up" },
  { emoji: "❤️", label: "love" },
];

const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const trimToWords = (htmlContent, wordLimit = 20) => {
  const text = stripHtml(htmlContent);
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const formatDateTime = (isoString) => {
  try {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return "Invalid Date";
  }
};

const createSlug = (title) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

const SearchResults = () => {
  const [blogs, setBlogs] = useState([]);
  const [reactionCounts, setReactionCounts] = useState({});
  const [selectedReactions, setSelectedReactions] = useState({});
  const [activeShare, setActiveShare] = useState(null); // Track which share menu is open
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://ahaansoftware.com/blog-db.json");
      const filtered = res.data.filter((b) =>
        b.title.toLowerCase().includes(query.toLowerCase())
      );

      const counts = {};
      const local = {};
      filtered.forEach((blog) => {
        counts[blog.id] = {
          "thumbs up": blog.reactions?.["thumbs up"] || 0,
          love: blog.reactions?.["love"] || 0,
        };
        const localReaction = localStorage.getItem(`reacted_${blog.id}`);
        if (localReaction) local[blog.id] = localReaction;
      });

      setBlogs(filtered);
      setReactionCounts(counts);
      setSelectedReactions(local);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    if (query) fetchBlogs();
  }, [query]);

  const handleReaction = async (blogId, newReaction) => {
    const prevReaction = selectedReactions[blogId];
    if (prevReaction === newReaction) return;

    localStorage.setItem(`reacted_${blogId}`, newReaction);
    setSelectedReactions((prev) => ({ ...prev, [blogId]: newReaction }));

    setReactionCounts((prev) => {
      const updated = { ...prev };
      if (!updated[blogId]) updated[blogId] = { "thumbs up": 0, love: 0 };
      if (prevReaction && updated[blogId][prevReaction] > 0)
        updated[blogId][prevReaction] -= 1;
      updated[blogId][newReaction] = (updated[blogId][newReaction] || 0) + 1;
      return updated;
    });

    try {
      const formData = new URLSearchParams();
      formData.append("id", blogId);
      formData.append("reaction", newReaction);
      formData.append("prevReaction", prevReaction || "");

      await fetch("https://ahaansoftware.com/update-json.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });
    } catch (err) {
      console.error("Failed to update reaction:", err);
    }
  };

  return (
    <>
      <BlogSearchBanner />
      <div className="container mt-5">
        <h2 className="blog-heading text-center">
          Search Results for "{query}"
        </h2>
        <div className="row p-3">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              const slug = createSlug(blog.title);
              const blogUrl = `${window.location.origin}/blog/${slug}`;
              const summary = stripHtml(blog.content).slice(0, 150);
              const blogReactions = reactionCounts[blog.id] || {};

              return (
                <div key={blog.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div
                    className="card blog-card shadow-sm h-100"
                    onClick={() => window.open(`/blog/${slug}`, "_blank")}
                    style={{ cursor: "pointer" }}
                  >
                    {blog.image && (
                      <img
                        src={
                          blog.image.startsWith("http")
                            ? blog.image
                            : `https://ahaansoftware.com/${blog.image}`
                        }
                        className="card-img-top blog-image"
                        alt={blog.title}
                      />
                    )}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title blog-page-title">
                        {blog.title}
                      </h5>
                      <p className="card-text blog-content flex-grow-1">
                        {trimToWords(blog.content)}
                      </p>

                      <div className="blog-author-section d-flex align-items-center mb-2">
                        {blog.author_image && (
                          <img
                            src={blog.author_image}
                            alt={blog.author}
                            className="author-inline-img rounded-circle me-2"
                            style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                          />
                        )}
                        <div>
                          <p className="blog-author mb-0 fw-bold">
                            By {blog.author || "Unknown"}
                          </p>
                          <p className="blog-date mb-2 text-muted small">
                            {formatDateTime(blog.created_at)}
                          </p>
                        </div>
                      </div>

                      {/* Reactions */} 
                      <div
                        className="reaction-container mb-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {reactions.map(({ emoji, label }) => (
                          <button
                            key={label}
                            className={`reaction-btn ${
                              selectedReactions[blog.id] === label
                                ? "btn-warning"
                                : "btn-outline-secondary"
                            }`}
                            onClick={() => handleReaction(blog.id, label)}
                          >
                            {emoji} {blogReactions[label] || 0}
                          </button>
                        ))}
                      </div>

                      {/* Actions */}
                      <div
                        className="blog-actions d-flex justify-content-between align-items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className="btn btn-dark btn-sm read-more-btn"
                          onClick={() => window.open(`/blog/${slug}`, "_blank")}
                        >
                          Read More
                        </button>

                        <div className="dropdown position-relative">
                          <button
                            className="btn btn-outline-dark btn-sm border-0 share-btn-icon-only no-caret"
                            type="button"
                            onClick={() => setActiveShare(activeShare === blog.id ? null : blog.id)}
                          >
                            <TfiSharethis />
                          </button>

                          {activeShare === blog.id && (
                            <div className="dropdown-menu show shadow p-2 animated-share-dropdown" style={{ right: 0, left: 'auto' }}>
                              <div className="d-flex gap-2 share-icons-container">
                                <button
                                  className="btn btn-sm btn-outline-primary rounded-circle share-icon-btn facebook"
                                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`, "_blank")}
                                >
                                  <FaFacebookF />
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-info rounded-circle share-icon-btn linkedin"
                                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, "_blank")}
                                >
                                  <FaLinkedinIn />
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-success rounded-circle share-icon-btn whatsapp"
                                  onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`🔗 Read: ${blogUrl}`)}`, "_blank")}
                                >
                                  <FaWhatsapp />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center w-100 mt-5">No blogs found 😢</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;