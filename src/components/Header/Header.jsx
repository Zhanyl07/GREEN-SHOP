import React from 'react'
import "../Header/Header.scss"
import { Link } from 'react-router-dom'
import { auth } from "../../firebase";
import { useSelector } from "react-redux"; 
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";

import logo from "../../assets/svg/logo.svg"
import search from "../../assets/svg/search.svg"
import cart from "../../assets/svg/cart.svg"

import logind from "../../assets/svg/login.svg"
import wishlist from "../../assets/svg/wishlist.svg"
import LoginModal from '../../pages/LoginModal';

function Header() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.carts.ali);
  const [showModal, setLoginModal] = useState(false)

      const navigate = useNavigate();

      const handlePersonClick = () => {
        if (auth.currentUser) {
          navigate("/profile");
        } else {
          navigate("/register");
        }
      };

      
  return (
    <div>
      <div className='header container'>

        <Link to="/" className='logo'>
          <img src={logo} alt="logo" />
        </Link>

        <div className='lists'>
          <Link className='home' to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/plantscare">Plant Care</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        <div className='search'>
          <Link to="/search">
            <img src={search} alt="search" />
          </Link>
          <Link className='wishlist' to="/wishlist">
            <div className="icon-wrapper">
              <img src={wishlist} alt="wishlist" />
              {wishlistItems.length > 0 && (
                <span className="wishlist-badge">{wishlistItems.length}</span>
              )}
            </div>
          </Link>
          <Link className='carts' to="/shopingcart">
            <img src={cart} alt="cart" />
              {cartItems.length > 0 && (
                <span className="wishlist-badge">{cartItems.length}</span>
              )}
          </Link>
        
            <div className='login'>
              <button onClick={handlePersonClick}>
                <img src={logind} alt="login" />
                Login
              </button>
            </div>

        </div>

      </div>

      {showModal && <LoginModal onClose={handleCloseModal} />}
    </div>
  )
}

export default Header
