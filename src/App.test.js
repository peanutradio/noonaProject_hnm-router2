import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./Route/PrivateRoute";

// App 컴포넌트: 애플리케이션의 메인 컴포넌트
function App() {
  // 사용자 인증 상태를 관리하는 상태
  let [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      {/* 네비게이션 바 컴포넌트 */}
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />

      {/* 라우트 설정 */}
      <Routes>
        {/* 메인 페이지 라우트 */}
        <Route path="/" element={<ProductAll />} />

        {/* 로그인 페이지 라우트 */}
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />

        {/* 상품 상세 페이지 라우트 (인증 필요) */}
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
