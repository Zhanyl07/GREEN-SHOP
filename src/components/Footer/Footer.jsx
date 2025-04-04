import React from 'react'
import "../Footer/Footer.scss"

function Footer() {
  return (
    <div className='footer container'>

      <div className='in-footer'>

        <div className='top'>
          <div>
            {/* <img src={plant1} alt="" /> */}
            <h3>Garden Care</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div>
            {/* <img src={plant2} alt="" /> */}
            <h3>Plant Renovation</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div>
            {/* <img src={plant3} alt="" /> */}
            <h3>Watering Graden</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>

          <div>
            <h3>Would you like to join newsletters?</h3>
              <div className='top-input'>
                <input type="email" placeholder='enter your email address...'/>
                <button>Join</button>
              </div>
            {/* <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>   */}
          </div>
        </div>

        <div className='center'>
          <div className='logo'>
            {/* <img src={logo} alt="" /> */}
          </div>
          <div className='location'>
            {/* <img src={location} alt="" /> */}
            <p>70 West Buckingham Ave.
            Farmingdale, NY 11735</p>
          </div>
          <div className='email'>
            {/* <img src={email} alt="" /> */}
            <p>contact@greenshop.com</p>
          </div>
          <div className='call'>
            {/* <img src={call} alt="" /> */}
            <p>+88 01911 717 490</p>
          </div>
        </div>

        <div className='bottom'>
          <div className='my-account'>
            <p>My account</p>
            <p>Our stories</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>
          <div className='help-guide'>
            <p>Help Center</p>
            <p>How to Buy</p>
            <p>Shipping & Delivery</p>
            <p>Product Policy</p>
            <p>How to Return</p>
          </div>
          <div className='categories'>
            <p>House Plants</p>
            <p>Potter Plants</p>
            <p>Seeds</p>
            <p>Small Plants</p>
            <p>Accessories</p>
          </div>
          <div className='social-media'>
            <div>
              <h3>Social Media</h3>
            </div>
            <div className='social-programs'>
              {/* <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={camera} alt="" /> */}
            </div>
            <div>
              <h3>We accept</h3>
            </div>
            <div className='credit-cards'>
              {/* <img src={paypal} alt="" />
              <img src={mastercard} alt="" />
              <img src={visa} alt="" />
              <img src={aexpress} alt="" /> */}
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
