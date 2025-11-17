import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaUser, FaCalendarAlt, FaClock, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { TfiSharethis } from "react-icons/tfi";
import "./BlogDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogBanner from "./BlogBanner";
import RelatedBlogs from "./RelatedBlogs";
import FollowUs from "./FollowUs";
import BlogSearch from "./BlogSearch";

const reactions = [
  { emoji: "👍", label: "thumbs up" },
  { emoji: "❤️", label: "love" },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedReactions, setSelectedReactions] = useState({});
  const [reactionCounts, setReactionCounts] = useState({});

  const formatSlug = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // ✅ Fetch blog and setup reactions
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch("https://ahaansoftware.com/blog-db.json");
        const blogs = await res.json();
        const matchedBlog = blogs.find((b) => formatSlug(b.title) === slug);
        setBlog(matchedBlog);

        if (matchedBlog) {
          const localReaction = localStorage.getItem(`reacted_${matchedBlog.id}`);
          setSelectedReactions({ [matchedBlog.id]: localReaction });

          setReactionCounts({
            [matchedBlog.id]: {
              "thumbs up": matchedBlog.reactions?.["thumbs up"] || 0,
              love: matchedBlog.reactions?.["love"] || 0,
            },
          });
        }
      } catch (err) {
        console.error("Error loading blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleReaction = async (blogId, newReaction) => {
    const prevReaction = selectedReactions[blogId];

    if (prevReaction === newReaction) return;

    localStorage.setItem(`reacted_${blogId}`, newReaction);
    setSelectedReactions((prev) => ({ ...prev, [blogId]: newReaction }));

    setReactionCounts((prev) => {
      const updated = { ...prev };
      if (!updated[blogId]) {
        updated[blogId] = { "thumbs up": 0, love: 0 };
      }
      if (prevReaction && updated[blogId][prevReaction] > 0) {
        updated[blogId][prevReaction] -= 1;
      }
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

  if (loading) return <div className="text-center mt-5">Loading blog details...</div>;
  if (!blog) return <div className="text-center mt-5 text-danger">Blog not found.</div>;

  const formattedDate = blog.created_at
    ? new Date(blog.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Not Available";

  const formattedTime =
    blog.created_at &&
    new Date(blog.created_at).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

  const metaImage = blog.image?.startsWith("http")
    ? blog.image
    : `https://ahaansoftware.com/${blog.image}`;
  const pageUrl = `${window.location.origin}/blog/${slug}`;

  const blogReactions = reactionCounts[blog.id] || {};

  return (
    <>
      <BlogBanner />

      <div className="container py-5 blog-details-container">
        <Helmet>
          <title>{blog.title}</title>
          <meta name="description" content={stripHtml(blog.content).slice(0, 150)} />
          <meta property="og:title" content={blog.title} />
          <meta property="og:description" content={stripHtml(blog.content).slice(0, 150)} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <div className="row g-4">
          <div className="col-lg-8">
            {/* Author + Date + Time */}
            <div className="blog-meta-top d-flex justify-content-between align-items-center mb-3 flex-wrap">
              <div className="d-flex align-items-center gap-2">
                {blog.author_image && (
                  <img
                    src={blog.author_image}
                    alt={blog.author}
                    className="rounded-circle author-image"
                    style={{ width: "30px", height: "30px", objectFit: "cover" }}
                  />
                )}
                <span className="fw-semibold">{blog.author || "Ahaan Software"}</span>
              </div>

              <div className="d-flex align-items-center gap-3 text-muted">
                <div className="d-flex align-items-center gap-2">
                  <FaCalendarAlt
                    style={{
                      backgroundColor: "#000",
                      color: "#c99400ff",
                      fontSize: "30px",
                      padding: "8px",
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ color: "#000", fontWeight: "600" }}>{formattedDate}</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <FaClock
                    style={{
                      backgroundColor: "#000",
                      color: "#c99400ff",
                      fontSize: "30px",
                      padding: "8px",
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ color: "#000", fontWeight: "600" }}>{formattedTime}</span>
                </div>
              </div>
            </div>

            {/* Blog Title */}
            <h1 className="fw-bold mb-3">{blog.title || "Untitled Blog"}</h1>

            {/* Share + Reaction Row */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
              {/* Share Buttons */}
              <div className="d-flex gap-2 align-items-center">
                <TfiSharethis size={24} color="#000" />
                <button
                  className="share-icon-btn facebook"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
                      "_blank"
                    )
                  }
                >
                  <FaFacebookF />
                </button>
                <button
                  className="share-icon-btn linkedin"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
                      "_blank"
                    )
                  }
                >
                  <FaLinkedinIn />
                </button>
                <button
                  className="share-icon-btn whatsapp"
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?text=${encodeURIComponent(
                        `📌 *${blog.title}*\n👤 By ${blog.author}\n🕒 ${formattedDate}, ${formattedTime}\n\n🔗 Read more: ${pageUrl}`
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <FaWhatsapp />
                </button>
              </div>

              {/* Reactions */}
              <div className="d-flex align-items-center gap-2">
                {reactions.map(({ emoji, label }) => (
                  <button
                    key={label}
                    className={`reaction-btn ${
                      selectedReactions[blog.id] === label ? "active" : ""
                    }`}
                    onClick={() => handleReaction(blog.id, label)}
                  >
                    {emoji} {blogReactions[label] || 0}
                  </button>
                ))}
              </div>
            </div>

            {/* Banner Image */}
            {blog.image && (
              <div className="mb-4">
                <img
                  src={metaImage}
                  alt={blog.title}
                  className="img-fluid rounded shadow-sm w-100 blog-banner-image"
                />
              </div>
            )}

            {/* Blog Content */}
            <div
              className="blog-details-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          <div className="col-lg-4 blog-right-sidebar">
            <BlogSearch />
            <RelatedBlogs currentSlug={slug} />
            <FollowUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
