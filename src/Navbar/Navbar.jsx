import React, { useState } from 'react'
import { assets } from '../assets/assets'

import './Navbar.css'
const Navbar = () => {

  const [selected, setSelected] = useState('home');

  return (
    <div className='navbar-container container '>
        <div className="left">
           <img style={{cursor:'pointer'}} src={assets.logo} alt="logo" />
        </div>
        <div className="middle">
            <ul>
                <li className={selected ==='home'?'borders':''} onClick={() => setSelected('home')} >home</li>
                <li className={selected ==='menu'?'borders':''} onClick={() => setSelected('menu')} >manu</li>
                <li className={selected ==='mobile-app'?'borders':''} onClick={() => setSelected('mobile-app')} >mobile-app</li>
                <li className={selected ==='contact-us'?'borders':''} onClick={() => setSelected('contact-us')} >contact-us</li>
            </ul>
        </div>
        <div className="right">
             <img src={assets.search_icon} alt="" />
             <div className="basket">
                <img src={assets.basket_icon} alt="basket" />
                <div className="dot"></div>
             </div>
             <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar