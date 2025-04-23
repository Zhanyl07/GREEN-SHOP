import React from 'react';
import "../Categories/Categories.scss";

import { useSelector, useDispatch } from 'react-redux';
import { addWish, deleteWish } from "../../redux/Wish/WishSlice"

import sale from "../../assets/svg/sale.svg"
import cart from "../../assets/svg/cart.svg"
import wishlist from "../../assets/svg/wishlist.svg"
import wishlistFilled from "../../assets/svg/wishlist-filled.svg"
import search from "../../assets/svg/search.svg"
import banner from "../../assets/image/banner.png"

function Categories() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);

  const product = {
    id: 1,
    name: "Barberton Daisy",
    price: 119,
    originalPrice: 229,
    image: banner,
  };

  const isWishlisted = items.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(deleteWish(product.id));
    } else {
      dispatch(addWish(product));
    }
  };

  return (
    <div className='categories container'>
      <div className='category'>

        <div className='category-plants'>
          <h2>Categories</h2>
          <ul>
            <li>House Plants</li>
          </ul>

          <div className="price-filter">
            <h3>Price Range</h3>
            <div className="slider-wrapper">
              <input type="range" min={39} max={2000} />
            </div>
            <div className="range-values">
              Price: <span>$39</span> <span>-</span> <span>$1230</span>
            </div>
            <button className="filter-btn">Filter</button>
          </div>

          <div className='size'>
            <h2>Size</h2>
            <ul>
              <li>Small</li>
              <li>Medium</li>
              <li>Large</li>
            </ul>
          </div>

          <div className='sale-img'>
            <img src={sale} alt="" />
          </div>
        </div>

        <div className='all-plants'>
          <div className='top-plants'>
            <ul>
              <li>All Plants</li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
            <div className="sort-wrapper">
              <label htmlFor="sort-select">Sort by:</label>
              <select id="sort-select" className="sort-select">
                <option value="default">Default sorting</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className='bottom-plants'>
            <div className='box'>
              <div className='top-card'>
                <div className='discount'>
                  <h3>13% OFF</h3>
                </div>
                <div className='box-img'>
                  <img src={banner} alt="plant" />
                </div>
                <div className='add'>
                  <img src={cart} alt="cart" />
                  <img
                    src={isWishlisted ? wishlistFilled : wishlist}
                    alt="wishlist"
                    onClick={toggleWishlist}
                    style={{ cursor: 'pointer' }}
                  />
                  <img src={search} alt="search" />
                </div>
              </div>
              <div className='bottom-card'>
                <h3>{product.name}</h3>
                <div className='price'>
                  <b>${product.price}</b>
                  <del>${product.originalPrice}</del>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <button className="page">&gt;</button>
      </div>
    </div>
  );
}

export default Categories;
