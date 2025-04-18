import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Shoping.scss'; 
import productcheck from '../../assets/image/productcheck.png';
import green from '../../assets/image/g.png'

import deleteimg from '../../assets/svg/delete.svg';
function Shopping() {
  return (
    <div className='shopping'>
      <div className="home-shopping">
        <Link className='shopping-home' to="/">Home</Link>
        /
        <Link className='shopping-shop' to="/shop">Shop</Link>
        /
        <Link className='shopping-cart' to="/shop">Shopping Cart</Link>
      </div>

      <div className="all-shopping">
        <div className="info-shopping">
          <p>Products</p>
          <p className='price'>Price</p>
          <p className='quantity'>Quantity</p>
          <p className='total'>Total</p>

          <div className="text1">
            <p> Cart Totals</p>
          </div>
        </div>

        

        <div className="line"></div>
<div className="rglt">
        <div className="shopping-left">
          <div className="product-shopping">
            <img src={productcheck} alt="Product" />

            <div className="shopping-daisy">
              <div className="pro-shopping">
                <p>Barberton Daisy</p>
              </div>
              <div className="sku-shopping">
                <p>SKU:</p>
                <span>1995751877966</span>
              </div>
            </div>

            <div className="shop-price">
              <span>$119.00</span>
            </div>

            <div className="quantity-shopping">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>

            <div className="shopping-price">
              <span>$119.00</span>
            </div>

            <div className="shopping-delete">
          <img src={deleteimg} alt="" />
        </div>

        

          </div>


          <div className="product-shopping">
            <img src={productcheck} alt="Product" />

            <div className="shopping-daisy">
              <div className="pro-shopping">
                <p>Barberton Daisy</p>
              </div>
              <div className="sku-shopping">
                <p>SKU:</p>
                <span>1995751877966</span>
              </div>
            </div>

            <div className="shop-price">
              <span>$119.00</span>
            </div>

            <div className="quantity-shopping">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>

            <div className="shopping-price">
              <span>$119.00</span>
            </div>

            <div className="shopping-delete">
          <img src={deleteimg} alt="" />
        </div>

          </div>


          <div className="product-shopping">
            <img src={productcheck} alt="Product" />

            <div className="shopping-daisy">
              <div className="pro-shopping">
                <p>Barberton Daisy</p>
              </div>
              <div className="sku-shopping">
                <p>SKU:</p>
                <span>1995751877966</span>
              </div>
            </div>

            <div className="shop-price">
              <span>$119.00</span>
            </div>

            <div className="quantity-shopping">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>

            <div className="shopping-price">
              <span>$119.00</span>
            </div>

            <div className="shopping-delete">
          <img src={deleteimg} alt="" />
        </div>

        
        


          </div>
          
        </div>
        


        <div className="shopping-right">
        
        <div className="line1"></div>

          
        <div className="coupon">
          <p>Coupon Apply</p>
        </div>
          <div className="right">
            <input type="text" placeholder='Enter coupon code here...'/>
            <button>Apply</button>

          </div>

          <div className="sub-shoping">

            <div className="sub-text">
              <p>Subtotal</p>
              <span className='two'>$2,683.00</span>
            </div>

            
            <div className="sub-text1">
              <p>Coupon Discount</p>
              <span className='two'>(-) 00.00</span>
            </div>

            
            <div className="sub-text2">
              <p>Shiping</p>
              <span className='two'>$16.00</span>
            </div>

            <div className="link">
              <Link>
              <p>View shipping charge</p>
              </Link>
            </div>
          </div>

          <div className="sub-text3">
              <p>Total</p>
              <span className='two'>$2,699.00</span>
            </div>

          <div className="proseed">
            <Link to={"/productcheckout"}>
            <button>Proceed To Checkout</button>
            </Link>
            <Link>
            <p>Continue Shopping</p>
            </Link>
          </div>



       
        </div>
        </div>

      </div>


      
          <div className="releted1">
              <h3>Releted Products</h3>
              <div className="line1"></div>
      
              <div className="oll1">
                  {[...Array(8)].map((_, i) => (
                      <div className="rel-product1" key={i}>
                          <img src={green} alt="" />
                          <div className="rel-text1">
                              <p>Beach Spider Lily</p>
                              <span>$129.00</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
    </div>
  );
}

export default Shopping;
