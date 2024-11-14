import React from "react";
import "../style/logIn.css";
import { Link } from "react-router-dom";
import img1 from "../assets/logo/logoecommerce.png";
const LogIn = () => {
  return (
    <div className="MainLogIn">
      <p>
        <img src={img1} alt="" />
      </p>
      <div className="LoginPage">
        <form id="LoginForm">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" id="username" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" />
          <button type="submit">Connexion</button>
          <div className="LoginForget">
            <Link to="/forget" id="aforget">
              Mot de passe oublié
            </Link>
            <Link to="/logout" id="alogin">
              créer un compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
