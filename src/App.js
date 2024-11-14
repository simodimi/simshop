import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Heart from './pages/Heart';
import LogIn from './pages/LogIn';
import Logout from './pages/Logout';
import Shopping from './pages/Shopping';
import Telephone from './containers/Telephone';
import TelephoneNext from './containers/TelephoneNext';
import { useState } from 'react';
import StripeProvider from './pages/StripeProvider';
import Buy from './pages/Buy';
import PasswordForget from './pages/PasswordForget';
import Vestes from './containers/Vestes';
import VestesNext from './containers/VestesNext';
import Tv from './containers/Tv';
import TvNext from './containers/TvNext';
import Tshirt from './containers/Tshirt';
import TshirtNext from './containers/TshirtNext';
import Sport from './containers/Sport';
import SportNext from './containers/SportNext';
import Sacmain from './containers/Sacmain';
import SacmainNext from './containers/SacmainNext';
import Sacdos from './containers/Sacdos';
import SacdosNext from './containers/SacdosNext';
import Robots from './containers/Robots';
import RobotsNext from './containers/RobotsNext';
import Robes from './containers/Robes';
import RobesNext from './containers/RobesNext';
import Parfums from './containers/Parfums';
import ParfumsNext from './containers/ParfumsNext';
import Pantalons from './containers/Pantalons';
import PantalonsNext from './containers/PantalonsNext';
import Jupes from './containers/Jupes';
import JupesNext from './containers/JupesNext';
import Gants from './containers/Gants';
import GantsNext from './containers/GantsNext';
import Cravattes from './containers/Cravattes';
import CravattesNext from './containers/CravattesNext';
import Costumes from './containers/Costumes';
import CostumesNext from './containers/CostumesNext';
import Chaussures from './containers/Chaussures';
import ChaussuresNext from './containers/ChaussuresNext';
import BouclesOreille from './containers/BouclesOreille';
import BouclesOreilleNext from './containers/BouclesOreilleNext';
import AppareilElectronique from './containers/AppareilElectronique';
import AppareilElectroniqueNext from './containers/AppareilElectroniqueNext';
import Error from './pages/Error';

