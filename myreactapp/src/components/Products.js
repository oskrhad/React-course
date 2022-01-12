//  console.log('New Component here'

import { Component } from "react";
import Product from "./Product";


class Products extends Component{
    render(){
        const {products, addToCart}=this.props
        return (
            <div>
                {products.map((item)=>
                    <Product
                        addToCart={()=>addToCart(item)}
                        key={item.name}
                        product={item}
                    />
                )
                }
            </div>
        )
    }
    
}

export default Products
