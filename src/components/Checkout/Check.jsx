import React from 'react'
import { Link } from 'react-router-dom'
import './Check.scss'
function Check() {
  return (
    <div className='check'>
       <div className="home-check">
        <Link className='check-home' to={"/productcheckout"}>Home </Link>
        /
        <Link className='checkshop' to={"/shop"}> Shop </Link>
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


        </div>

    </div>

    </div>
  )
}

export default Check