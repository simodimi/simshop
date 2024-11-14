import React, { useState } from "react";
import "../style/home.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { banner, choix, subcategories } from "../components/data";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Choix from "../components/Choix";
import Arrivals from "../components/Arrivals";
import Deal from "../components/Deal";
import Products from "../components/Products";
import Fire from "../components/Fire";
import Footer from "../components/Footer";
import noname from "../assets/logo/noproduit.jpeg";

const Home = ({ handlestar }) => {
  const settings = {
    //npm pour defilement photos
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
  };
  //defilement categories
  const [Choice, setChoice] = useState(true);
  const [Visible, setVisible] = useState(false);
  const Show = () => {
    setChoice((prev) => !prev); //retourne la valeur inversée.
    setVisible((prev) => !prev);
  };
  //filter des elements de recherche
  const [searchfilter, setsearchfilter] = useState("");
  const [See, setSee] = useState(choix);
  const Changement = (e) => {
    const free = e.target.value; //valeur actuelle du champ de saisie.
    setsearchfilter(free); //mettre à jour la nouvelle valeur de searchfilter.
    const ultimate = choix.filter((p) => {
      //filter parcourt chaque élément de choix
      return p.texte.toLowerCase().includes(free.toLowerCase()); //comparaison
    });
    setSee(ultimate); //mis à jour avec les éléments filtrés.
  };

  return (
    <div className="Main-Home">
      <div className="MainSubHome">
        <div className="Home-Search">
          <p id="Home-Categories" onClick={Show}>
            Catégories {Choice ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </p>
          <input
            type="search"
            name=""
            id=""
            placeholder="chercher vos articles ..."
            value={searchfilter} //valeur affichée dans l'input
            onChange={Changement} //se déclenche à chaque fois que la valeur de l'input change
          />
          <p id="search">rechercher</p>
        </div>
        <div className="Home-Categories">
          <div className="Home-Banner">
            <Slider {...settings}>
              {banner.map((item) => (
                <div className="Banner-Slide" key={item.id}>
                  <div className="Banner-Text">
                    <p>{item.intro}</p>
                    <p>{item.phrase}</p>

                    <Link to={item.Link} className="Banner-Link">
                      SHOP NOW
                    </Link>
                  </div>
                  <div className="Banner-Image">
                    <img src={item.photo} alt="banner sim'shop" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div
            className={`Sub-Home-Categories ${
              searchfilter ? "Visible" : "Invisible"
            }`}
          >
            {searchfilter && See.length > 0 ? ( //verifie si le champ n'est pas vide et si See contient des elements superieurs à 0
              See.map((p, id) => (
                <li key={id}>
                  <Link to={p.Link}>{p.texte} </Link>
                </li>
              ))
            ) : (
              <div className="No-Article">
                <p>aucun article disponible </p>
                <img src={noname} alt="" />
              </div>
            )}
          </div>
          <div
            className={`Sub-Choix-Categories ${
              Visible ? "Visible" : "Invisible"
            } `}
          >
            {subcategories.map((p) => (
              <div className="Selection-User-Category" key={p.id}>
                <Link to={p.link}>
                  <img src={p.photo} alt="sim'shop" />
                  <p>{p.nom}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Choix />
        <Arrivals />
        <Deal />
        <Products handlestar={handlestar} />
        <Fire />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
