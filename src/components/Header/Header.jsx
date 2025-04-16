import React from 'react'
import "../Header/Header.scss"
import { Link } from 'react-router-dom'
import logo from "../../assets/svg/logo.svg"
import search from "../../assets/svg/search.svg"
import cart from "../../assets/svg/cart.svg"
import login from "../../assets/svg/login.svg"

function Header() {
  return (
    <div>
      <div className='header container'>

        <Link to="/" className='logo'>
          <img src={logo} alt="" />
        </Link>

        <div className='lists'>
          <Link className='home' to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/plantcare">Plant Care</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        <div className='search'>
          <Link to={"/search"}>
            <img src={search} alt="" />
            </Link>
            <Link to={"/cart"}>
            <img src={cart} alt="" />
            </Link>
            <Link to={"/login"}>
          <div className='login'>
            <button>
              <img src={login} alt="" />
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
