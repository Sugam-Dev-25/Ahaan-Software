import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi"; // Added Eye icon
import "./BlogTable.css";

const BlogTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("https://ahaansoftware.com/blog-db.json");
      setBlogs(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-blog/${id}`);
  };

  const handleDeleteConfirm = (id) => {
    setSelectedBlogId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      const formData = new FormData();
      formData.append("id", selectedBlogId);

      const res = await axios.post(
        "https://ahaansoftware.com/delete-blog.php",
        formData
      );

      if (res.data.status === "success") {
        setBlogs((prev) => prev.filter((blog) => blog.id !== selectedBlogId));
        alert("✅ Blog deleted successfully!");
      } else {
        alert("❌ Failed to delete blog: " + res.data.message);
      }

      setShowModal(false);
    } catch (err) {
      console.error("❌ Delete failed:", err);
      alert("❌ Server error. Could not delete blog.");
    }
  };

  return (
    <div className="container mt-1 mb-1">
      <div className="table-container">

        <Table
          striped
          hover
          responsive
          className="table align-middle text-center"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date & Time</th>
              <th>👍</th>
              <th>❤️</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={
                      blog.image?.startsWith("http")
                        ? blog.image
                        : `https://ahaansoftware.com/${blog.image}`
                    }
                    alt={blog.title}
                    className="blog-thumb"
                  />
                </td>
                <td>{blog.title}</td>
                <td>
                  <span className="badge-author">
                    {blog.author || "Unknown"}
                  </span>
                </td>
                <td className="timestamp">
                  {new Date(blog.created_at).toLocaleString()}
                </td>
                <td>{blog.reactions?.["thumbs up"] || 0}</td>
                <td>{blog.reactions?.love || 0}</td>
                <td className="action-buttons d-flex gap-2 justify-content-center">
                  <Button
                    variant="warning"
                    className="icon-btn"
                    onClick={() => handleView(blog.id)}
                  >
                    <FiEye />
                  </Button>
                  <Button
                    variant="success"
                    className="icon-btn"
                    onClick={() => handleEdit(blog.id)}
                  >
                    <FiEdit />
                  </Button>
                  <Button
                    variant="danger"
                    className="icon-btn"
                    onClick={() => handleDeleteConfirm(blog.id)}
                  >
                    <FiTrash2 />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Confirm Delete Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This action will permanently remove the selected blog post from your
            site. Once deleted, it cannot be recovered.
          </p>
          <p className="text mb-0 ">
            Are you absolutely sure you want to proceed?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete Permanently
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BlogTable;
