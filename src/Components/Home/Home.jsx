

import React from 'react'
import bg from "../../assets/bg0.gif"
import Nav from '../Nav/Nav'
import Product from '../Product/Product'
import{category} from "../../category/"
import { Dummydata } from "../../Dummydata/"
import { useState } from 'react'
import "./Home.css"



function Home() {
    let [cate, setCate] = useState(Dummydata)
    function filter(category) {
        const updateDate = Dummydata.filter((item) => (item.category === category))
        setCate(updateDate)
    }
    return (
        <div className='home' >
            <div className='hero-bg'>
                <img src={bg} alt='' />
            </div>
            <div className='category-section'>
            
                {category.map((item) => (
                    <div className='category-card' onClick={() => {
                        filter(item.name)

                    }}>
                        <img src={item.image} alt='' />
                        <span>{item.name}</span>
                        </div>
                        ))}
                        <h1>Trending products</h1>
                <div className='product-section'>
                    {cate.slice(0, 7).map((item, index) => (
    <Product 
        key={index} 
        name={item.name} 
        price={item.price} 
        image={item.image} 
        id = {item.id}
        />
))}

                </div>

            </div>

        </div>
    )
}





export default Home

                    





                



                