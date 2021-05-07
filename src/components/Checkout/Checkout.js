import React from 'react';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { getCartTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Checkout() {

    const history = useHistory();
    const cartArrr= useSelector(
        (state) => state.carts.cartData
      );

    return (
        <div className="checkout">
            <h2 className="checkout__title">Shopping Cart</h2>
            <div className="checkout__total">
                <p>Subtotal ({cartArrr.length} items): <strong>{getCartTotal(cartArrr)}</strong></p>
                {cartArrr.length===0 ? <button className="hideButton">Proceed to Checkout</button> :
                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>}
            </div>
            <div className="checkout__info">
                <div>
                    
                    {cartArrr.length===0 ? <h2 className="checkout__header">No Items in the Cart</h2>: 
                    cartArrr.map(item =>(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price= {item.price}
                        image={item.image}
                    />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
