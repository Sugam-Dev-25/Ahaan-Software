import { useEffect, useState } from "react";
import { getAllUiUxDesignsAPI } from "../../../../Api/api";
import "./AllUiUxDesign.css";
import AllDesignBanner from "./AllDesignBanner";
import SecondBanner from "../../../Layouts/Body/SecondBanner";

const AllUiUxDesign = () => {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const loadDesigns = async () => {
      try {
        const res = await getAllUiUxDesignsAPI();

        let data = [];
        if (Array.isArray(res)) data = res;
        else if (Array.isArray(res?.data)) data = res.data;
        else if (res?.data && typeof res.data === "object") data = [res.data];

        setDesigns(data);
      } catch (err) {
        console.error(err);
        setDesigns([]);
      }
    };

    loadDesigns();
  }, []);

  return (
    <>
    <AllDesignBanner/>
    <div className="container py-5">

      <div className="all-uiux-grid">
        {designs.map((item, index) => (
          <a
            key={item._id || index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="all-uiux-card"
          >
            <img src={item.image} alt={item.title} />
            <div className="all-uiux-title">{item.title}</div>
          </a>
        ))}
      </div>
    </div>
    <SecondBanner />
    </>
    
  );
};

export default AllUiUxDesign;
