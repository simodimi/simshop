import React from "react";
import { useNavigate } from "react-router-dom";
import erreur from "../assets/logo/error.jpeg";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="NoArticle">
      <button id="retourStep" onClick={() => navigate("/")}>
        Retour
      </button>
      <p>Aucune page trouvée</p>
      <img src={erreur} alt="" />
    </div>
  );
};

export default Error;
