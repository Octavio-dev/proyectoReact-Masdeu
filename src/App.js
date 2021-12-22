import React, {Component} from "react";

//CSS
import "./App.css"

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CONTEXT
import { ItemProvider } from "./context/ItemContext";
import { CartProvider } from "./context/cartContext";

//Components
import Header from "./components/Header/Header"

//Views
import ItemListContainer from "./views/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./views/CartContainer/CartContainer";
import ItemFilter from "./views/ItemFilter/ItemFilter";
import Formulario from "./views/Formulario/Formulario";



class App extends Component {

  render() {
    return (
      <ItemProvider>
      <CartProvider>
      <Router>
      <div className="App">
        <Header title="MI SOL"  />
        <div className = "contenedor">
          <Routes >
            <Route  path="/" element={<ItemListContainer />}/>
            <Route path="/category:marca" element={<ItemFilter />} />
            <Route path="/item:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
        </div>
      </div>
      </Router>
      </CartProvider>
      </ItemProvider>
    )
  }
}


export default App