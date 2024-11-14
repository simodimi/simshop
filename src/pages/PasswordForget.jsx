import React from "react";
import "../style/passwordforget.css";
import { Link } from "react-router-dom";
import img1 from "../assets/logo/logoecommerce.png";

const PasswordForget = () => {
  return (
    <div className="MainPasswordForget">
      <p>
        <img src={img1} alt="" />
      </p>
      <div className="LoginPage">
        <form id="LoginForm">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" id="username" />
          <label htmlFor="email">Entrer votre email</label>
          <input type="email" id="password" />
          <label htmlFor="email">Confirmer votre email</label>
          <input type="email" id="password" />
          <button type="submit">Valider</button>

          <Link to="/login" id="alogin">
            se connecter
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PasswordForget;
