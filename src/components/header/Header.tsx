import Image from "next/image";
import React, { useState } from "react";
import logo from  '../../assets/cinema-logo.svg'
import "./Header.scss";
const HeaderList = [
  {
    id: 1,
    iconClass: "fas fa-film",
    name: "Now Playing",
    type: "now_playing",
  },
  {
    id: 2,
    iconClass: "fas fa-fire",
    name: "Popular",
    type: "popular",
  },
  {
    id: 3,
    iconClass: "fas fa-star",
    name: "Top Rated",
    type: "top_rate",
  },
  {
    id: 4,
    iconClass: "fas fa-plus-square",
    name: "Upcoming",
    type: "upcoming",
  },
];
const Header: React.FC = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);
  const toggleMenu = () => {
    // menuClass = !menuClass;
    // navClass=!navClass;
    setMenuClass(!menuClass);
    setNavClass(!navClass);
    if (navClass) {
      document.body.classList.add("header-nav-open"); //add class to body for overflow hide in toggle menu
    } else {
      document.body.classList.remove("header-nav-open"); //add class to body for overflow hide in toggle menu
    }
  };
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <Image src={logo} alt="cinema app" />
          
          </div>
          <div
            onClick={() => toggleMenu()}
            className={`${
              menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"
            }`}
            id="header-mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${
              navClass ? "header-nav header-mobile-nav" : "header-nav"
            }`}
          >
            {HeaderList.map((item) => (
              <li key={item.id} className="header-nav-item ">
                <span className="header-list-name">
                  <i className={item.iconClass}></i>
                </span>
                &nbsp;
                <span className="header-list-name">{item.name}</span>
              </li>
            ))}

            <input
              className="search-input"
              type="text"
              name=""
              id=""
              placeholder="search for a movie"
            />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
