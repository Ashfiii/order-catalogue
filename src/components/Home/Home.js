import React, {useState, useEffect} from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home({data}) {

    const [selectedcategory, setSelectedCategory] = useState('');

    const filterDropdown = data.filter(result =>{
        return result.category === selectedcategory;       
    });

    //console.log(filterDropdown);

    return (

        <>
        <div className="dropdown">
            <select
              value={selectedcategory}
              onChange={(e)=>{setSelectedCategory(e.target.value)}}
            >
              {data.map(categoryItem => (
                <option value={categoryItem.category}>
                  {categoryItem.category}
                </option>
              ))}
            </select>
        </div>

        <div className="home">
            <div className="home__row">
                {filterDropdown ?  
                filterDropdown.map(selectedCategory => (
                    <Product 
                    id={selectedCategory.id} 
                    title={selectedCategory.title} 
                    price={selectedCategory.price} 
                    image={selectedCategory.image} 
                    category={selectedCategory.category}/>
                ))
                :
                    data.map((item)=>
                    <Product 
                    id={item.id} 
                    title={item.title} 
                    price={item.price} 
                    image={item.image} 
                    category={item.category}/>
                )} 
                
            </div>
        </div>
    
        </>
    
        
    )
}

    
export default Home
