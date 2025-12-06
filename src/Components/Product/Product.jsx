
import React from 'react'
import"./Product.css"
import { useDispatch } from 'react-redux';
import{Additem} from "../../redux/cartSlice"
function Product({name,image,price,id}) {
  let dispatch = useDispatch();
  return (
    <div className='product'>
      <img src ={image} alt = "" />
      <div className='product-details'>
      <span className='name'>{name}</span>
      <span className='price'>Rs {price}/-</span>
      <button onClick={()=>{
        dispatch(Additem(id))
      }}>Add +</button>
    </div>
    </div>
  )
}

export default Product
