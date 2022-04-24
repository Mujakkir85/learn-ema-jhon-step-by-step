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

    const [cart, setCart] = useCart();

    const navigate = useNavigate()

    const handleRemoveProduct = product => {
        //console.log(product)
        const rest = cart.filter(cartProduct => cartProduct._id !== product._id)
        setCart(rest);
        removeFromDb(product._id)
    }
    return (
        <div className='shop-container'>

            <div className='review-item-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={() => navigate("/shipment")}>Proceed Shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;