



import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri"
import "./CartCard.css"
import { useDispatch } from 'react-redux'
import { RemoveItem } from '../../redux/cartSlice'



function CartCard({name, price,image,id}) {
  const dispatch = useDispatch();
  
  return (
    <div className='CartCard'>
      <div className='left-card'>
        <img src={image} alt="" />
        <div className='name-price'>
          <span>{name}</span>
          <span>Rs {price} /-</span>
          
        </div>
      </div>
      <div className='right-card'>
        <button onClick={()=>{
          dispatch(RemoveItem(id))
        }}>Remove <RiDeleteBin5Line />
        </button>
      </div>

    </div>
  )
}

export default CartCard
