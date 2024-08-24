import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Navbar 컴포넌트: 네비게이션 바를 렌더링
const Navbar = ({ authenticate, setAuthenticate }) => {
  // 메뉴 목록 정의
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  // 사이드 메뉴의 너비 상태 (모바일 버전)
  let [width, setWidth] = useState(0);

  // 페이지 이동을 위한 navigate 함수
  let navigate = useNavigate();

  // 검색어 입력 후 엔터 키 처리 함수
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };

  return (
    <div>
      {/* 사이드 메뉴 (모바일 버전) */}
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      {/* 네비게이션 헤더 */}
      <div className="nav-header">
        {/* 햄버거 메뉴 아이콘 (모바일 버전) */}
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {/* 로그인/로그아웃 버튼 */}
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      {/* 로고 */}
      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
            alt="H&M Logo"
          />
        </Link>
      </div>

      {/* 메뉴 영역 */}
      <div className="nav-menu-area">
        {/* 메뉴 리스트 */}
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>

        {/* 검색 박스 */}
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyPress={onCheckEnter} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
