import React from 'react'
import "../Footer/Footer.scss"
import { Link } from 'react-router-dom'

import plant1 from "../../assets/svg/plant1.svg"
import plant11 from "../../assets/svg/plant11.svg"
import plant2 from "../../assets/svg/plant2.svg"
import plant3 from "../../assets/svg/plant3.svg"
import pbackg from "../../assets/svg/pbackg.svg"
import logo from "../../assets/svg/logo.svg"
import location from "../../assets/svg/location.svg"
import email from "../../assets/svg/email.svg"
import call from "../../assets/svg/call.svg"
import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import twitter from "../../assets/svg/twitter.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import camera from "../../assets/svg/camera.svg"
import cards from "../../assets/svg/cards.svg"

function Footer() {
  return (
    <div className='footer container'>

      <div className='in-footer'>

        <div className='top'>
          <div className='garden'>
            <div className='plant1'>
              <img src={plant1} alt="" />
              <img src={plant11} alt="" />
            </div>
            <div className='plant1-bc'>
              <img src={pbackg} alt="" />
            </div>
            <h3>Garden Care</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className='garden'>
            <div className='plant2'>
              <img src={plant2} alt="" />
            </div>
            <div className='plant2-bc'>
              <img src={pbackg} alt="" />
            </div>
            <h3>Plant Renovation</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className='garden'>
            <div className='plant3'>
              <img src={plant3} alt="" />
            </div>
            <div className='plant3-bc'>
              <img src={pbackg} alt="" />
            </div>
            <h3>Watering Graden</h3>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>

          <div className='input'>
            <h3>Would you like to join newsletters?</h3>
              <div className='top-input'>
                <input type="email" placeholder='enter your email address...'/>
                <button>Join</button>
              </div>
            <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>  
          </div>
        </div>

        <div className='center'>
          <Link to="/" className='logo'>
            <img src={logo} alt="" />
          </Link>
          <div className='location'>
            <img src={location} alt="" />
            <p>70 West Buckingham Ave.
            Farmingdale, NY 11735</p>
          </div>
          <div className='email'>
            <img src={email} alt="" />
            <p>contact@greenshop.com</p>
          </div>
          <div className='call'>
            <img src={call} alt="" />
            <p>+88 01911 717 490</p>
          </div>
        </div>

        <div className='bottom'>
          <div className='my-account'>
            <h3>My Account</h3>
            <p>My account</p>
            <p>Our stories</p>
            <p>Contact us</p>
            <p>Career</p>
            <p>Specials</p>
          </div>
          <div className='help-guide'>
            <h3>Help & Guide</h3>
            <p>Help Center</p>
            <p>How to Buy</p>
            <p>Shipping & Delivery</p>
            <p>Product Policy</p>
            <p>How to Return</p>
          </div>
          <div className='categories'>
            <h3>Categories</h3>
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
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedin} alt="" />
              <img src={camera} alt="" />
            </div>
            <div>
              <h3>We accept</h3>
            </div>
            <div className='credit-cards'>
              <img src={cards} alt="" />
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
