


import React from 'react'
import "./Cart.css";
import {useSelector } from "react-redux"
import ec from "../../assets/emptycart.png"
import CartCard from '../../Components/Cartcard/Cartcard';



function Cart() {
  let items = useSelector((state) => state);
  

  return (
    <div className="cart">

      {items.cart.length <= 0 ? 
        <div className="empty-cart">
          <img src={ec} alt="" />
          <h1>EMPTY Cart</h1>
        </div>:(<div className="cartcard-section">
          {items.cart.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}SSS
              image={item.image}
              id={item.id}
            />
          ))}
        
        </div>
      )}

    </div>
  );
}


export default Cart

