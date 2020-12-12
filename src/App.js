import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Femme from './Pages/Femme'
import Homme from './Pages/Homme'
import Enfant from './Pages/Enfant'
import Categorie from './Pages/Categorie'
// functional component
const App = () => {


   return (
     <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/femme' component={Femme}/>
      <Route exact path='/homme' component={Homme}/>
      <Route exact path='/enfant' component={Enfant}/>
      <Route exact path='/categorie' component={Categorie}/>
     </BrowserRouter>
  );
}

export default App;
