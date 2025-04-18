import React,{useState} from 'react'
import OrderModal from '../../pages/OrderModal'
import { Link } from 'react-router-dom'
import productcheck from '../../assets/image/productcheck.png'
import visa from '../../assets/image/visa.png'
import paypal from '../../assets/image/paypal.png'
import mastercard from '../../assets/image/mastercard.png'
import american from '../../assets/image/american.png'
import './Check.scss'
function Check() {
    const [showModal, setShowModal] = useState(false)

    const handePlaceOrder = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
  return (
    <div className='check'>
       <div className="home-check">
        <Link className='check-home' to={"/"}>Home </Link>
        /
        <Link className='checkshop1' to={"/shop"}> Shop </Link>
        /
        <Link className='checkshop' to={"/productcheckout"}> Checkout</Link>
    </div>

    <div className="check-block">

        <div className="left-check">
            <h3>Billing Address</h3>

            <div className="oll-check">

            <div className="component">
                <div className="com-text">
                <p>First Name</p>
                <h4>*</h4>
                </div>
                <input type="text" />
            </div>

            <div className="component">
                <div className="com-text">
                <p>Last Name</p>
                <h4>*</h4>
                </div>
                <input type="text" />
            </div>

            

            </div>

            <div className="oll-check">

<div className="component">
    <div className="com-text">
    <p>Country / Region</p>
    <h4>*</h4>
    </div>
    <input type="text" placeholder='Select a country / region'/>
</div>

<div className="component">
    <div className="com-text">
    <p>Town / City</p>
    <h4>*</h4>
    </div>
    <input type="text" />
</div>



</div>


<div className="oll-check">

<div className="component">
    <div className="com-text">
    <p>Street Address</p>
    <h4>*</h4>
    </div>
    <input type="text" placeholder='House number and street name'/>
</div>

<div className="component">
    <div className="com-text">
        <p></p>
        <h4></h4>
    </div>
    <input style={{marginTop: "33.6px"}} type="text" placeholder='Appartment, suite, unit, etc. (optional)'/>
</div>



</div>


<div className="oll-check">

<div className="component">
    <div className="com-text">
    <p>State</p>
    <h4>*</h4>
    </div>
    <input type="text" placeholder='Select a state'/>
</div>

<div className="component">
    <div className="com-text">
    <p>Zip</p>
    <h4>*</h4>
    </div>
    <input type="text" />
</div>



</div>



<div className="oll-check">

<div className="component">
    <div className="com-text">
    <p>Email address</p>
    <h4>*</h4>
    </div>
    <input type="text" />
</div>

<div className="component">
    <div className="com-text">
    <p>Phone Number</p>
    <h4>*</h4>
    </div>
    <input style={{ width: '78px' }} type="text" placeholder='+996'/>


</div>



</div>

<div className="radio">
    <input type="radio" />
    <p>Ship to a different address?</p>
</div>

<div className="order">
    <p>Order notes (optional)</p>
    <div className="div"></div>
</div>

        </div>
        <div className="right-check">
            <h3>Your Order</h3>
            <div className="subtotal">
                <p>Products</p>
                <p>Subtotal</p>
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

            <div className="click">
                <p>Have a coupon code? <a href="">Click here</a>
                </p>
            </div>

            <div className="cartochka">
                <div className="ctka-text">
                    <p>Subtotal</p>
                    <p>Coupon Discount</p>
                    <p>Shoping</p>
                </div>
                <div className="ctka-price">
                    <p>$2,683.00</p>
                    <span className='coupon'>(-) 00.00</span>
                    <h3>$16.00</h3>
                </div>
            </div>

            <a className='view' href="">View shipping charge</a>
            <div className="line"></div>

            <div className="view-total">
                <p>Total</p>
                <span>$2,699.00</span>

            </div>

            <div className="payment">
  <h3>Payment Method</h3>

  <label className="custom-radio">
    <input
      type="radio"
      name="payment"
      value="cash"
      defaultChecked
    />
    <span className="checkmark"></span>
    <div className="check-img">
        <img className='paypal' src={paypal} alt="" />
        <img className='master' src={mastercard} alt="" />
        <img className='visa' src={visa} alt="" />
        <img className='american' src={american} alt="" />
    </div>

  </label>

  <label className="custom-radio">
    <input
      type="radio"
      name="payment"
      value="card"
    />
    <span className="checkmark"></span>
    <span>Dorect bank transfer</span>
  </label>
  

  <label className="custom-radio">
    <input
      type="radio"
      name="payment"
      value="card"
    />
    <span className="checkmark"></span>
    <span>Cash on delivery</span>
  </label>
</div>

<div className="place-btn">
    <button onClick={handePlaceOrder}>Place Order</button>
</div>



           




        </div>


    </div>
   
        {showModal && <OrderModal onClose={handleCloseModal} />}


    </div>
  )
}

export default Check