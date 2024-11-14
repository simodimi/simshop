import React from "react";
import "./beforebuy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { sport } from "../components/data";
import { useState } from "react";
const SportNext = ({ addshop }) => {
  const navigate = useNavigate();
  const { id } = useParams(); //useparams permet d avoir acces au elements de l'url(route).
  const free = sport.find((p) => p.id.toString() === id); //find permet de parcourir les elements du tableau et de retourner le premier elements
  const dimitri = free.photo;
  const [Select, setSelect] = useState(dimitri);
  return (
    <div className="Next-Step">
      <button id="retourStep">
        <Link onClick={() => navigate(-1)}>Retour</Link>
      </button>

      <div className="Next-Step-Up" key={free.id}>
        <div className="Next-Step-Left">
          <div className="Next-Principal-image">
            <img src={Select} alt="" />
          </div>
          <div className="Next-Secondary-image">
            <img
              src={free.photo}
              alt=""
              onClick={() => setSelect(free.photo)}
            />
            <img
              src={free.photo2}
              alt=""
              onClick={() => setSelect(free.photo2)}
            />
            <img
              src={free.photo3}
              alt=""
              onClick={() => setSelect(free.photo3)}
            />
          </div>
        </div>
        <div className="Next-Step-Right">
          <p style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            {free.nom}{" "}
          </p>
          <p style={{ fontWeight: "bold" }}>
            Prix: <span style={{ color: "green" }}>{free.prix} £</span>
          </p>
          <p style={{ fontWeight: "bold" }}>
            Marque: <span style={{ color: "green" }}>{free.marque} </span>
          </p>
          <p></p>
          <p>{free.description}</p>
          <div className="requisition">
            <p>{free.garantie} de garantie</p>
            <p>livraison gratuite </p>
            <p>retour gratuit</p>
          </div>

          <div className="Next-Quantity">
            <p style={{ fontWeight: "bold" }}>Quantité :</p>
            <input type="number" min="1" defaultValue={1} />
          </div>
          <button
            id="valider"
            onClick={() => {
              addshop(free);
              navigate("/shopping");
            }}
          >
            <Link to={"/shopping"}>Ajouter au panier</Link>
          </button>
        </div>
      </div>

      <div className="Next-Step-Down">
        <p>Informations additionelles</p>
        <table>
          <tr>
            <td>caracteristiques</td>
            <td>{free.caracteristiques} </td>
          </tr>
          <tr>
            <td>coupe</td>
            <td>{free.coupe} </td>
          </tr>
          <tr>
            <td>matiere</td>
            <td>{free.matiere} </td>
          </tr>
          <tr>
            <td>entretien</td>
            <td>{free.entretien} </td>
          </tr>
          <tr>
            <td>couleur</td>
            <td>{free.couleur}</td>
          </tr>
          <tr>
            <td>usage</td>
            <td>{free.usage}</td>
          </tr>
          <tr>
            <td>taille</td>
            <td>{free.taille}</td>
          </tr>
          <tr>
            <td>Année</td>
            <td>{free.annee_modele}</td>
          </tr>
        </table>
      </div>
      <div className="Other-Product"></div>
    </div>
  );
};

export default SportNext;
