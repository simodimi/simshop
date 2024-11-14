import React from "react";
import "../style/choix.css";
import { choix } from "./data";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Choix = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay: true,
          arrows: false,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <div className="Main-Choix">
      <Slider {...settings}>
        {choix.map((p) => (
          <div className="Choix-Slide" key={p.id}>
            <Link to={p.Link}>
              <div className="Choix-Select">
                <div className="Choix-Select-Left">
                  <img src={p.photo} alt="" />
                </div>
                <div className="Choix-Select-Right">
                  <p>
                    {" "}
                    <span
                      style={{
                        fontSize: "11px",
                        textTransform: "capitalize",
                        fontWeight: "bold",
                      }}
                    >
                      {p.texte}{" "}
                    </span>{" "}
                  </p>
                  <p style={{ textDecoration: "underline", color: "red" }}>
                    {" "}
                    Voir tout
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Choix;
