import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  const [isHover, setIsHover] = useState(false);

  const containerStyle = {
    width: "300px",
    overflow: "hidden",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease",
    transform: isHover ? "scale(1.1)" : "scale(1)",
  };

  return (
    <div onClick={showDetail}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={item?.img} alt={item?.title} style={imageStyle} />
      </div>
      <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
