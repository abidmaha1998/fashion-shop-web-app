import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Femme from './Pages/Femme'
import Homme from './Pages/Homme'
import Enfant from './Pages/Enfant'
import Categorie from './Pages/Categorie'
import SeulItem from './Pages/SeulItem';
import Panier from './Pages/Panier';
import validatecommand from './Pages/validatecommand';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Commandes from './Pages/Commandes';
import Compte from './Pages/Compte';
import admin from './Pages/admin';
import adminCategorie from './Pages/adminCategorie';
import adminCommande from './Pages/adminCommande';
import adminProduit from './Pages/adminProduit';
import admindashbord from './Pages/admindashbord';
import adminAjoutCat from './Pages/adminAjoutCat';
import adminAjoutProd from './Pages/adminAjoutProd';
// functional component
const App = () => {


   return (
     <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/femme' component={Femme}/>
      <Route exact path='/homme' component={Homme}/>
      <Route exact path='/enfant' component={Enfant}/>
      <Route exact path='/categorie' component={Categorie}/>
      <Route exact path='/seulItem' component={SeulItem}/>
      <Route exact path='/panier' component={Panier}/>
      <Route exact path='/validatecommand' component={validatecommand}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/registration' component={Registration}/>
      <Route exact path='/Commandes' component={Commandes}/>
      <Route exact path='/Compte' component={Compte}/>
      <Route exact path='/admin' component={admin}/>
      <Route exact path='/admin/adminCategorie' component={adminCategorie}/>
      <Route exact path='/admin/adminCommande' component={adminCommande}/>
      <Route exact path='/admin/adminProduit' component={adminProduit}/>
      <Route exact path='/admin/admindashbord' component={admindashbord}/>
      <Route exact path='/admin/adminAjoutCat' component={adminAjoutCat}/>
      <Route exact path='/admin/adminAjoutProd' component={adminAjoutProd}/>
      
     </BrowserRouter>
  );
}

export default App;
