import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://th.bing.com/th/id/OIP.FPqaiQ5CFCAcFMvmnlxcDwHaE4?w=279&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="H&M Logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="searchbar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            style={{
              border: "none",
              borderBottom: "1px solid #000",
              outline: "none",
              padding: "5px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
