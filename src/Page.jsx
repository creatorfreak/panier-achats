import './Page.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';
import useLocalStorageState from './hooks/useLocalStorageState';
import { Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';

export default function Page() {
/*  // Exemple de comment je vais stocker les articles dans le panier
  // const bonPanier = ({
  //   prd0001: {prix: 10.99, qte: 2},
  //   prd0005: {prix: 24.95, qte: 1}
  // })

  const etatPanier = useState(() => {
    const panierLS = window.localStorage.getItem('panier-pvt-gr1');
    return (panierLS !== null) ? JSON.parse(panierLS) : {};
  }); 
  //useReducer{}
  const [panier, setPanier] = etatPanier;

  // Sauvegarder le panier dans localStorage
  // Comme ce code est un effet secondaire de votre composant
  // (qui doit être exécuté à chaque mutation du panier) la bonne façon de 
  // le coder en respectant la manière React est d'utiliser un hook spécialisé "useEffect"
  useEffect(() => {
    window.localStorage.setItem('panier-pvt-gr1', JSON.stringify(panier))
  }, [panier]);*/
  const etatPanier = useLocalStorageState({}, "panier-achat")
  

  return (
    <div className="Page">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <Switch>
          <Route path="/" component={Accueil} exact />
          <Route path="/nos-produits" exact >
            <ListeProduits etatPanier={etatPanier} />
          </Route> 
          <Route path="/a-propos-de-magasin" exact >
            <Apropos />
          </Route>
          <Route path="/contact"  exact >
            <Contact />
          </Route>
        </Switch>
      </section>
      <Pied2Page />
    </div>
  );
}