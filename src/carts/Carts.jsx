import React, { useContext } from 'react'
import './Carts.css';
import { StoreContext } from '../context/StoreConext';

const Carts = () => {

  const { cartItems, addToCart, removeFromCart, food_list } = useContext(StoreContext);

  return (
    <div className='container cart-container'>
      <h1>Carts</h1>
      <div className="cart-items">
        <div className="cart-item-title cart-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='title-hr' />
      </div>

      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <>
              <div className='cart-item-title cart-foodlist'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{cartItems[item._id] * item.price}</p>
                <p>x</p>
              </div>
              <hr  className='hr'/>
            </>
          )
        }

      })}

    </div>
  )
}

export default Carts