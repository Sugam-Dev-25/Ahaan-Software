import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogSearch.css";

const BlogSearch = () => {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const navigate = useNavigate();

  const formatSlug = (title) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://ahaansoftware.com/blog-db.json");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredBlogs([]);
      return;
    }

    const results = blogs.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(results.slice(0, 6));
  }, [query, blogs]);

  const handleSelect = (title) => {
    const slug = formatSlug(title);
    navigate(`/blog/${slug}`);
    setQuery("");
    setFilteredBlogs([]);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      setFilteredBlogs([]);
    }
  };

  return (
    <div className="blog-search-container">
      <h3 className="sidebar-heading mb-3">Search Blog</h3>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search by Title..."
          className=" search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {filteredBlogs.length > 0 && (
        <ul className="search-suggestions">
          {filteredBlogs.map((blog) => (
            <li
              key={blog.id}
              onClick={() => handleSelect(blog.title)}
              className="suggestion-item"
            >
              <img
                src={
                  blog.image?.startsWith("http")
                    ? blog.image
                    : `https://ahaansoftware.com/${blog.image}`
                }
                alt={blog.title}
                className="suggestion-thumb"
              />
              <span>{blog.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogSearch;
