import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'


const Orders = () => {

    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        //console.log(product)
        const rest = cart.filter(cartProduct => cartProduct.id !== product.id)
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>

            <div className='review-item-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={() => navigate("/inventory")}>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;