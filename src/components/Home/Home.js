import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home({data}) {

   console.log('home',data);

//    const handleChange = ()=>{
       
//    }

    return (
        <div className="home">
            {/* <select onChange={handleChange}>
                {data.map(dataItem =>{
                    console.log('map',dataItem);
                    <option value={dataItem.category}>{dataItem.category}</option>
                })}
            </select> */}
            
            <div className="home__row">
                
                {data.map((item)=>
                    <Product id={item.id} title={item.title} price={item.price} image={item.image}/>
               
                )}
                
            </div>
         </div>
    )
}

export default Home
