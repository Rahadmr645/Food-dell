import React, { useContext, useState } from 'react'
import './Carts.css';
import { StoreContext } from '../context/StoreConext';

const Carts = () => {

  const { cartItems, removeFromCart, food_list } = useContext(StoreContext);
 
  // calculate subtotal and total 

  const Subtotal = food_list.reduce((total, item) => {
    if(cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  },0);

  const deliveryFee = Subtotal>0?2:0;
  const Total = Subtotal + deliveryFee;

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
        
      {Object.keys(cartItems).length === 0 && <h1>Oops, no pruduct in cart</h1>}

      </div>
      <div className="cart-info"  >
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-item-title cart-foodlist ">
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p >{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{cartItems[item._id] * item.price}</p>
                  <p style={{cursor:'pointer'}} onClick={() => removeFromCart(item._id)}>x</p>
                </div>
                <hr className='hr-row' />
              </>
            )
          }
        })}
      </div>
      <div className='carts-bottom'>
        <div className='carts-totals'>
          <h1>Carts Total</h1>
          <div className='carts-total-para'>
            <h4>Subtotal</h4>
            <p>{Subtotal}$</p>
          </div>
          <hr className='totals-hr' />
          <div className='carts-total-para'>
            <h4>Delivery fee</h4>
            <p>{deliveryFee}$</p>
          </div>
          <hr className='totals-hr' />
          <div className='carts-total-para'>
            <h4></h4>
            <p>{Total}$</p>
          </div>
          <button>PROCEED TO CHACKOUT</button>
        </div>
        <div className="promocode">
          <h4>If you have any promocode, Enter it here</h4>
          <input type='text' placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>

  )
}

export default Carts