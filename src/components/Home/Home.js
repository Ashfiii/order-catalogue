import React, {useState, useEffect} from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home({searchData}) {

    const [selectedCategory, setSelectedCategory] = useState('');

    const filterDropdown = searchData.filter(result =>{
        return result.group.category === selectedCategory;       
    }); 

    return (

        <>
        <div className="dropdown">
            <select
              value={selectedCategory}
              onChange={(e)=>{setSelectedCategory(e.target.value)}}
            >
              <option>Clothing</option>
              <option>Food and Beverages</option>
              <option>Electronics</option>
            </select>
        </div>

        <div className="home">
            <div className="home__row">
                {filterDropdown.length>0 ?  
                filterDropdown.map(selectedCategory => (
                    <Product 
                    id={selectedCategory.id} 
                    title={selectedCategory.title} 
                    price={selectedCategory.price} 
                    image={selectedCategory.image} 
                    category={selectedCategory.group.category}/>
                ))
                :
                searchData.map((item)=>
                    <Product 
                    id={item.id} 
                    title={item.title} 
                    price={item.price} 
                    image={item.image} 
                    category={item.group.category}/>
                )} 
                
            </div>
        </div>
    
        </>
    
        
    )
}

    
export default Home
