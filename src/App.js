import React, {Component} from "react";
import "./App.css"

//React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//CONTEXT
import { ItemProvider } from "./ItemContext";
import { CartProvider } from "./cartContext";

//Components
import Header from "./components/Header/Header"
import ItemListContainer from "./views/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import Cart from "./views/Cart/Cart";



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
            <Route path="/category:id" element={<ItemDetailContainer />} />
            <Route path="/item:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart />} />
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