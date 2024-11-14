import React from "react";
import "./beforebuy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { chaussures } from "../components/data";
import { useState } from "react";
const ChaussuresNext = ({ addshop }) => {
  const { id } = useParams(); //useparams permet d avoir acces au elements de l'url(route).
  const free = chaussures.find((p) => p.id.toString() === id); //find permet de parcourir les elements du tableau et de retourner le premier elements
  const dimitri = free.photo;
  const navigate = useNavigate();
  const [Select, setSelect] = useState(dimitri);
  const [pointure, setpointure] = useState("");

  const reperepointure = (e) => {
    setpointure(e.target.value);
  };
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
          <div className="Next-color">
            <div className="taille">
              <label>41</label>
              <input
                type="radio"
                name="pointure"
                id=""
                value="41"
                onClick={reperepointure}
              />
            </div>
            <div className="taille">
              <label>42</label>
              <input
                type="radio"
                name="pointure"
                id=""
                value="42"
                onClick={reperepointure}
              />
            </div>
            <div className="taille">
              <label>43</label>
              <input
                type="radio"
                name="pointure"
                id=""
                value="43"
                onClick={reperepointure}
              />
            </div>
            <div className="taille">
              <label>44</label>
              <input
                type="radio"
                name="pointure"
                id=""
                value="44"
                onClick={reperepointure}
              />
            </div>
            <div className="taille">
              <label>45</label>
              <input
                type="radio"
                name="pointure"
                id=""
                value="45"
                onClick={reperepointure}
              />
            </div>
          </div>
          {/* <div className="Next-Size">
            <p>Size :</p>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
            <button>XXXL</button>
          </div>*/}
          <div className="Next-Quantity">
            <p style={{ fontWeight: "bold" }}>Quantité :</p>
            <input type="number" min="1" defaultValue={1} />
          </div>
          <button
            id="valider"
            onClick={() => {
              addshop({ ...free, pointure }); //ajouter la pointure au produit
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
            <td>style</td>
            <td>{free.style}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>{free.type} </td>
          </tr>
          <tr>
            <td>semelle</td>
            <td>{free.semelle} </td>
          </tr>
          <tr>
            <td>couleur</td>
            <td>{free.couleur}</td>
          </tr>
          <tr>
            <td>pointure</td>
            <td>{pointure}</td>
          </tr>
          <tr>
            <td>matière</td>
            <td>{free.matiere_exterieure}</td>
          </tr>
          <tr>
            <td>taille</td>
            <td>{free.prix}</td>
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

export default ChaussuresNext;
