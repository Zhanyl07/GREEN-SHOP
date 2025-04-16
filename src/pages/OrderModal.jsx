import React from 'react';
import './style/OrderModal.scss';
import productcheck from '../assets/image/productcheck.png'
import thank from '../assets/svg/thank.svg'

const OrderModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-all">
        <button className="modal-close" onClick={onClose}>×</button>
            <img src={thank} alt="" />
        <p>Your order has been received.</p>

        </div>
       
        <div className="modal-info">
        <div className="all-order">

            <div className="order">
                <p>Order Number</p>
                <strong>19586687</strong>
            </div>
            <div className="line"></div>

            </div>


            <div className="all-order">
            <div className="order">
                <p>Date</p>
                <strong>15 Sep, 2021</strong>
            </div>
            <div className="line"></div>

            </div>

            <div className="all-order">
            <div className="order">
                <p>Total</p>
                <strong>2,699.00</strong>
            </div>
            <div className="line"></div>

            </div>

            <div className="all-order">
            
            <div className="order">
                <p>Payment Method</p>
                <strong>Cash on delivery</strong>
            </div>
            <div className="line"></div>

            </div>
            
           
            
                     
            
        </div>
        <div className="const">
          <h3>Order Details</h3>
          </div>

        <div className="detal">
         

          <div className="detal-product">
              <p>Products</p>
              <div className="p-pro">
                <h3>Qty</h3>
                <h4>Subtotal</h4>
              </div>
          </div>
          <div className="line"></div>

           <div className="product1">
                          <img src={productcheck} alt="" />
          
                          <div className="all-daisy">
          
                          <div className="pro-daisy">
                              <p>Barberton Daisy</p>
                          </div>
                          <div className="sku">
                              <p>SKU:</p>
                              <span>1995751877966</span>
                          </div>
                          </div>
          
                          <div className="x2">
                              <p>(x 2)</p>
                          </div>
                          <div className="pro-price">
                              <span>$238.00</span>
                          </div>
          
                      </div>


                      
           <div className="product1">
                          <img src={productcheck} alt="" />
          
                          <div className="all-daisy">
          
                          <div className="pro-daisy">
                              <p>Barberton Daisy</p>
                          </div>
                          <div className="sku">
                              <p>SKU:</p>
                              <span>1995751877966</span>
                          </div>
                          </div>
          
                          <div className="x2">
                              <p>(x 2)</p>
                          </div>
                          <div className="pro-price">
                              <span>$238.00</span>
                          </div>
          
                      </div>


                      
           <div className="product1">
                          <img src={productcheck} alt="" />
          
                          <div className="all-daisy">
          
                          <div className="pro-daisy">
                              <p>Barberton Daisy</p>
                          </div>
                          <div className="sku">
                              <p>SKU:</p>
                              <span>1995751877966</span>
                          </div>
                          </div>
          
                          <div className="x2">
                              <p>(x 2)</p>
                          </div>
                          <div className="pro-price">
                              <span>$238.00</span>
                          </div>
          
                      </div>

        </div>
        <div className="shiping">
          <div className="text">
            <p>Shiping</p>
            <span>Total</span>
          </div>
          <div className="price">
            <p>$16.00</p>
            <span>$2,699.00</span>
          </div>
        </div>
        <div className="line"></div>

        <div className="opis">
            <p>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
        </div>




        <button className="track-btn">Track your order</button>

        <div className="foot"></div>
      </div>
    </div>
  );
};

export default OrderModal;
