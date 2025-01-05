import React, { useContext } from 'react'
import './Menu.css'
import { menu_list } from '../assets/assets'

const Menu = () => {

    return (
        <div className='container menu-container'>
            <h1>Explore our Menu</h1>
            <p>Explore our wide range of delicious meals, crafted with fresh ingredients and packed with flavor. Choose from your favorite cuisines and enjoy!</p>
            <div className="manu-items">
                {menu_list.map((item, index) => (


                    <div key={index} className="manu-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu