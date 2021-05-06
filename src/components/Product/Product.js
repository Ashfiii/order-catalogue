import React, { useEffect, useState } from 'react';
import './Product.css';
import {useDispatch} from 'react-redux';

function Product({id, title, price, image}) {

     const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    Rs <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="ProductImage"/>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
