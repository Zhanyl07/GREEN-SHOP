import React from 'react'
import "../Header/Header.scss"
import { Link } from 'react-router-dom'
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 

import logo from "../../assets/svg/logo.svg"
import search from "../../assets/svg/search.svg"
import cart from "../../assets/svg/cart.svg"
import login from "../../assets/svg/login.svg"
import wishlist from "../../assets/svg/wishlist.svg"

function Header() {
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.items);


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
          <Link to="/account">Plant Care</Link>
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
          <Link to="/cart">
            <img src={cart} alt="cart" />
          </Link>
          <Link to={"/login"}>
            <div className='login'>
              <button onClick={handlePersonClick}>
                <img src={login} alt="login" />
                Login
              </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Header
