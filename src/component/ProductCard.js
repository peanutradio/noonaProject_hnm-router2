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

  // 이미지 URL을 절대 경로로 변환하는 함수
  const getImageUrl = (relativeUrl) => {
    return `https://hnm-chan2.netlify.app${relativeUrl}`;
  };

  return (
    // 카드 클릭 시 해당 상품의 상세 페이지로 이동
    <div className="card" onClick={() => showProduct(item.id)}>
      {/* 상품 이미지 */}
      <img src={getImageUrl(item?.img)} alt={item?.title} />

      {/* Conscious choice 표시 */}
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>

      {/* 상품 제목 */}
      <div>{item?.title}</div>

      {/* 상품 가격 */}
      <div>₩{item?.price}</div>

      {/* 신제품 표시 */}
      <div className="new-product">{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
