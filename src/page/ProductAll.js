import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

// ProductAll 컴포넌트: 모든 상품을 표시하는 메인 페이지
const ProductAll = () => {
  // 상품 목록을 저장하는 상태
  let [products, setProducts] = useState([]);
  // URL의 쿼리 파라미터를 관리하는 훅
  const [query, setQuery] = useSearchParams();
  // 에러 메시지를 저장하는 상태
  let [error, setError] = useState("");

  // 상품 데이터를 가져오는 비동기 함수
  const getProducts = async () => {
    try {
      // URL에서 검색 키워드 가져오기
      let keyword = query.get("q") || "";
      // API 요청 URL 구성
      let url = `https://my-json-server.typicode.com/peanutradio/noonaProject_hnm-router2/products?q=${keyword}`;
      // API 요청 보내기
      let response = await fetch(url);
      // 응답 데이터를 JSON으로 파싱
      let data = await response.json();

      // 디버깅을 위한 로그
      console.log("Fetched products:", data);

      // 검색 결과가 없을 경우 에러 처리
      if (data.length < 1) {
        if (keyword !== "") {
          setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      // 상품 목록 상태 업데이트
      setProducts(data);
    } catch (err) {
      // 에러 발생 시 에러 메시지 설정
      setError(err.message);
    }
  };

  // 컴포넌트 마운트 시 또는 query 변경 시 상품 데이터 가져오기
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      {error ? (
        // 에러가 있을 경우 에러 메시지 표시
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        // 상품 목록 표시
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
