
import React, { useState } from 'react';
import './App.css';

function App() {
  const [appState, changeState] = useState({
    activeObject: null,
    colores: [{color: 'rojo'}, {color: 'amarillo'}, {color: 'verde'}]
  });


function toggleActive(index){
  changeState({ ...appState, activeObject: appState.colores[index]})
}

function toggleActiveStyles(index){
  if (appState.colores[index] === appState.activeObject) {
    return "glow";
  } else {
    return "notglow"
  }
}
  return (
    <div className="semaforo">
        <div className="cable"></div>
        <div className="container">
            {appState.colores.map((e,index) => (
              <div key={index} className={`circle ${e.color} ${toggleActiveStyles(index)}`} onClick={() => {toggleActive(index);}} ></div>
            ))}
        </div>
    </div>
  );
}

export default App;
