
import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Payment() {

    const cartArrr= useSelector(
        (state) => state.carts.cartData
      );

    return (
        <div className="payment">
            <h1><Link to="/checkout">Checkout ({cartArrr?.length}) items</Link></h1>
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>Resaldar Nagar, Ranchi</p>
                        <p>Jharkhand, India</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cartArrr.map(item =>(
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price= {item.price}
                            image={item.image}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="button__container">
                    <button><Link to="/orderconfirm">Place Order</Link></button>
                </div>
                
            </div>
        </div>
    )
}

export default Payment
