import {Component} from "react"
import Products from "./components/Products";
import logo from './logo.svg';
import './App.css';
import Product from "./components/Product";

class App extends Component  {
  state={
    products:[
      {name:"Producto 1",price:2},
      {name:"Producto 2",price:3},
      {name:"Producto 3",price:4}

    ],
    cart:[]
  }
  addToCart=(item)=>{
      const {cart}= this.state
      if(cart.find(each=> each.name===item.name)){
        let updatedCart=cart.map(each=>each.name===item.name?({...each,amount:each.amount + 1}):each)
        
        return this.setState({
          cart:[...updatedCart] 
        })
      }
      return this.setState({
          cart:this.state.cart.concat({...item,amount:1})
        })
  }
  render(){
    console.log(this.state.cart)
    //CartBubble 
        // let cartLength= this.state.cart.reduce((acc,item)=>acc + item.amount,0)
        // console.log(cartLength)
    // CartBubble
    return (
        <Products
          addToCart={this.addToCart}
          products={this.state.products}
        />
    )
  }
}

export default App;
