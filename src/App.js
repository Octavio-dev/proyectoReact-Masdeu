import react, {Component} from "react";
import "./App.css"

//render() solo se usa en class

class App extends Component {
  render() {
    return (
      <div className = "header">
        <h1>Hola crack</h1>
        <h2>Que onda</h2>
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