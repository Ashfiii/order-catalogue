import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import product1 from '../../images/tv.jpg';
import product2 from '../../images/samsung.png';

function Home() {

    const [data,setData]= useState([]);

     const getData=()=>{
        fetch('product.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
          .then(function(response){
            //console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          }
        );
        
      }

      useEffect(()=>{
        getData()
      },[])
      
    return (
        <div className="home">
            <div className="home__row">
                {data.map((item)=>
                    <Product id={item.id} title={item.title} price={item.price}/>
               
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
