import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const ProductContext = React.createContext();
export default class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handledetail = () =>{
        console.log("Hello from handle");
    }
    addToCart = () =>{
        console.log("Hello from Add to cart");
    }
    render() {
        
        return (
            <ProductContext.Provider value = {{...this.state,handledetail:this.handledetail,addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
