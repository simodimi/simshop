import React from "react";
import "../style/shop.css";
import Footer from "../components/Footer";
import { shop } from "../components/data";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div className="Main-Shop">
      <p id="Main-Shop-Title">Tous les articles à votre portée</p>
      <div className="Main-Shop-List">
        {shop.map((item) => (
          <div className="Main-sub-Shop-List" key={item.id}>
            <Link to={item.link}>
              <div className="Shop-image">
                <img src={item.photo} alt="Sim'shop" />
              </div>
              <p>{item.nom} </p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
