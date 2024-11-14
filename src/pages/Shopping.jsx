import React from "react";
import "../style/shopping.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import caddie from "../assets/payment/cad.jpeg";
import Flag from "../components/Flag";

const Shopping = ({
  selectedItems,
  setselectedItems,
  addpaiement,
  setCompteurArticle,
  CompteurArticle,
}) => {
  const navigate = useNavigate();
  const updatequantity = (index, quantity) => {
    //deux parametres index et quantity
    const newItems = [...selectedItems]; //la creation d'une copie du tableau selectedItems
    newItems[index].quantity = quantity; //mettre à jour la quantité de l'article specifié dans le tableau selectedItems
    setselectedItems(newItems); //mis à jour
  };
  const deleteItem = (index) => {
    const newItems = [...selectedItems];
    newItems.splice(index, 1);
    setselectedItems(newItems);
    setCompteurArticle(CompteurArticle - 1);
  };
  const Soustotal = () => {
    //calcul du soustotal des articles
    return selectedItems.reduce(
      //reduce permet de reduire le tableau à une simple valeur
      (acc, item) => acc + item.prix * item.quantity,
      0 //0 est la valeur initiale de l'accumulateur,l'accumulateur stocke la somme,item valeuractuel du tableau
    );
  };
  /*  const reduction = () => {
    return Math.round(Soustotal() * 0.15);
  };*/
  const dimi = Soustotal();
  return (
    <div className="Main-Shopping">
      {selectedItems.length === 0 ? (
        <div className="NoArticle">
          <button id="retourStep" onClick={() => navigate(-1)}>
            Retour
          </button>
          <p>AUCUN ARTICLE CHOISIT</p>
          <img src={caddie} alt="" />
        </div>
      ) : (
        <div className="">
          <button id="retourStep" onClick={() => navigate(-1)}>
            Retour
          </button>
          <div className="Shopping-Items">
            <table>
              <tr>
                <th>Photo</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Sous-total</th>
                <th>Supprimer</th>
              </tr>
              {selectedItems.map((items, index) => (
                <>
                  <tr key={index}>
                    <td>
                      <img src={items.photo} alt="" />
                    </td>
                    <td>
                      <p style={{ color: "green" }}>{items.nom} </p>
                      {items.taille && <p>Taille : {items.taille}</p>}
                      {items.taille && <p>Couleur : {items.Couleur}</p>}
                      <p>Marque : {items.marque}</p>
                      {items.pointure && <p>pointure: {items.pointure} </p>}
                      {items.size && <p>pointure: {items.size} </p>}
                      {items.volume && <p>volume: {items.volume} </p>}
                      {items.type_cheveux && (
                        <p>type_cheveux: {items.type_cheveux} </p>
                      )}
                    </td>
                    <td>{items.prix} £</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={items.quantity}
                        onChange={(e) => {
                          updatequantity(index, Number(e.target.value));
                        }}
                      />
                    </td>
                    <td>{items.prix * items.quantity} £</td>
                    <td>
                      <AiTwotoneDelete
                        id="drop"
                        onClick={() => deleteItem(index)}
                      />
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>
          <div className="Shopping-Card">
            <div className="Shopping-Card-Left">
              <form action="">
                <h4>localisation</h4>
                <p id="flag">
                  <Flag />
                </p>
                <p id="country">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="entrez votre adresse email"
                    required
                  />
                  <span>*</span>
                </p>
                <div className="Localisation-city">
                  <p>
                    <input type="text" name="" id="" placeholder="ville" />
                    <span>*</span>
                  </p>
                  <p>
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="code postal"
                    />
                    <span>*</span>
                  </p>
                </div>
                <p style={{ position: "relative" }}>
                  <input
                    type="text"
                    name=""
                    id="adresse"
                    placeholder="adresse complète"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "-10px",
                      color: "red",
                      fontSize: "20px",
                    }}
                  >
                    *
                  </span>
                </p>
                <p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="code réduction"
                  />{" "}
                </p>
                <button id="valider">valider</button>
              </form>
            </div>
            <div className="Shopping-Card-Right">
              <p style={{ fontWeight: "bold" }}>Total</p>
              <table>
                <tr>
                  <td>Sous-total</td>
                  <td>{Soustotal()} £</td>
                </tr>
                {/*    <tr>
                  <td>réduction</td>
                  <td>{reduction()} £</td>
                </tr>*/}
                <tr>
                  <td>frais Livraison</td>
                  <td>0 £</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{Soustotal()} £</td>
                </tr>
              </table>
              <p id="btn-paiement">
                <Link to={"/paiement"} onClick={() => addpaiement(dimi)}>
                  <MdOutlinePayment /> Paiement
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shopping;
