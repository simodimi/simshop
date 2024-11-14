import React from "react";
import { Link } from "react-router-dom";
import "../style/fire.css";
import { fires1, fires2 } from "./data";

const Fire = () => {
  return (
    <div className="Fire-Images">
      <div className="Fire-Images-Haut">
        {fires1.map((p) => (
          <div className="Fire-Image-Item" key={p.id}>
            <img src={p.photoFire} alt="Sim'shop" />
            <div className="Fire-Image-Text">
              <p>{p.titre}</p>
              <p>{p.text}</p>
              <p style={{ marginBottom: "30px" }}>{p.description}</p>
              <p>
                <Link to={p.Link} id="btn-Fire">
                  {p.btn}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="Fire-Images-Bas">
        {fires2.map((p) => (
          <div className="Fire-Image-Item" key={p.id} id="Fire-Image-Item">
            <Link to={p.Links}>
              <img src={p.photoFire} alt="Sim'shop" />
              <div className="Fire-Image-Text">
                <p>{p.titre}</p>
                <p>{p.text}</p>
                <p>{p.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fire;
