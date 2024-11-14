import React, { useState } from "react";
import "../style/arrivals.css";
import {
  arrivalcenter,
  arrivalexport,
  arrivalimport,
  categories,
} from "./data";
import { Link } from "react-router-dom";

const Arrivals = () => {
  //liste deroulante
  const [Select, setSelect] = useState({}); //etat initial +
  const [Cacher, setCacher] = useState({});

  const Show = (id) => {
    setCacher((prevcacher) => ({ ...prevcacher, [id]: !prevcacher[id] })); //creer une copie du tableau initial categories et en fonction de l'id j'aurais une negation.
    setSelect((prevselect) => ({ ...prevselect, [id]: !prevselect[id] }));
  };
  return (
    <div className="Main-Arrivals" id="lienArrivals">
      <div className="Main-Arrivals-Left">
        <h1>Catégories</h1>
        <div className="Main-Arrivals-Left-Articles">
          {categories.map((p) => (
            <div className="Arrivals-Articles" key={p.id}>
              <div className="Arrivals-title">
                <div className="Arrivals-img">
                  <img src={p.photo} alt="" />
                </div>
                <div className="Arrivals-Texte">
                  <p>{p.nom} </p>
                  <p onClick={() => Show(p.id)}>
                    {Select[p.id] ? <span>-</span> : <span>+</span>}
                  </p>
                </div>
              </div>
              <div
                className={`Arrivals-sub ${
                  Cacher[p.id] ? "activex" : "desactive"
                }`}
              >
                <p>
                  <Link to={p.Linkarticle1}>{p.article1} </Link>{" "}
                </p>
                <p>
                  <Link to={p.Linkarticle2}>{p.article2} </Link>
                </p>
                <p>
                  <Link to={p.Linkarticle3}>{p.article3} </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Main-Arrivals-Right">
        <div className="First-Arrivals-Title">
          <p>Nouveautés</p>
          <p>Tendances</p>
          <p>top ventes</p>
        </div>
        <div className="First-Arrivals-Articles">
          <div className="First-Arrivals-Articles-Left">
            {arrivalimport.map((p) => (
              <Link to={p.Link}>
                <div className="First-Arrivals-Items" key={p.id}>
                  <div className="First-Arrivals-Items-Photos">
                    <img src={p.photo} alt="sim'shop" />
                  </div>
                  <div className="First-Arrivals-Items-Text">
                    <p
                      style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "11px",
                      }}
                    >
                      {p.texte}
                    </p>
                    <p
                      style={{ fontWeight: "bold", color: "gray" }}
                      id="Name-Arrivals"
                    >
                      {p.name}{" "}
                    </p>
                    <p>
                      <span>{p.price}£ </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="First-Arrivals-Articles-Center">
            {arrivalexport.map((p) => (
              <Link to={p.Link}>
                <div className="First-Arrivals-Items" key={p.id}>
                  <div className="First-Arrivals-Items-Photos">
                    <img src={p.photo} alt="sim'shop" />
                  </div>
                  <div className="First-Arrivals-Items-Text">
                    <p
                      style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "11px",
                      }}
                      id="Name-Arrivals1"
                    >
                      {p.texte}
                    </p>
                    <p
                      style={{ fontWeight: "bold", color: "gray" }}
                      id="Name-Arrivals"
                    >
                      {p.name}{" "}
                    </p>
                    <p>
                      <span>{p.price}£ </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="First-Arrivals-Articles-Right">
            {arrivalcenter.map((p) => (
              <Link to={p.Link}>
                <div className="First-Arrivals-Items" key={p.id}>
                  <div className="First-Arrivals-Items-Photos">
                    <img src={p.photo} alt="sim'shop" />
                  </div>
                  <div className="First-Arrivals-Items-Text">
                    <p
                      style={{
                        fontWeight: "bold",
                        textTransform: "capitalize",
                        fontSize: "11px",
                      }}
                    >
                      {p.texte}
                    </p>
                    <p
                      style={{ fontWeight: "bold", color: "gray" }}
                      id="Name-Arrivals"
                    >
                      {p.name}{" "}
                    </p>
                    <p>
                      <span>{p.price}£ </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
