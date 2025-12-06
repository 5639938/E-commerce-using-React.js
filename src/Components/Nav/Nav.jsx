/* eslint-disable no-unused-vars */

import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import "./Nav.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




function Nav() {
    const dispatch = useDispatch();
    let item = useSelector(state => state)
    console.log(item);
    return (
        <div className='nav'>
            <div className='top-nav'>
                <Link to="/" ><div className='logo'>
                    <span>V-shop</span><FaShopify />

                </div>
                </Link>
                <form className='search-box'>
                    <input type='text' placeholder='search items..' />
                    <button><IoIosSearch />
                    </button>
                </form>
              <Link to = '/cart'><div className='cart-box'>
                    <FiShoppingCart />
                    <span>{item.cart.length}</span>


                </div>
                </Link>

            </div>
            <div className='bottom-nav'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Shop"><li>Shop</li></Link>
                <Link to="/Cart"><li>Cart</li></Link>
                <Link to = "/Contact"><li>Contact</li></Link>



            </div>


        </div>
    )
}

export default Nav

