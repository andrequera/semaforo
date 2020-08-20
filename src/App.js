import React, { useState } from 'react';
// importar useState
import './App.css';


function App() {
  const [state, setState] = useState("apagado")
  // const prenderluz = () => {
    // if (state === "apagado") {
    //   setState("encendida")
    // }
    // else if (state === "encendida") {
    //   setState("apagado")

    // }
  // }
  return (

    <div className="cajanegra">
      <div className={"rojo " + (state === "rojo"? "encendida" : "")} onClick= {()=> setState("rojo")}> </div>
      <div className={"amarillo " + (state === "amarillo"? "encendida" : "")} onClick={()=> setState("amarillo")}></div>
      <div className={"verde " + (state === "verde"? "encendida" : "")} onClick={()=> setState("verde")}></div>
    </div>



  );
  // recuerda el frag
}

export default App;
