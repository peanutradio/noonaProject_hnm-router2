import React from "react";
import { useNavigate } from "react-router-dom";

// ProductCard 컴포넌트: 개별 상품 카드를 렌더링
const ProductCard = ({ item }) => {
  // navigate 함수를 사용하여 페이지 이동
  const navigate = useNavigate();

  // 상품 상세 페이지로 이동하는 함수
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };

  // // 이미지 URL을 절대 경로로 변환하는 함수
  // const getImageUrl = (relativeUrl) => {
  //   return `https://hnm-chan2.netlify.app${relativeUrl}`;
  // };

  return (
    <div className="card" onClick={() => showProduct(item.id)}>
      <img src={item?.img} />
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
