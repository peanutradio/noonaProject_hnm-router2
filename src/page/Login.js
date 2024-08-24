import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Login 컴포넌트: 로그인 폼을 렌더링하고 처리
const Login = ({ setAuthenticate, to }) => {
  // 디버깅을 위한 콘솔 로그
  console.log("tototo", to);

  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  // 로그인 처리 함수
  const login = (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    setAuthenticate(true); // 인증 상태를 true로 설정
    navigate("/"); // 메인 페이지로 이동
  };

  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={login}>
        {/* 이메일 입력 필드 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* 비밀번호 입력 필드 */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* 로그인 버튼 */}
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
