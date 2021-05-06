import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

function Header({data, filterSearch}) {

    const [searchTerm, setSearchTerm] = useState('');

    const cartArrr= useSelector(
        (state) => state.carts.cartData
      );

       const filterFunc =(e)=>{
        setSearchTerm(e.target.value);
        let filteredList = data.filter(item =>{
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        filterSearch(filteredList, searchTerm);
       }

    return (
        <div className="header">
            <div className="header__search">
                <input 
                className="header__searchInput" 
                type="text"
                placeholder="Search here..."
                onChange={(e) => filterFunc(e)}
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{cartArrr.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
