import React from "react";
import "../style/about.css";

const About = () => {
  return (
    <div className="MainAbout">
      <h4 id="MainAboutName">About Sim'Shop</h4>
      <h4>Notre histoire</h4>
      <p>
        <span>Sim'Shop</span> a été fondé avec la vision de transformer
        l'expérience d'achat en ligne. Ce qui a commencé comme une petite
        entreprise est aujourd'hui devenu un site de e-commerce florissant,
        soutenu par une base de clients fidèles et un engagement vers
        l'excellence.
      </p>
      <h4>Qui sommes nous ?</h4>
      <p>
        {" "}
        <span>Sim'Shop</span> est une plateforme de vente en ligne innovante,
        dédiée à proposer des produits de qualité répondant aux besoins variés
        de chaque style de vie. Nous sélectionnons avec soin notre catalogue, en
        mettant l'accent sur la qualité, la durabilité et l’accessibilité, afin
        de vous offrir les meilleurs articles disponibles sur le marché. Chez
        Sim'shop, notre mission est de rendre le shopping en ligne non seulement
        pratique mais aussi inspirant et gratifiant
      </p>
      <h4>Notre mission</h4>
      <p>
        Notre mission est de fournir une gamme diversifiée de produits répondant
        à des goûts et des préférences variés. Nous croyons que le shopping doit
        être simple, transparent et satisfaisant. En nous concentrant sur des
        articles de qualité, en créant une communauté et en offrant un service
        client exceptionnel, nous aspirons à faire de Sim'shop le choix
        privilégié des acheteurs en ligne.
      </p>
      <h4>Nos valeurs</h4>
      <ul>
        <li>
          <span> Orientation client </span>: Nos clients sont au centre de
          chaque décision.{" "}
        </li>
        <li>
          <span>integrité </span>: La confiance et la transparence sont au cœur
          de nos relations.
        </li>
        <li>
          <span>innovation </span>: Nous accueillons le changement et améliorons
          constamment nos processus.
        </li>
        <li>
          <span>durabilité </span>: Nous faisons des choix écologiques pour un
          avenir meilleur.
        </li>
      </ul>
      <h4>Notre fonnctionnement</h4>
      <p>
        {" "}
        <span>Sim'Shop</span> fonctionne exclusivement en ligne, ce qui nous
        permet de réduire nos coûts de fonctionnement et de répercuter les
        économies sur nos clients. Nous collaborons avec un réseau mondial de
        fournisseurs, en sélectionnant uniquement les meilleurs pour vous
        proposer des produits uniques et de qualité.{" "}
      </p>
    </div>
  );
};

export default About;
