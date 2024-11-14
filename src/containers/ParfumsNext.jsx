import React from "react";
import "./beforebuy.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { parfums } from "../components/data";
import { useState } from "react";
const ParfumsNext = ({ addshop }) => {
  const { id } = useParams(); //useparams permet d avoir acces au elements de l'url(route).
  const free = parfums.find((p) => p.id.toString() === id); //find permet de parcourir les elements du tableau et de retourner le premier elements
  const dimitri = free.photo;
  const navigate = useNavigate();
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            harum quidem odio ullam aspernatur sint perferendis illo nostrum?
            Eligendi quod debitis nisi totam ipsam? Impedit vitae adipisci earum
            praesentium. Sit.
          </p>
          <div className="requisition">
            <p>10 jours de garantie</p>
            <p>livraison gratuite </p>
            <p>retour gratuit</p>
          </div>
          {/*  <div className="Next-color">
          <p>Couleur :</p>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
         <div className="Next-Size">
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
            <td>Longueur</td>
            <td>{free.longueur} cm</td>
          </tr>
          <tr>
            <td>Largeur</td>
            <td>{free.largeur} cm</td>
          </tr>
          <tr>
            <td>Hauteur</td>
            <td>{free.hauteur} cm</td>
          </tr>
          <tr>
            <td>épaisseur</td>
            <td>{free.epaisseur} cm</td>
          </tr>
          <tr>
            <td>couleur</td>
            <td>{free.Couleur}</td>
          </tr>
          <tr>
            <td>matière</td>
            <td>{free.matiere}</td>
          </tr>
          <tr>
            <td>taille</td>
            <td>{free.taille}</td>
          </tr>
          <tr>
            <td>Année</td>
            <td>{free.annee}</td>
          </tr>
        </table>
      </div>
      <div className="Other-Product"></div>
    </div>
  );
};

export default ParfumsNext;
