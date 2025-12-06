
import React from 'react'
import "./Shop.css"
import { category } from '../../category'
import { useState } from 'react'
import { Dummydata } from '../../Dummydata'
import { FaShopify } from "react-icons/fa";
import Product from '../../Components/Product/Product'

function Shop() {
  let [cate, setCate] = useState(Dummydata)
  function filter(category) {
    if (category === "All") {
      setCate(Dummydata)
    }
    else {
      const updateDate = Dummydata.filter((item) => (item.category === category))
      setCate(updateDate)

    }

  }
  return (
    <div className='shop'>
      <div className="heading">
        <span>Shop</span><FaShopify />

      </div>
      <div className='category-section'>

        {category.slice(0, 7).map((item) => (
          <div className='category-card' onClick={() => {
            filter(item.name)

          }}>
            <img src={item.image} alt='' />
            <span>{item.name}</span>
          </div>
        ))}
        <div className='product-section'>
          {cate.map((item, index) => (
            <Product
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Shop
