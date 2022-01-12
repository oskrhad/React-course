 import { Component } from "react";
import Add from "./Add";
 class Product extends Component{
     render(){
         const{product, addToCart}=this.props
         return (
             <p>
                 {product.name}
                 <Add onClick={()=>addToCart(product)}>
                     Agrega al carro
                 </Add>
             </p>
         )
     }
 }
 export default Product