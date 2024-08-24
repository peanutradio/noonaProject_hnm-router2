import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showMenu, setShowMenu] = useState(false);
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

  const navigate = useNavigate();

  const handleAuth = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const search = (event) => {
    if (event.key === "Enter") {
      console.log("Searching with keyword:", searchKeyword);
      navigate(`/?q=${encodeURIComponent(searchKeyword)}`);
    }
  };

  // 사이드바 외부 클릭 시 닫히도록 처리
  const handleClickOutside = (event) => {
    if (!event.target.closest(".navbar") && showMenu) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img
              src="https://th.bing.com/th/id/OIP.FPqaiQ5CFCAcFMvmnlxcDwHaE4?w=279&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              alt="H&M Logo"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
        <div className="navbar-right">
          <div className="searchbar">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyPress={search}
              placeholder="제품검색"
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="login-button" onClick={handleAuth}>
            <FontAwesomeIcon icon={faUser} />
            <span>{authenticate ? "로그아웃" : "로그인"}</span>
          </div>
        </div>
      </div>
      <div className="navbar-mobile">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div className={`sidebar ${showMenu ? "show" : ""}`}>
        <ul className="sidebar-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