function App() {
  const [selectedItems, setselectedItems] = useState([]);
  const addshop=(items)=>{
    setselectedItems((prevselect)=>{//vérifions si il existe,et Vérifie si l'ID et le nom de l'élément actuel (p) correspondent à ceux de l'élément que nous cherchons à mettre à jour (items).
      const existing=prevselect.find((p)=> p.id ===items.id && p.nom ===items.nom);
      if(existing){ 
        return prevselect.map((p)=>
          /*Cette condition vérifie si l'article p (qui représente un article déjà présent dans le panier) a le même `id` et `nom` que `items` (le nouvel article à ajouter ou mettre à jour) . - Si cette condition est vraie, cela signifie que l'article `p` dans le panier est le même que l'article `items` que l'on tente d'ajouter. On doit donc mettre à jour sa quantité. - Si cette condition est fausse, cela signifie que l'article `p` dans le panier est différent de `items`, donc on ne doit pas le modifier.  */
          p.id ===items.id && p.nom ===items.nom?{...p,quantity:p.quantity+1}:p
        ) 
      } 
      else{
      setCompteurArticle((prev) => prev + 1);
        return [...prevselect,{...items,quantity:1}];
      }    
    }) 
  }
 const [compteur, setcompteur] = useState([])
 const addpaiement=(x)=>{
  setcompteur(x)
 } 
 //compteur article sidebar
 const [CompteurArticle, setCompteurArticle] = useState(0)
 const addcompteur=()=>{
  setCompteurArticle((prev)=>prev +1);
 }
 //compteur heart

 const [compteurfavoris, setcompteurfavoris] = useState(0);

//add favoris

const [favoris, setfavoris] = useState([]);
const handlestar = (items) => {
  setfavoris((prev) => {
    const existing = prev.find((p) => p.id === items.id);
    if (existing) {
      setcompteurfavoris((prev) => prev - 1);
      return prev.filter((p) => p.id !== items.id);
    } else {
      setcompteurfavoris((prev) => prev + 1);
      return [...prev, items];
    }
  });
};
  return (
    <div className="App">
     <BrowserRouter>
     <Topbar CompteurArticle={CompteurArticle} compteurfavoris={compteurfavoris} /> 
     <StripeProvider>
     <Routes>
     <Route path='/' element={<Home handlestar={handlestar} favoris={favoris} setcompteurfavoris={setcompteurfavoris} />} />
     <Route path='/shop' element={<Shop/>} />
     <Route path='/blog' element={<Blog/>} />
     <Route path='/about' element={<About/>} /> 
     <Route path='/contact' element={<Contact/>} />
     <Route path='/heart' element={<Heart favoris={favoris} setfavoris={setfavoris}  setcompteurfavoris={setcompteurfavoris} />} />
     <Route path='/login' element={<LogIn/>} />
     <Route path='/logout' element={<Logout/>} />
     <Route path='/shopping' element={<Shopping selectedItems={selectedItems} setselectedItems={setselectedItems} addpaiement={addpaiement} CompteurArticle={CompteurArticle} setCompteurArticle={setCompteurArticle}  />} />
     <Route path='/shop/telephone' element={<Telephone/>} />
     <Route path='/shop/telephone/:id' element={<TelephoneNext addshop={addshop}/>} />addcompteur
     <Route path='/shop/veste' element={<Vestes/>} />
     <Route path='/shop/veste/:id' element={<VestesNext addshop={addshop} addcompteur={addcompteur}/>} />
     <Route path='/shop/tv' element={<Tv/>} />
     <Route path='/shop/tv/:id' element={<TvNext addshop={addshop} addcompteur={addcompteur} />} />
     <Route path='/shop/tshirt' element={<Tshirt/>} />
     <Route path='/shop/tshirt/:id' element={<TshirtNext addshop={addshop} />} />
     <Route path='/shop/sport' element={<Sport/>} />
     <Route path='/shop/sport/:id' element={<SportNext addshop={addshop} />} />
     <Route path='/shop/sacmain' element={<Sacmain/>} />
     <Route path='/shop/sacmain/:id' element={<SacmainNext addshop={addshop} />} />
     <Route path='/shop/sacdos' element={<Sacdos/>} />
     <Route path='/shop/sacdos/:id' element={<SacdosNext addshop={addshop}  />} />
     <Route path='/shop/robot' element={<Robots/>} />
     <Route path='/shop/robot/:id' element={<RobotsNext addshop={addshop} />} />
     <Route path='/shop/robe' element={<Robes/>} />
     <Route path='/shop/robe/:id' element={<RobesNext addshop={addshop} />} />
     <Route path='/shop/parfum' element={<Parfums/>} />
     <Route path='/shop/parfum/:id' element={<ParfumsNext addshop={addshop} />} />
     <Route path='/shop/pantalon' element={<Pantalons/>} />
     <Route path='/shop/pantalon/:id' element={<PantalonsNext addshop={addshop} />} />
     <Route path='/shop/jupe' element={<Jupes/>} />
     <Route path='/shop/jupe/:id' element={<JupesNext addshop={addshop} />} />
     <Route path='/shop/gant' element={<Gants/>} />
     <Route path='/shop/gant/:id' element={<GantsNext addshop={addshop} />} />
     <Route path='/shop/cravatte' element={<Cravattes/>} />
     <Route path='/shop/cravatte/:id' element={<CravattesNext addshop={addshop} />} />
     <Route path='/shop/costume' element={<Costumes/>} />
     <Route path='/shop/costume/:id' element={<CostumesNext addshop={addshop} />} />
     <Route path='/shop/chaussure' element={<Chaussures/>} />
     <Route path='/shop/chaussure/:id' element={<ChaussuresNext addshop={addshop}   />} />
     <Route path='/shop/boucle' element={<BouclesOreille/>} />
     <Route path='/shop/boucle/:id' element={<BouclesOreilleNext addshop={addshop}  />} />
     <Route path='/shop/appareil' element={<AppareilElectronique/>} />
     <Route path='/shop/appareil/:id' element={<AppareilElectroniqueNext addshop={addshop} />} />
     <Route path='/forget' element={<PasswordForget/>} />
     <Route path='/paiement' element={<Buy compteur={compteur} />} />
     <Route path='*' element={<Error/>} />
     </Routes>
     </StripeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
