import React, { useEffect, useState } from "react";
import { getAllDevelopmentsAPI } from "../../../../Api/api";
import "./AllDevelopment.css";
import AllDevelopmentBanner from "./AllDevelopmentBanner";
import SecondBanner from "../../../Layouts/Body/SecondBanner";

const AllDevelopment = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getAllDevelopmentsAPI();
        setItems(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <>
    <AllDevelopmentBanner/>
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Our Web Development Projects</h2>

      <div className="all-dev-grid">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="all-dev-card"
          >
            <img src={item.image} alt={item.title} />

            {/* 🔥 Project Title */}
            <div className="all-dev-title">{item.title}</div>
          </a>
        ))}
      </div>
    </div>
    <SecondBanner />
    </>
  );
};

export default AllDevelopment;
