import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);


    useEffect(() => {
        //console.log('call for storedCart')
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                console.log(addedProduct, storedCart[id]);
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
                //console.log(addedProduct)
            }
        }
        setCart(saveCart);
        //console.log('end storedCart')
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        //console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        //console.log(exists.quantity);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            //console.log(rest)
            //console.log(exists)
            exists.quantity = exists.quantity + 1;
            // console.log(exists.quantity)
            newCart = [...rest, exists]
        }
        setCart(newCart)
        /*const newCart = [...cart, product];
        setCart(newCart);*/
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;