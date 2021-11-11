import React, {Component} from "react";
import "./App.css"

//Components
import Header from "./components/Header/Header"
import UserCard from "./components/UserCard/UserCard";
import logo from "./components/Header/logoElednRing.jpg"

//render() solo se usa en class

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hola" subtitle ="que haces" img = {logo}/>
        <div className = "contenedor">
          <UserCard name = "potaxio" date = "Se unio en 11/11/21" description = "developer prefesional" img ="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
          <UserCard name = "ElGero" date = "Se unio en 12/11/21" description = "developer prefesional" img ="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
          <UserCard name = "Guito" date = "Se unio en 13/11/21" description = "developer prefesional" img ="https://react.semantic-ui.com/images/avatar/large/matthew.png"/>
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