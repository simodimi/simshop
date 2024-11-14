import React from "react";
import "./beforebuy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { tshirts } from "../components/data";
import { useState } from "react";
const TshirtNext = ({ addshop }) => {
  const navigate = useNavigate();
  const { id } = useParams(); //useparams permet d avoir acces au elements de l'url(route).
  const free = tshirts.find((p) => p.id.toString() === id); //find permet de parcourir les elements du tableau et de retourner le premier elements
  const dimitri = free.photo;
  const [Select, setSelect] = useState(dimitri);
  const [size, setsize] = useState("");

  const reperesize = (e) => {
    setsize(e.target.value);
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
          <div className="Next-color">
            <div className="taille">
              <label>M</label>
              <input
                type="radio"
                name="size"
                id=""
                value="M"
                onClick={reperesize}
              />
            </div>
            <div className="taille">
              <label>L</label>
              <input
                type="radio"
                name="size"
                id=""
                value="L"
                onClick={reperesize}
              />
            </div>
            <div className="taille">
              <label>XS</label>
              <input
                type="radio"
                name="size"
                id=""
                value="XS"
                onClick={reperesize}
              />
            </div>
            <div className="taille">
              <label>XL</label>
              <input
                type="radio"
                name="size"
                id=""
                value="XL"
                onClick={reperesize}
              />
            </div>
            <div className="taille">
              <label>XXL</label>
              <input
                type="radio"
                name="size"
                id=""
                value="XXL"
                onClick={reperesize}
              />
            </div>
          </div>
          <div className="Next-Quantity">
            <p style={{ fontWeight: "bold" }}>Quantité :</p>
            <input type="number" min="1" defaultValue={1} />
          </div>
          <button
            id="valider"
            onClick={() => {
              addshop({ ...free, size });
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
            <td>{free.longueur} </td>
          </tr>
          <tr>
            <td>Largeur</td>
            <td>{free.largeur} </td>
          </tr>
          <tr>
            <td>Hauteur</td>
            <td>{free.hauteur} </td>
          </tr>
          <tr>
            <td>épaisseur</td>
            <td>{free.epaisseur} </td>
          </tr>
          <tr>
            <td>size</td>
            <td>{size} </td>
          </tr>
          <tr>
            <td>couleur</td>
            <td>{free.couleur}</td>
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

export default TshirtNext;
