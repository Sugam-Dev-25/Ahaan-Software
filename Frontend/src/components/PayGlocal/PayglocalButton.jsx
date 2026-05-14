import React, { useEffect, useRef } from "react";
import "./PayglocalButton.css"

const PayglocalButton = () => {
  const payBtnRef = useRef(null);

  useEffect(() => {
    if (payBtnRef.current) {
      payBtnRef.current.innerHTML = "";
    }

    // script create
    const script = document.createElement("script");

    script.src = "https://oneclick.payglocal.in/simple.js";
    script.setAttribute("data-pb-id", "pb_wA4mcFvFYo8I");
    script.async = true;

    // append script
    payBtnRef.current.appendChild(script);
  }, []);

  return (
    <div>
      <div className="pay-btn-wrapper" ref={payBtnRef}></div>
    </div>
  );
};

export default PayglocalButton;