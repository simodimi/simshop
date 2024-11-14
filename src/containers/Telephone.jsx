import React, { useState } from "react";
import "../containers/beforebuy.css";
import { Link, useNavigate } from "react-router-dom";
import { telephone } from "../components/data";
import { FcFilledFilter } from "react-icons/fc";
import FunctionPrixTelephone from "../function/FunctionPrixTelephone";

const Telephone = () => {
  const navigate = useNavigate();
  //etat pour masquer ou afficher le filtre
  const [showfilter, setshowfilter] = useState(false);
  const Show = () => {
    setshowfilter((prev) => !prev); //fonction pour changer l'etat du filtre
  };

  //filtrage

  const [sortOrder, setSortOrder] = useState([...telephone]); //etat initial
  const min = Math.min(...telephone.map((p) => p.prix)); //prix le plus bas du tableau
  const max = Math.max(...telephone.map((p) => p.prix)); //prix le plus haut du tableau
  const [range, setrange] = useState([min, max]); //stockage de l'intervalle
  const [sortOption, setSortOption] = useState(""); // sauvergarder l'option du tri choisi croissant ou decroissant

  /*faire de façon separée les tris
   const classement = (x) => {
    const sortItems = [...sortOrder]; // Copier la liste pour éviter de modifier directement l'état
    if (x === "prix croissant") {
      sortItems.sort((a, b) => a.prix - b.prix);
    } else if (x === "prix decroissant") {
      sortItems.sort((a, b) => b.prix - a.prix);
    }
    setSortOrder(sortItems);
  };
  //trier en fonction de l'intervalle de prix

  const handleintervalle = (x) => {
    setrange(x);
  };
  const handleapply = () => {
    const elt = telephone.filter(
      (p) => p.prix >= range[0] && p.prix <= range[1]
    );
    setSortOrder(elt);
  };*/
  const classement = (x) => {
    setSortOption(x); // Mettre à jour l'option de tri sélectionnée soit croissant soit decroissant
    applyFilterAndSort(x, range); // Appliquer le filtre et le tri avec la dernière option du tri
  };

  const handleintervalle = (x) => {
    //mise a jour de l'intervalle de prix
    setrange(x);
  };

  const handleapply = () => {
    applyFilterAndSort(sortOption, range); // Appliquer le filtre avec l'option de tri sélectionnée
  };

  // Fonction qui applique à la fois le filtre d'intervalle et le tri
  const applyFilterAndSort = (sortType, priceRange) => {
    const filteredItems = telephone.filter(
      (p) => p.prix >= priceRange[0] && p.prix <= priceRange[1] //0 min et 1 le max
    );

    // Appliquer le tri en fonction du type sélectionné
    if (sortType === "prix croissant") {
      filteredItems.sort((a, b) => a.prix - b.prix);
    } else if (sortType === "prix decroissant") {
      filteredItems.sort((a, b) => b.prix - a.prix);
    }

    setSortOrder(filteredItems); //mise à jour de l'etat
  };
  return (
    <div className="Home-before-Buy">
      <div className="Home-before-Button">
        <div className="Home-before-Button-Left">
          <button>
            <Link onClick={() => navigate(-1)}>Retour</Link>
          </button>
        </div>
        <div className="Home-before-Button-Right">
          <p id="filter-select" onClick={Show}>
            <FcFilledFilter />
            filtre
          </p>
          {showfilter && (
            <div className="Filter-Home-before">
              <div className="Filter-Home-Before-up">
                <form>
                  <p id="PrixSelectionText">Classement</p>
                  <p id="PrixSelection">
                    {" "}
                    prix croissant
                    <input
                      type="radio"
                      name="prix"
                      id=""
                      value="prix croissant"
                      onClick={() => classement("prix croissant")}
                    />
                  </p>
                  <p id="PrixSelection">
                    {" "}
                    prix decroissant
                    <input
                      type="radio"
                      name="prix"
                      id=""
                      value="prix decroissant"
                      onClick={() => classement("prix decroissant")}
                    />
                  </p>
                </form>
              </div>
              <div className="Filter-Home-Before-down">
                <p style={{ display: "flex", justifyContent: "center" }}>
                  intervalle de prix
                </p>
                {/* Prop 'intervalle' est passée à FunctionPrixTelephone pour gérer les valeurs d'intervalle de prix */}
                <FunctionPrixTelephone
                  intervalle={handleintervalle}
                  min={min}
                  max={max}
                />
                <button onClick={handleapply}>Appliquer</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="Home-before-Selection">
        {sortOrder.map((item) => (
          <div className="Home-before-Item" key={item.id}>
            <Link to={`/shop/telephone/${item.id}`}>
              <img src={item.photo} alt="Sim'shop" />
              <p>{item.nom}</p>
              <p style={{ color: "green" }}>{item.prix}£</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Telephone;
