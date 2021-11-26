import React, {Component} from "react";
import "./App.css"

//Components
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title="MI SOL" a1="Electricas" a2="ElectroAcusticas" a3="Acusticas" a4="Criollas" />
        <div className = "contenedor">
          <ItemListContainer />
        </div>
      </div>
    )
  }
}


export default App