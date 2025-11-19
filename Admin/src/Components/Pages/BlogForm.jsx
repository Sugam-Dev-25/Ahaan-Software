import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogForm.css";

const BlogForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("id", Date.now());
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("content", content);
    formData.append("image", data.image[0]);

    try {
      const res = await fetch("https://ahaansoftware.com/update-json.php", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.status === "success") {
        toast.success("✅ Blog submitted successfully!");
        reset();
        setContent("");
        setImagePreview(null);
      } else {
        toast.error("❌ Submission failed: " + result.message);
      }
    } catch {
      toast.error("❌ Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="blog-form-wrapper">
        <h2 className="form-title">	Add Blog </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="blog-form">
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              className="form-control styled-input"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Author</label>
            <input
              className="form-control styled-input"
              {...register("author", { required: true })}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Upload Image</label>
            <input
              className="form-control styled-input"
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={(e) =>
                setImagePreview(URL.createObjectURL(e.target.files[0]))
              }
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="img-thumbnail mt-2"
                style={{ maxHeight: "150px" }}
              />
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Content</label>
            <Editor
              apiKey="am0ed4z2fbqy58z28jljxlbija11pzhb7v312hypbfhvcy2b" // your API key
              value={content}
              onEditorChange={(newContent) => setContent(newContent)}
              init={{
                height: 300,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image table | code",
              }}
            />
          </div>
          <button
            type="submit"
            className="submit-button mt-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
