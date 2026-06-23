import React from "react";
import "./DesignForm.css";

const DesignForm = ({
  formTitle,
  title,
  setTitle,
  link,
  setLink,
  designer,
  setDesigner,
  category,
  setCategory,
  image,
  setImage,
  onSubmit,
  previewImage,
}) => {
  return (
    <div className="design-form-wrapper">
      <h2 className="form-title">{formTitle}</h2>

      <form onSubmit={onSubmit} className="design-form">
        {/* TITLE */}
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            className="form-control styled-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* LINK */}
        <div className="form-group">
          <label className="form-label">Link</label>
          <input
            className="form-control styled-input"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>

        {/* DESIGNER */}
        <div className="form-group">
          <label className="form-label">Designer Name</label>
          <input
            className="form-control styled-input"
            type="text"
            value={designer}
            onChange={(e) => setDesigner(e.target.value)}
            required
          />
        </div>

        {/* CATEGORY */}
        <div className="form-group">
          <label className="form-label">Category</label>

          <select
            className="form-control styled-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category</option>

            <option value="Electronics">Electronics</option>
            <option value="Education & Books">Education & Books</option>
            <option value="Business & Services">Business & Services</option>
            <option value="Cars & Motorcycles">Cars & Motorcycles</option>
            <option value="Sports, Outdoors & Travel">
              Sports, Outdoors & Travel
            </option>
            <option value="Fashion & Beauty">Fashion & Beauty</option>
            <option value="Defense/Security">Defense/Security</option>
            <option value="IT/Tech">IT/Tech</option>
            <option value="Food & Restaurant">Food & Restaurant</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
            <option value="Society & People">Society & People</option>
            <option value="Medical (Healthcare)">Medical (Healthcare)</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* IMAGE UPLOAD */}
        <div className="form-group">
          <label className="form-label">Upload Image</label>
          <input
            className="form-control styled-input"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          {/* IMAGE PREVIEW */}
          {(image || previewImage) && (
            <div className="preview-wrapper">
              <img
                src={image ? URL.createObjectURL(image) : previewImage}
                alt="Preview"
                className="preview-img"
              />
            </div>
          )}
        </div>

        <button type="submit" className="submit-button">
          {formTitle.includes("Edit") ? "Update Design" : "Save Design"}
        </button>
      </form>
    </div>
  );
};

export default DesignForm;
