import React from 'react';

import Navbar from '../Navbar';
import { CartProvider } from 'react-use-cart';
import MainProduct from './MainProduct';
import Cart from './Cart';
// import ProductItems from '../ProductItems';
// import Productdata from '../Productdata';


function Products() {

    return (

        <div>

            <Navbar/>
            <CartProvider>
                <MainProduct/>
                <Cart/>
            </CartProvider>
        </div>
        
           
        )


    
}


export default Products;