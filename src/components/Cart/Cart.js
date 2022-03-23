import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity += product.quantity;
        total += product.price * product.quantity
        shipping += product.shipping;
    }

    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = parseFloat(total + shipping + tax).toFixed(2); //always get .00 and parseFloat(string to float) 

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;