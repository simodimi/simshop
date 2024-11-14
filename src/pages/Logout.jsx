import React from "react";
import "../style/logout.css";
import img1 from "../assets/logo/logoecommerce.png";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div className="Main-Logout">
      <p>
        <img src={img1} alt="" />
      </p>
      <div className="LoginPage">
        <form id="LoginForm">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" id="username" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" />
          <label htmlFor="password">Confirmer mot de passe</label>
          <input type="password" id="password2" />
          <button type="submit">S'inscrire</button>

          <Link to="/login" id="alogout">
            vous avez déja un compte ?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Logout;
