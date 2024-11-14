import React, { useState } from "react";
import "../style/products.css";
import { produit1, produit2, produit3 } from "./data";
import { FaCirclePlus } from "react-icons/fa6";
import { GiHearts } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect } from "react";

const Products = ({ handlestar }) => {
  const navigate = useNavigate();
  const [etoile, setetoile] = useState({});
  //selection des classes
  const [classSelect, setclassSelect] = useState("all");
  //selection des elements par categories
  const data = [...produit1, ...produit2, ...produit3]; //regroupement des elements
  const dimitri = (array) => {
    //fonction permettant de melanger les elements
    return array.sort(() => Math.random() - 0.5);
  };
  const newdata = dimitri(data); //melange des 03 elements
  //filtrage des elements par categories
  const [items, setitems] = useState(newdata); //initialise items avec newdata
  const filterItems = (categories) => {
    //filtrer les elements par categories
    if (categories === "all") {
      setitems(newdata);
    } else {
      const newItems = newdata.filter((p) => {
        return p.categories === categories;
      });
      setitems(newItems);
    }
  };

  useEffect(() => {
    const savefavorites = JSON.parse(localStorage.getItem("favorites")); //json.parse()permet de convertir la chaine en objet javascript.et localStorage.getItem("favorites") permet la recupération de la chaine sous la clé favorites
    setetoile(savefavorites || {}); //si aucune donnée n'eest trouvée cela retournera null
  }, []);

  const toggleFavorite = (item) => {
    handlestar(item);
    setetoile((prev) => {
      /*return { ...prev, [item.id]: !prev[item.id] };//creer une copie et a l'interieur tu appliques une nagation */
      const newfavorites = { ...prev, [item.id]: !prev[item.id] };
      localStorage.setItem("favorites", JSON.stringify(newfavorites)); //sauvegarde le nouvel état des favoris dans le localStorage. JSON.stringify() convertit l'objet JavaScript en chaîne JSON pour le stockage
      return newfavorites;
    });
  };
  const [menu, setmenu] = useState({});
  const showMenuSelect = () => {
    setmenu((prev) => !prev);
  };
  return (
    <div className="Main-Products">
      <div className="Main-Products-Left">
        <div className="ChatTest">
          <h2>publicité</h2>
        </div>
        <div className="ChatTest">
          <h2>publicité</h2>
        </div>
      </div>
      <div className="Main-Products-Right">
        <div className="Main-Products-title">
          <div className="Main-Products-Text">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Produits Du Moment
            </p>
          </div>
          <div className="Main-Products-selection">
            {menu && (
              <div className="Menu-Products-select">
                <p
                  onClick={() => {
                    filterItems("solde"); //filtrer les elements par categories solde
                    setclassSelect("solde"); //selecteur de classe
                  }}
                  className={
                    classSelect === "solde" ? "activeClass" : "desactiveClass"
                  }
                >
                  En Solde
                </p>
                <p
                  onClick={() => {
                    filterItems("new"); //filtrer les elements par categories new
                    setclassSelect("new"); //selecteur de classe
                  }}
                  className={
                    classSelect === "new" ? "activeClass" : "desactiveClass"
                  }
                >
                  Nouveau
                </p>
                <p
                  onClick={() => {
                    filterItems("pourcentage"); //filtrer les elements par categories pourcentage
                    setclassSelect("pourcentage"); //selecteur de classe
                  }}
                  className={
                    classSelect === "pourcentage"
                      ? "activeClass"
                      : "desactiveClass"
                  }
                >
                  pourcentage
                </p>
                <p
                  onClick={() => {
                    filterItems("all"); //filtrer les elements par categories all
                    setclassSelect("all"); //selecteur de classe
                  }}
                  className={
                    classSelect === "all" ? "activeClass" : "desactiveClass"
                  }
                >
                  Tout
                </p>
              </div>
            )}
            <div className="MenuProduct">
              <span>
                <RiMenu3Fill onClick={() => showMenuSelect()} />
              </span>
            </div>
          </div>
        </div>
        <div className="Main-Products-Article">
          {items.map((p) => (
            <div className="Main-Products-Item" key={p.id}>
              <div className="Main-Products-Img">
                <img src={p.photo} alt="" />
                <div
                  className={`Main-Indice1 ${
                    p.percent
                      ? "percent"
                      : p.solde
                      ? "solde"
                      : "mot" /*personnaliser les trois tableaux avec leurs css respectifs */
                  }`}
                >
                  <p>{p.percent || p.solde || p.mot}</p>
                </div>
                <div className="Main-Indice2">
                  <p>
                    <GiHearts
                      id="GiHearts"
                      style={{
                        color: etoile[p.id] ? "red" : "blue",
                      }} /*si l'etoile vraie tu passes au rouge */
                      onClick={() => toggleFavorite(p)} //fonction si je clique sur le coeur
                    />
                  </p>
                </div>
              </div>
              <div className="Main-Products-Text">
                <p id="Main-Products-Text-Titre">{p.titre}</p>
                <p id="Main-Products-Text-Describe">{p.texte}</p>
                <p id="Main-Products-Text-Star">{p.star}</p>
                <div className="Main-Procduct-price">
                  <div className="Product-Price-Left">
                    <p>£{p.price}</p>
                    {p.oldprice && <p>£{p.oldprice}</p>}
                  </div>
                  <div className="Product-Price-Right">
                    <p>
                      <FaCirclePlus onClick={() => navigate(p.link)} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
