import React, { useState, useEffect } from "react";
import "../style/deal.css";
import fire from "../assets/svg/fire.png";

import img from "../assets/beaute/shampoo.jpg";
import img1 from "../assets/beaute/jewellery-1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { pub } from "./data";
import { Link } from "react-router-dom";
const Deal = () => {
  //gestionnaire barre de progression
  const stock = 40;
  const [progresstock, setStock] = useState(stock);
  const reste = stock - progresstock;
  const progressvalue1 = Math.floor((reste / stock) * 100); //calcul de la barre de progression

  const stock2 = 60;
  const [progresstock2, setStock2] = useState(stock2);
  const reste2 = stock2 - progresstock2;
  const progressvalue2 = Math.floor((reste2 / stock2) * 100);

  //gestion de la valeur restante
  const addDeal = () => {
    if (progresstock > 0) {
      setStock((prevstock) => prevstock - 1);
    }
  };
  const addDeal2 = () => {
    if (progresstock2 > 0) {
      setStock2((prevstock) => prevstock - 1);
    }
  };
  //chrono
  const init = 24 * 60 * 60; //24h en secondes
  const [sec, setsec] = useState(init);
  useEffect(() => {
    const dimi = setInterval(() => {
      setsec((prevsec) => {
        if (prevsec === 0) {
          clearInterval(dimi);
          return init;
        }
        return prevsec - 1;
      });
    }, 1000);
    return () => {
      clearInterval(dimi);
    };
  }, []);
  //defilement photo left
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };
  return (
    <div className="Home-Deals">
      <div className="Deals-articles">
        <div className="Deals-articles-Title">
          <p>Offre Exclusive</p>
          <img src={fire} alt="" />
        </div>
        <div className="Deals-articles-Photo">
          <Slider {...settings}>
            {pub.map((item) => (
              <div className="Deals-Publicite" key={item.id}>
                <Link to={item.Link}>
                  <img src={item.photo} alt="" />
                  <div className="Promo">
                    <p>25% de réduction</p>
                    <p>PROFITER MAINTENANT...</p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="Deals-promotion">
        <h1>Deals Of The Day</h1>
        <div className="Home-Deals-Home">
          <div className="Home-Deals-Left">
            <div className="Home-Deals-Img">
              <img src={img} alt="shampoo sim'shop" />
            </div>
            <div className="Home-Deals-Text">
              <p style={{ fontWeight: "bold", margin: " 0" }}>
                PACKS SHAMPOING, APRÈS-SHAMPOOING ET NETTOYANT POUR LE VISAGE
              </p>
              <p>
                Découvrez notre pack de soins complet pour des cheveux et une
                peau éclatants ! Ce coffret réunit un shampoing hydratant, un
                après-shampooing nourrissant pour des cheveux doux et brillants,
                ainsi qu’un nettoyant visage qui purifie délicatement la peau.
                Un rituel beauté simple et efficace pour prendre soin de vous au
                quotidien, de la tête aux pieds !
              </p>
              <div className="Deals-Price">
                <p>
                  <span>110.00</span>£
                </p>
                <p>175.00£</p>
              </div>
              <Link to={"/shop/boucle/6"}>
                <button onClick={() => addDeal()}>VOIR +</button>
              </Link>
              <div className="Deals-Rest">
                <p>
                  soldes restantes:<span>{progresstock} </span>
                </p>
                <p>
                  disponible:<span>{stock}</span>
                </p>
                <div
                  className="Deals-Progress"
                  style={{ width: `${progressvalue1}%` }}
                ></div>
              </div>
              <p style={{ fontWeight: "bold" }}>offre valable:</p>
              <div className="Deals-Date">
                <div className="Deals-Time">
                  <p>
                    {sec / 3600 < 10 ? "0" : ""}
                    {Math.floor(sec / 3600)}
                  </p>
                  <p>heures</p>
                </div>
                <div className="Deals-Time">
                  <p>
                    {(sec % 3600) / 60 < 10 ? "0" : ""}
                    {Math.floor((sec % 3600) / 60)}{" "}
                  </p>
                  <p>Minutes</p>
                </div>
                <div className="Deals-Time">
                  <p>
                    {sec % 60 < 10 ? "0" : ""}
                    {Math.floor(sec % 60)}
                  </p>
                  <p>secondes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Home-Deals-Right">
            <div className="Home-Deals-Img">
              <img src={img1} alt="shampoo sim'shop" />
            </div>
            <div className="Home-Deals-Text">
              <p style={{ fontWeight: "bold" }}>BOUCLES D'OREILLE</p>
              <p>
                Ajoutez une touche d’élégance à votre style avec notre
                collection de boucles d'oreilles ! Que vous préfériez des
                créoles audacieuses, des pendants délicats ou des clous
                discrets, ces boucles d’oreilles sublimeront toutes vos tenues.
                Fabriquées avec soin, elles allient style et qualité pour un
                look chic en toute occasion.
              </p>
              <div className="Deals-Price">
                <p>
                  <span>150.00</span>£
                </p>
                <p>200.00 £</p>
              </div>
              <Link to={"/shop/boucle/1"}>
                <button onClick={() => addDeal2()}>VOIR +</button>
              </Link>
              <div className="Deals-Rest">
                <p>
                  soldes restantes:<span>{progresstock2} </span>
                </p>
                <p>
                  disponible:<span>{stock2}</span>
                </p>
                <div
                  className="Deals-Progress"
                  style={{ width: `${progressvalue2}%` }}
                ></div>
              </div>
              <p style={{ fontWeight: "bold" }}>offre valable:</p>
              <div className="Deals-Date">
                <div className="Deals-Time">
                  <p>
                    {sec / 3600 < 10 ? "0" : ""}
                    {Math.floor(sec / 3600)}
                  </p>
                  <p>heures</p>
                </div>
                <div className="Deals-Time">
                  <p>
                    {(sec % 3600) / 60 < 10 ? "0" : ""}
                    {Math.floor((sec % 3600) / 60)}{" "}
                  </p>
                  <p>Minutes</p>
                </div>
                <div className="Deals-Time">
                  <p>
                    {sec % 60 < 10 ? "0" : ""}
                    {Math.floor(sec % 60)}
                  </p>
                  <p>secondes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
