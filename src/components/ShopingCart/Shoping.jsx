import React, { useState } from 'react';
import './Shoping.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Barberton from "../../assets/image/Barberton.png"
import icon from "../../assets/svg/icon.svg"

function Shoping ()  {


  const { list } = useSelector((state) => state.carts)

  const [quantity, setQuantity] = useState(2); 

  function increase() {
    setQuantity((prev) => Math.min(prev + 1, 99));
  }

  function decrease() {
    setQuantity((prev) => Math.max(prev - 1, 0)); 
  }

  return (
    <div className='cart container'>

        <div className='link'>
          <Link className='home' to="/">Home</Link>
          <div>/</div>
          <Link to="/shop">Shop</Link>
          <div>/</div>
           <Link to="/shopping">Shopping Cart</Link>
        </div>

              <div className='box-name'>
                <ul>
                  <li>Products</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Total</li>
                  <li>Cart Totals</li>
                </ul>
              </div>
      <div className='content'> 
          <div className='cart-in'>
            <div className='box'>

              <div className='bottom-card'>

                <div className='game-img'>
                  <img src={Barberton} alt="" />
                  <div className='barberton'>
                  <h5>Barberton Daisy</h5>
                  <p>SKU: 1995751877966</p>
                  </div>
                </div>
                <div className='game-texts'>
                  <p>$550</p>
                  <div className="number-input">
                    <div className="buttons">
                      <button onClick={decrease}>-</button>
                        <input 
                            type="text" 
                            className="number" 
                            value={quantity.toString().padStart(2, '0')} 
                            readOnly
                        />
                        <button onClick={increase}>+</button>
                    </div>
                  </div>
                  <p>$1100</p>
                  <div className='icon'>
                  <img src={icon} alt="" />
                  </div>
                </div>
              </div>

              {/* <div className='bottom-card'>

              <div className='game-img'>
                <img src={Barberton} alt="" />
                <div className='barberton'>
                <h5>Barberton Daisy</h5>
                <p>SKU: 1995751877966</p>
                </div>
              </div>
              <div className='game-texts'>
                <p>$550</p>
                <div className="number-input">
                  <div className="buttons">
                    <button onClick={decrease}>-</button>
                      <input 
                          type="text" 
                          className="number" 
                          value={quantity.toString().padStart(2, '0')} 
                          readOnly
                      />
                      <button onClick={increase}>+</button>
                  </div>
                </div>
                <p>$1100</p>
              </div>
              <div className='icon'>
              <img src={icon} alt="" />
              </div>
              </div>

              <div className='bottom-card'>

                <div className='game-img'>
                  <img src={Barberton} alt="" />
                  <div className='barberton'>
                  <h5>Barberton Daisy</h5>
                  <p>SKU: 1995751877966</p>
                  </div>
                </div>
                <div className='game-texts'>
                  <p>$550</p>
                  <div className="number-input">
                    <div className="buttons">
                      <button onClick={decrease}>-</button>
                        <input 
                            type="text" 
                            className="number" 
                            value={quantity.toString().padStart(2, '0')} 
                            readOnly
                        />
                        <button onClick={increase}>+</button>
                    </div>
                  </div>
                  <p>$1100</p>
                </div>
                <div className='icon'>
                <img src={icon} alt="" />
                </div>
              </div> */}

            </div>
          </div>
          <div className='shop'>     
              <div className="cart-total">
                {/* <h3>Cart Totals</h3> */}
                <p>Coupon Apply</p>
                <div className='enter'>
                  <input type="text" placeholder='Enter coupon code here...'/>
                  <button className="checkout-btn">Apply</button>
                </div>
             
                <div className="cart-row">
                  <span>Subtotal</span>
                  <span>$2,683.00</span>
                </div>

                <div className='cart-row'>
                  <span>Coupon Discount</span>
                  <span>(-) 00.00</span>
                </div>

                <div className="cart-row">
                  <span>Shiping</span>
                  <span>$16.00</span>
                  <span>View shipping charge</span>
                </div>
              
                <div className="cart-row-total">
                  <span className='name'>Total</span>
                  <span className='price'>$2,699.00</span>
                </div>
                <button className="checkout-btn">Proceed To Checkout</button>
                <span className='continue'>Continue Shopping</span>
              </div>
        

          </div>
      </div>
    </div>
  );
}


export default Shoping
