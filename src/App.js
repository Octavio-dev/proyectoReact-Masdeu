import React, {Component} from "react";
import "./App.css"

//React Router Dom

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header/Header"
import ItemListContainer from "./views/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";



class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header title="MI SOL" a1="Electricas" a2="ElectroAcusticas" a3="Acusticas" a4="Criollas" />
        <div className = "contenedor">
          <Routes >
            <Route  path="/" element={<ItemListContainer />}/>
            <Route path="/item:id" element={<ItemDetailContainer/>} />
          </Routes>
        </div>
      </div>
      </Router>
    )
  }
}


export default App