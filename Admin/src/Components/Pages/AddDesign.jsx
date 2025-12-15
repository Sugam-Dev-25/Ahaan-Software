import React, { useState } from "react";
import { addDesignAPI } from "../Api/api";
import DesignForm from "../Pages/DesignForm";

const AddDesign = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [designer, setDesigner] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("designer", designer);   // NEW FIELD
    formData.append("image", image);

    await addDesignAPI(formData);
    alert("Design added successfully!");

    setTitle("");
    setLink("");
    setDesigner("");
    setImage(null);
  };

  return (
    <DesignForm
      formTitle="Add Design"
      title={title}
      setTitle={setTitle}
      link={link}
      setLink={setLink}
      designer={designer}
      setDesigner={setDesigner}
      image={image}
      setImage={setImage}
      onSubmit={handleSubmit}
      previewImage={null}
    />
  );
};

export default AddDesign;
