import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";
import footer1 from "../assets/footer/plante.png";
import footer2 from "../assets/footer/avis.png";
import footer3 from "../assets/footer/bestseller.png";
import footer4 from "../assets/footer/bonnesnotes.png";
import footer5 from "../assets/footer/cartesbancaires.png";
import footer6 from "../assets/footer/cosmetique.png";
import footer7 from "../assets/footer/courrier.png";
import footer8 from "../assets/footer/electronique.png";
import footer9 from "../assets/footer/fashion.png";
import footer10 from "../assets/footer/information.png";
import footer11 from "../assets/footer/livraison.png";
import footer12 from "../assets/footer/note.png";
import footer13 from "../assets/footer/nouveauproduit.png";
import footer14 from "../assets/footer/phone.png";
import footer15 from "../assets/footer/sante.png";
import footer16 from "../assets/footer/vente.png";
import footer17 from "../assets/footer/true.png";
import footer18 from "../assets/footer/false.png";
import footer19 from "../assets/footer/attention.png";
const Footer = () => {
  return (
    <div className="Main-Footer">
      <div className="Footer-Email">
        <div className="Footer-Email-Left">
          <p>Abonnez-vous à notre newsletter</p>
          <p>obtenir des mises à jour pour des nouvelles offres</p>
        </div>
        <div className="Footer-Email-Right">
          <div className="Footer-Email-Insert">
            <div className="Email-input">
              <input type="email" placeholder="Entrer votre email" />
            </div>
            <div className="Email-button">
              <button>Envoyer</button>
            </div>
          </div>
          <div className="Footer-verification-Email">
            <p>
              {" "}
              <span>
                <img src={footer17} alt="" /> Consulter votre boîte Email
              </span>{" "}
              {/*  <span>
                <img src={footer18} alt="" />
                Adresse email non valide
              </span>
              <span>
                <img src={footer19} alt="" />
                Email déjà existant
              </span>
              */}
            </p>
          </div>
        </div>
      </div>
      <div className="Footer-Text">
        <div className="Footer-Text-Element">
          <h5>catégories populaires</h5>
          <p>
            <img src={footer9} alt="" />
            <Link to="/shop/tshirt">Fashion</Link>
          </p>
          <p>
            <img src={footer8} alt="" />
            <Link to="/shop/appareil">électronique</Link>
          </p>
          <p>
            <img src={footer6} alt="" />
            <Link to="/shop/parfum">cosmétique</Link>
          </p>
          <p>
            <img src={footer15} alt="" />
            <Link to="/shop/chaussure">Chaussure</Link>
          </p>
          <p>
            <img src={footer1} alt="" />
            <Link to="/shop/telephone">Téléphone</Link>
          </p>
        </div>
        <div className="Footer-Text-Element">
          <h5>notre compagnie</h5>
          <p>
            <img src={footer11} alt="" />
            <Link to="/about">Livraison</Link>
          </p>
          <p>
            <img src={footer4} alt="" />
            <Link to="/about">mentions légales</Link>
          </p>
          <p>
            <img src={footer12} alt="" />
            <Link to="/about">Thèmes et conditions</Link>
          </p>
          <p blanck>
            <img src={footer10} alt="" />
            <Link to="/about"> à propos de nous </Link>
          </p>
          <p>
            <img src={footer5} alt="" />
            <Link to="/about">payement sécurisé</Link>
          </p>
        </div>
        <div className="Footer-Text-Element">
          <h5> Produits</h5>
          <p>
            <img src={footer13} alt="" />
            <a href="#lienArrivals">nouveaux produits</a>
          </p>
          <p>
            <img src={footer3} alt="" />
            <a href="#lienArrivals">meilleures ventes</a>
          </p>
          <p>
            <img src={footer16} alt="" />
            <a href="#lienArrivals">soldes</a>
          </p>
        </div>

        <div className="Footer-Text-Element">
          <h5>contacts</h5>
          <p>
            <img src={footer14} alt="" />
            <a href="tel:+33 07 51 25 50 97">+33 07 51 25 50 97</a>
          </p>
          <p>
            <img src={footer7} alt="" />
            <a href="mailto:simodimitri08@gmail.com">simodimitri08@gmail.com</a>
          </p>
          <p>
            <img src={footer2} alt="" />
            <Link to="/shop">Laisser un avis</Link>
          </p>
        </div>
        <div className="Footer-Text-Element">
          <h5>Localisation</h5>
          <div className="Footer-Localisation">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.1887639218126!2d5.408358776030244!3d43.26842107723249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8b9c4cd6bbf%3A0x9365446ec3ff7e01!2sR%C3%A9s%20le%20Parc%20Fleuri%2C%20Marseille!5e0!3m2!1sfr!2sfr!4v1717451002890!5m2!1sfr!2sfr"
              width="300"
              height="300"
              /* style="border:0;"*/
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="Footer-Copyright">
        <p>Copyright © 2024 SIM'SHOP tout droit reservé</p>
      </div>
    </div>
  );
};

export default Footer;
