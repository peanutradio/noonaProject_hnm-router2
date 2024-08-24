import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const searchQuery = query.get("q") || "";
        console.log("Fetching products with query:", searchQuery); // 디버깅: 검색 쿼리 로깅
        const url = `http://localhost:5000/products?q=${encodeURIComponent(searchQuery)}`;
        console.log("Fetching from URL:", url); // 디버깅: URL 로깅
        const response = await fetch(url);
        console.log("Response status:", response.status); // 디버깅: 응답 상태 로깅
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // 디버깅: 받아온 데이터 로깅
        setProductList(data);
      } catch (err) {
        console.error("Fetching products failed:", err);
        setError("상품을 불러오는 데 실패했습니다. 다시 시도해 주세요.");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [query]); // query가 변경될 때마다 실행

  console.log("Current productList:", productList); // 디버깅: 현재 productList 상태 로깅

  // 로딩 중이거나 에러 발생 시 적절한 메시지 표시
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (productList.length === 0) return <div>상품이 없습니다.</div>;

  // 상품 목록 렌더링
  return (
    <div className="product-all">
      <Container>
        <Row>
          {productList.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;