import React, {Component} from "react";
import "./App.css"

//Components
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//imagenes provisionales
import lesPaul from "./components/ItemListContainer/lesPaul.png"
import lesPaul02 from "./components/ItemListContainer/lesPaul02.jpg"
import lesPaul03 from "./components/ItemListContainer/lesPaul03.jpg"

//variables
const stock = 0

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="Percusion" a1="Electricas" a2="ElectroAcusticas" a3="Acusticas" a4="Criollas" />
        <div className = "contenedor">
          <ItemListContainer name = "Les Paul 01" date = "$1200" description = "Saxofon" img ={lesPaul} />
          <ItemListContainer name = "Les Paul 02" date = "$1200" description = "bateria" img ={lesPaul02} />
          <ItemListContainer name = "Les Paul 03" date = "$1200" description = "Violin" img ={lesPaul03} />
        </div>
      </div>
    )
  }
}


export default App