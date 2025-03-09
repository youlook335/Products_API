import './App.css'
import React from "react";
import API from './Component/API';
import ShoppingAPI from './Component/ShoppingAPI';
import CarParts from './Component/CarParts';

function App() {

  return (
    <>

      {/* <API/> */}
      <ShoppingAPI/>
      <CarParts/>
    </>
  )
}

export default App
