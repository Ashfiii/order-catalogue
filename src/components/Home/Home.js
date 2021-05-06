import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home({data}) {

   console.log('home',data);

    return (
        <div className="home">
            <div className="home__row">
                {data.map((item)=>
                    <Product id={item.id} title={item.title} price={item.price} image={item.image}/>
               
                )}
                {/* <Product 
                id='1'
                title='LG 126 cms (50 inches) 4K Ultra HD Smart LED TV 50UM7700PTA | with Built-in Alexa (Ceramic Black)'
                price= '60000'
                image={product1}
                />
                <Product 
                id='2'
                title='Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)'
                price= '60000'
                image={product2}
                /> */}
               
                
                
            </div>
         </div>
    )
}

export default Home
