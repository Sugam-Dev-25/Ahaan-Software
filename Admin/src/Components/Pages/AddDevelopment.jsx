import React, { useState } from "react";
import DevelopmentForm from "../Pages/DevelopmentForm";
import { addDevelopmentAPI } from "../Api/api";

const AddDevelopment = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [developer, setDeveloper] = useState("");   // NEW FIELD
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("link", link);
    fd.append("developer", developer);   // NEW FIELD
    fd.append("image", image);

    try {
      await addDevelopmentAPI(fd);

      alert("Development Added Successfully! 🎉");

      // RESET FIELDS
      setTitle("");
      setLink("");
      setDeveloper("");
      setImage(null);
    } catch (error) {
      alert("❌ Failed to add development!");
    }
  };

  return (
    <DevelopmentForm
      formTitle="Add Development"
      title={title}
      setTitle={setTitle}
      link={link}
      setLink={setLink}
      developer={developer}          // SEND TO FORM
      setDeveloper={setDeveloper}    // SEND TO FORM
      image={image}
      setImage={setImage}
      onSubmit={handleSubmit}
    />
  );
};

export default AddDevelopment;
