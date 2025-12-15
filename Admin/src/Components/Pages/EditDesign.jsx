import React, { useEffect, useState } from "react";
import { getDesignByIdAPI, updateDesignAPI } from "../Api/api";
import { useParams } from "react-router-dom";
import DesignForm from "../Pages/DesignForm";

const EditDesign = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [designer, setDesigner] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDesignByIdAPI(id);
      const data = res.data.data;

      setTitle(data.title);
      setLink(data.link);
      setDesigner(data.designer);     // 👈 NEW FIELD
      setPreviewImage(data.image);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("link", link);
    formData.append("designer", designer);

    if (image) {
      formData.append("image", image);
    }

    await updateDesignAPI(id, formData);
    alert("Design updated successfully!");
  };

  return (
    <DesignForm
      formTitle="Edit Design"
      title={title}
      setTitle={setTitle}
      link={link}
      setLink={setLink}
      designer={designer}
      setDesigner={setDesigner}
      image={image}
      setImage={setImage}
      onSubmit={handleSubmit}
      previewImage={previewImage}
    />
  );
};

export default EditDesign;
