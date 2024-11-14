import React from "react";
import "../style/contact.css";
import footer14 from "../assets/footer/phone.png";
import footer7 from "../assets/footer/courrier.png";
const Contact = () => {
  return (
    <div className="MainContact">
      <h4 id="MainCntactName">Contactez-nous</h4>
      <h4>Formulaire de contact</h4>
      <form>
        <label for="email">Email :</label>
        <input type="email" placeholder="Votre Adresse email" required />
        <label for="subject">Objet :</label>
        <input type="text" placeholder="objet de votre message" required />
        <label for="message">Message :</label>
        <textarea placeholder="Votre message ici" required rows="10" />
        <button type="submit" id="boutonContact">
          Envoyer le message
        </button>
      </form>
      <div className="MainContactNumber">
        <h4>Adresse :</h4>
        <p>Sim'Shop</p>
        <p>
          <img src={footer14} alt="" />
          <a href="tel:+33 07 51 25 50 97">+33 07 51 25 50 97</a>
        </p>
        <p>
          <img src={footer7} alt="" />
          <a href="mailto:simodimitri08@gmail.com">simodimitri08@gmail.com</a>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.1887639218126!2d5.408358776030244!3d43.26842107723249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8b9c4cd6bbf%3A0x9365446ec3ff7e01!2sR%C3%A9s%20le%20Parc%20Fleuri%2C%20Marseille!5e0!3m2!1sfr!2sfr!4v1717451002890!5m2!1sfr!2sfr"
          width="100%"
          height="500"
          /* style="border:0;"*/
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
