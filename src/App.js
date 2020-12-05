import React, {useState} from 'react';
import './App.css';
import Person from './Person.js';

// functional component
const App = () => {
  const [products, setProducts] = useState([
    {name : 'tv samsung', size :"40", price: 1500},
    {name : 'tv Lg', size :"50", price: 2500},
    {name : 'tv sony', size :"60", price: 3500},
  ])
  const [open, setOpen] = useState(false)
  const change = () => {
    setOpen(!open)
  }
  return (
    <div className="App">
      {/* {
        products.map(product => 
          <Person name = {product.name} size = {product.size} price = {product.price}/>
        )
      } */}
      <button onClick={change}>show</button>
      {open && <p>test</p>}
      {/* {(open=="maha") ? <p>ok</p> : <p>non</p>} */}
    </div>
  );
}

export default App;
