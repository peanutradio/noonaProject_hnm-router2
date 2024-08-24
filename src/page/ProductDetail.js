import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";

// ProductDetail 컴포넌트: 개별 상품의 상세 정보를 표시
const ProductDetail = () => {
  // 상품 정보를 저장하는 상태
  const [product, setProduct] = useState(null);
  // 로딩 상태를 관리하는 상태
  const [loading, setLoading] = useState(false);
  // 에러 메시지를 저장하는 상태
  const [error, setError] = useState("");
  // URL에서 상품 ID를 가져오기
  const { id } = useParams();

  // // 이미지 URL을 절대 경로로 변환하는 함수
  // const getImageUrl = (relativeUrl) => {
  //   return `https://hnm-chan2.netlify.app${relativeUrl}`;
  // };

  // 상품 상세 정보를 가져오는 비동기 함수
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/peanutradio/noonaProject_hnm-router2/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setProduct(data);
  };

  // 컴포넌트 마운트 시 상품 상세 정보 가져오기
  useEffect(() => {
    getProductDetail();
  }, []);

  // 로딩 중이거나 상품 정보가 없을 경우 로딩 메시지 표시
  if (loading || product == null) return <h1>Loading</h1>;

  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col xs={12} md={6} className="product-detail-img">
            <img src={product.img} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product-info">{product.title}</div>
            <div className="product-info">₩ {product.price}</div>
            <div className="choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
