import React, {Component} from "react";
import "./App.css"

//Components
import Header from "./components/Header/Header"
import UserCard from "./components/UserCard/UserCard";
import lesPaul from "./components/UserCard/lesPaul.png"
import lesPaul02 from "./components/UserCard/lesPaul02.jpg"
import lesPaul03 from "./components/UserCard/lesPaul03.jpg"

//render() solo se usa en class

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Percusion" a1="Electricas" a2="ElectroAcusticas" a3="Acusticas" a4="Criollas" />
        <div className = "contenedor">
          <UserCard name = "Les Paul 01" date = "$1200" description = "Saxofon" img ={lesPaul}/>
          <UserCard name = "Les Paul 02" date = "$1200" description = "bateria" img ={lesPaul02}/>
          <UserCard name = "Les Paul 03" date = "$1200" description = "Violin" img ={lesPaul03}/>
        </div>
      </div>
    )
  }
}

/* class App extends Component {
  render() {

    return (
      <Fragment>
        <h1>Hola crack</h1>
        <h2>Que onda</h2>
      </Fragment>
    )
  }
} */

export default App