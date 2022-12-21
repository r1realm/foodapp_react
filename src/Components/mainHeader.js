import React from 'react';
import Logo from "../images/logo.png";
import Home from "../images/home.png";
import Menu from "../images/menu-bar.png";

function principal() {
  return (
    <header className="header">
      <div className="titleHeader">
        <p>Your TakeAway</p>
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="navbutton">
        <button className="home">
          <img src={Home} alt="" className="imghome" />
          Home
        </button>
        <button className="menu">
          <img src={Menu} alt="" className="imgmenu" />
          Menu
        </button>
      </div>
    </header>
  );
}

export default principal;
