import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logoecommerce.png";
import "../style/buy.css";

const Buy = ({ compteur }) => {
  return (
    <div className="HeadBuy">
      <div className="SubHeadBuy">
        <Link to="/shopping" id="buybtn">
          {" "}
          Retour
        </Link>
        <div className="LogoImage">
          {" "}
          <img src={logo} alt="" />
        </div>

        <p>
          Montant totale: <span>{compteur} </span> £
        </p>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default Buy;
