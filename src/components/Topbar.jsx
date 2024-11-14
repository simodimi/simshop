import React, { useState } from "react";
import "../style/topbar.css";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../assets/logo/logoecommerce.png";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const Topbar = ({ CompteurArticle, compteurfavoris }) => {
  const [menu, setmenu] = useState("home"); //par defaut menu="home"
  const [menuTopbar, setmenuTopbar] = useState({});
  const showMenuSelecting = () => {
    setmenuTopbar((prev) => !prev);
  };
  return (
    <div className="Main-Topbar">
      <div className="Topbar-Logo">
        <img src={logo} alt="sim'shop" />
      </div>
      <div className="TopbarMenu">
        <div className="IconTopbarMenu">
          <span>
            <RiMenu3Fill onClick={() => showMenuSelecting()} />
          </span>
        </div>
        {menuTopbar && (
          <div className="OptionTopbar">
            <p
              onClick={() => setmenu("home")}
              className={
                menu === "home" ? "active" : ""
              } /*si menu égale à home tu appliques la classe .active */
            >
              <Link to="/">Home</Link>{" "}
            </p>
            <p
              onClick={() => setmenu("shop")}
              className={menu === "shop" ? "active" : ""}
            >
              <Link to="/shop">Shop</Link>{" "}
            </p>
            <p
              onClick={() => setmenu("blog")}
              className={menu === "blog" ? "active" : ""}
            >
              <Link to="/blog">Blog</Link>
            </p>
            <p
              onClick={() => setmenu("about")}
              className={menu === "about" ? "active" : ""}
            >
              <Link to="/about">About</Link>
            </p>
            <p
              onClick={() => setmenu("contact")}
              className={menu === "contact" ? "active" : ""}
            >
              <Link to="/contact">Contact</Link>
            </p>
            <p
              onClick={() => setmenu("login")}
              className={menu === "login" ? "active" : ""}
            >
              <Link to="/login">
                <FaCircleUser style={{ fontSize: "25px" }} />
              </Link>
            </p>
            <div className="MenuCart">
              <Link to="/heart">
                <p
                  onClick={() => setmenu("heart")}
                  className={menu === "heart" ? "active" : ""}
                >
                  <CiHeart />
                </p>
                <span
                  onClick={() => setmenu("heart")}
                  className={menu === "heart" ? "active" : ""}
                >
                  {compteurfavoris}
                </span>
              </Link>
            </div>
            <div className="MenuShopping">
              <Link to="/shopping">
                <p
                  onClick={() => setmenu("shopping")}
                  className={menu === "shopping" ? "active" : ""}
                >
                  <CiShoppingCart />
                </p>
                <span
                  onClick={() => setmenu("shopping")}
                  className={menu === "shopping" ? "active" : ""}
                >
                  {CompteurArticle}
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
