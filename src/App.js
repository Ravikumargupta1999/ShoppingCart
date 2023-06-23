import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';

import CustomItemConext, { itemContext } from './itemContext';


function App() {
  
  return (
    <CustomItemConext>
      <div className='App'>
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>

    </CustomItemConext>


  );
}
export default App;
