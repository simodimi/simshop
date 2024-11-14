import React from "react";
import "../style/heart.css";
import noimg from "../assets/logo/noproduit.jpeg";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const Heart = ({ favoris, setfavoris, setcompteurfavoris }) => {
  const navigate = useNavigate();
  const addDelete = (id) => {
    setfavoris((prev) => prev.filter((item) => item.id !== id)); //ici prev.filter permet de crrer un nouveautableau d'item sans l'element de l'id cliqué
    setcompteurfavoris((prev) => prev - 1);
  };
  return (
    <div className="Main-Heart">
      {favoris.length === 0 ? (
        <div className="NoArticle">
          <button id="retourStep" onClick={() => navigate(-1)}>
            Retour
          </button>
          <p>AUCUN ARTICLE CHOISIT</p>
          <img src={noimg} alt="" />
        </div>
      ) : (
        <div className="Shopping-Items">
          <button id="retourStep" onClick={() => navigate(-1)}>
            Retour
          </button>
          <table>
            <tr>
              <th>photos</th>
              <th>nom</th>
              <th>description</th>
              <th>visualiser</th>
              <th>supprimer</th>
            </tr>
            {favoris.map((items) => (
              <>
                <tr key={items.id}>
                  <td>
                    <img src={items.photo} alt="" />
                  </td>
                  <td>{items.titre} </td>
                  <td>{items.texte}</td>
                  <td>
                    <FaEye id="eye" onClick={() => navigate(items.link)} />
                  </td>

                  <td>
                    {" "}
                    <AiTwotoneDelete onClick={() => addDelete(items.id)} />
                  </td>
                </tr>
              </>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Heart;
