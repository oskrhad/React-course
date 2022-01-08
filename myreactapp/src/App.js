import {Component} from "react"
import Products from "./components/Products";
import logo from './logo.svg';
import './App.css';

class App extends Component  {
  state={
    productos:[
      {name:"Producto 1",price:2},
      {name:"Producto 2",price:3},
      {name:"Producto 3",price:4}

    ]
  }
  render(){
    return (
        <Products/>
    )
  }
}

export default App;
